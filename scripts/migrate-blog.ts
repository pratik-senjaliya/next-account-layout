import 'dotenv/config'
import { createClient } from '@sanity/client'
import { htmlToBlocks } from '@sanity/block-tools'
import { JSDOM } from 'jsdom'
import { Schema } from '@sanity/schema'
import { blogPosts } from '../lib/blog'

// Sanity client configuration
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!

// Check for API token
const token = process.env.SANITY_API_TOKEN
if (!token) {
    console.error('\n❌ Error: SANITY_API_TOKEN environment variable not set')
    console.log('\n📝 To create a token:')
    console.log('   1. Go to https://www.sanity.io/manage/project/' + projectId)
    console.log('   2. Click API → Tokens')
    console.log('   3. Click "Add API token"')
    console.log('   4. Name it "Migration Script"')
    console.log('   5. Set permissions to "Editor"')
    console.log('   6. Copy the token')
    console.log('   7. Add to .env.local: SANITY_API_TOKEN=your_token_here\n')
    process.exit(1)
}

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
})

// Define a minimal schema for block content
const defaultSchema = Schema.compile({
    name: 'migrationSchema',
    types: [
        {
            type: 'object',
            name: 'post',
            fields: [
                {
                    name: 'content',
                    type: 'array',
                    of: [{ type: 'block' }],
                },
            ],
        },
    ],
})

const blockContentType = defaultSchema
    .get('post')
    .fields.find((field: any) => field.name === 'content').type

async function migrateBlogPosts() {
    console.log('🚀 Starting blog posts migration to Sanity...')
    console.log(`📦 Project: ${projectId}`)
    console.log(`📊 Dataset: ${dataset}`)
    console.log(`📝 Found ${blogPosts.length} blog posts to migrate\n`)

    let successCount = 0
    let errorCount = 0

    for (const post of blogPosts) {
        try {
            console.log(`📄 Processing: "${post.title}"`)

            // Convert HTML content to Portable Text blocks
            const blocks = htmlToBlocks(post.content, blockContentType, {
                parseHtml: (html) => new JSDOM(html).window.document,
            })

            // Create the Sanity document
            const sanityPost: any = { // Use 'any' for now to allow dynamic property addition
                _type: 'post',
                _id: `post-${post.slug}`,
                title: post.title,
                slug: {
                    _type: 'slug',
                    current: post.slug,
                },
                excerpt: post.excerpt,
                content: blocks,
                category: post.category,
                publishedAt: convertDateToISO(post.date),
                author: post.author,
                authorRole: post.authorRole,
                readTime: post.readTime,
            }

            // Handle image upload if URL is valid
            if (post.image && post.image.startsWith('http')) {
                console.log(`   📸 Uploading image...`)
                const imageAssetId = await uploadImageFromUrl(post.image)
                if (imageAssetId) {
                    sanityPost.mainImage = {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: imageAssetId,
                        },
                    }
                }
            }

            // Create or replace the document in Sanity
            await client.createOrReplace(sanityPost)
            successCount++
            console.log(`   ✅ Successfully migrated\n`)
        } catch (error) {
            errorCount++
            console.error(`   ❌ Error:`, error instanceof Error ? error.message : error)
            console.log('')
        }
    }

    console.log('\n' + '='.repeat(50))
    console.log(`🎉 Migration complete!`)
    console.log(`   ✅ Success: ${successCount}`)
    if (errorCount > 0) {
        console.log(`   ❌ Errors: ${errorCount}`)
    }
    console.log('='.repeat(50) + '\n')
}

// Helper: Convert "January 15, 2024" to ISO date (YYYY-MM-DD)
function convertDateToISO(dateStr: string): string {
    try {
        const date = new Date(dateStr)
        return date.toISOString().split('T')[0]
    } catch {
        return new Date().toISOString().split('T')[0]  // Fallback to today
    }
}

// Helper: Upload image from URL and return asset ID
async function uploadImageFromUrl(imageUrl: string): Promise<string | null> {
    try {
        const response = await fetch(imageUrl)
        if (!response.ok) throw new Error(`HTTP ${response.status}`)

        const arrayBuffer = await response.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        const asset = await client.assets.upload('image', buffer, {
            filename: imageUrl.split('/').pop()?.split('?')[0] || 'image.jpg',
        })

        return asset._id
    } catch (error) {
        console.warn(`   ⚠️  Image upload failed, skipping:`, error instanceof Error ? error.message : error)
        return null
    }
}

// Run migration
migrateBlogPosts().catch((error) => {
    console.error('\n💥 Migration failed:', error)
    process.exit(1)
})

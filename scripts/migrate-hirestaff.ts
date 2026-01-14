import 'dotenv/config'
import { createClient } from '@sanity/client'
import { hireStaffPositions } from '../lib/hire-staff'

// Sanity client configuration
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!
const token = process.env.SANITY_API_TOKEN

if (!token) {
    console.error('\n❌ Error: SANITY_API_TOKEN environment variable not set')
    process.exit(1)
}

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
})

// Helper to generate unique keys
const generateKey = () => Math.random().toString(36).substring(2, 15)

async function migrateHireStaff() {
    console.log('🚀 Starting hire staff migration to Sanity...')
    console.log(`📦 Project: ${projectId}`)
    console.log(`📊 Dataset: ${dataset}`)
    console.log(`📝 Found ${hireStaffPositions.length} positions to migrate\n`)

    let successCount = 0
    let errorCount = 0

    for (const position of hireStaffPositions) {
        try {
            console.log(`📄 Processing: "${position.title}"`)

            // Create the Sanity document with _key for all array items
            const sanityPosition: any = {
                _type: 'hireStaff',
                _id: `hirestaff-${position.slug}`,
                title: position.title,
                slug: {
                    _type: 'slug',
                    current: position.slug,
                },
                description: position.description,
                longDescription: position.longDescription,
                icon: position.icon,

                // Intro section - flat fields with _key for stats array
                introTitle: position.intro.title,
                introContent: position.intro.content,
                introStats: position.intro.stats.map((stat: any) => ({
                    _key: generateKey(),
                    _type: 'stat',
                    ...stat
                })),

                // Experience Levels (role-specific)
                experienceLevels: position.experienceLevels.map((level: any) => ({
                    _key: generateKey(),
                    ...level
                })),

                // Software Categories
                softwareCategories: position.softwareCategories.map((cat: any) => ({
                    _key: generateKey(),
                    ...cat
                })),

                // Trial info (single object, no _key needed)
                trial: position.trial,

                // Features
                features: position.features.map((f: any) => ({
                    _key: generateKey(),
                    _type: 'feature',
                    ...f
                })),

                // Getting Started steps
                gettingStarted: position.gettingStarted.map((step: any) => ({
                    _key: generateKey(),
                    _type: 'processStep',
                    ...step
                })),

                // Why Choose Us
                whyChooseUs: position.whyChooseUs.map((w: any) => ({
                    _key: generateKey(),
                    _type: 'feature',
                    ...w
                })),

                // Testimonial - single object, no _key needed
                testimonial: position.testimonial,

                // FAQs
                faqs: position.faqs.map((faq: any) => ({
                    _key: generateKey(),
                    _type: 'faq',
                    ...faq
                })),

                // Fallback process (hidden field)
                process: (position.process || []).map((p: any) => ({
                    _key: generateKey(),
                    _type: 'processStep',
                    ...p
                })),
            }

            // Handle hero image upload
            if (position.heroImage && position.heroImage.startsWith('http')) {
                console.log(`   📸 Uploading hero image...`)
                const heroImageAssetId = await uploadImageFromUrl(position.heroImage)
                if (heroImageAssetId) {
                    sanityPosition.heroImage = {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: heroImageAssetId,
                        },
                    }
                }
            }

            // Handle intro image upload
            if (position.image && position.image.startsWith('http')) {
                console.log(`   📸 Uploading intro image...`)
                const imageAssetId = await uploadImageFromUrl(position.image)
                if (imageAssetId) {
                    sanityPosition.image = {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: imageAssetId,
                        },
                    }
                }
            }

            // Create or replace the document in Sanity
            await client.createOrReplace(sanityPosition)
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
migrateHireStaff().catch((error) => {
    console.error('\n💥 Migration failed:', error)
    process.exit(1)
})

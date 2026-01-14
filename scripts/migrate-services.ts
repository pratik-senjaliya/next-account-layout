import 'dotenv/config'
import { createClient } from '@sanity/client'
import { services } from '../lib/services'

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

async function migrateServices() {
    console.log('🚀 Starting services migration to Sanity...')
    console.log(`📦 Project: ${projectId}`)
    console.log(`📊 Dataset: ${dataset}`)
    console.log('📝 Found ${services.length} services to migrate\n')

    let successCount = 0
    let errorCount = 0

    for (const service of services) {
        try {
            console.log(`📄 Processing: "${service.title}"`)

            // Create the Sanity document with _key for all array items
            const sanityService: any = {
                _type: 'service',
                _id: `service-${service.slug}`,
                title: service.title,
                slug: {
                    _type: 'slug',
                    current: service.slug,
                },
                description: service.description,
                longDescription: service.longDescription,
                icon: service.icon,

                // Intro section - flat fields with _key for stats array
                introTitle: service.intro.title,
                introContent: service.intro.content,
                introStats: service.intro.stats.map((stat: any) => ({
                    _key: generateKey(),
                    _type: 'stat',
                    ...stat
                })),

                // Features - add _key to each
                features: service.features.map((f: any) => ({
                    _key: generateKey(),
                    _type: 'feature',
                    ...f
                })),

                // Service Areas (if exists)
                serviceAreas: (service.serviceAreas || []).map((sa: any) => ({
                    _key: generateKey(),
                    ...sa
                })),

                // Process steps
                process: service.process.map((p: any) => ({
                    _key: generateKey(),
                    _type: 'processStep',
                    ...p
                })),

                // Why Choose Us
                whyChooseUs: service.whyChooseUs.map((w: any) => ({
                    _key: generateKey(),
                    _type: 'feature',
                    ...w
                })),

                // Testimonial - single object, no _key needed
                testimonial: service.testimonial,

                // FAQs
                faqs: service.faqs.map((faq: any) => ({
                    _key: generateKey(),
                    _type: 'faq',
                    ...faq
                })),
            }

            // Handle hero image upload
            if (service.heroImage && service.heroImage.startsWith('http')) {
                console.log(`   📸 Uploading hero image...`)
                const heroImageAssetId = await uploadImageFromUrl(service.heroImage)
                if (heroImageAssetId) {
                    sanityService.heroImage = {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: heroImageAssetId,
                        },
                    }
                }
            }

            // Handle intro image upload
            if (service.image && service.image.startsWith('http')) {
                console.log(`   📸 Uploading intro image...`)
                const imageAssetId = await uploadImageFromUrl(service.image)
                if (imageAssetId) {
                    sanityService.image = {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: imageAssetId,
                        },
                    }
                }
            }

            // Create or replace the document in Sanity
            await client.createOrReplace(sanityService)
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
migrateServices().catch((error) => {
    console.error('\n💥 Migration failed:', error)
    process.exit(1)
})

import 'dotenv/config'
import { createClient } from '@sanity/client'
import { industries } from '../lib/industries'

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

async function migrateIndustries() {
    console.log('🚀 Starting industries migration to Sanity...')
    console.log(`📦 Project: ${projectId}`)
    console.log(`📊 Dataset: ${dataset}`)
    console.log(`📝 Found ${industries.length} industries to migrate\n`)

    let successCount = 0
    let errorCount = 0

    for (const industry of industries) {
        try {
            console.log(`📄 Processing: "${industry.title}"`)

            // Create the Sanity document with _key for all array items
            const sanityIndustry: any = {
                _type: 'industry',
                _id: `industry-${industry.slug}`,
                title: industry.title,
                slug: {
                    _type: 'slug',
                    current: industry.slug,
                },
                description: industry.description,
                longDescription: industry.longDescription,
                icon: industry.icon,

                // Intro section - flat fields with _key for stats array
                introTitle: industry.intro.title,
                introContent: industry.intro.content,
                introStats: industry.intro.stats.map((stat: any) => ({
                    _key: generateKey(),
                    _type: 'stat',
                    ...stat
                })),

                // Sub-industries with _key
                subIndustries: industry.subIndustries.map((si: any) => ({
                    _key: generateKey(),
                    name: si.name,
                    focus: si.focus,
                    bookkeeping: si.bookkeeping || [],
                    accounting: si.accounting || [],
                    payroll: si.payroll || [],
                    taxPreparation: si.taxPreparation || [],
                    softwareStack: si.softwareStack || [],
                })),

                // Industry Benefits
                industryBenefits: industry.industryBenefits.map((b: any) => ({
                    _key: generateKey(),
                    _type: 'feature',
                    ...b
                })),

                // Getting Started steps
                gettingStarted: industry.gettingStarted.map((step: any) => ({
                    _key: generateKey(),
                    _type: 'processStep',
                    ...step
                })),

                // Fallback fields (if they exist)
                features: (industry.features || []).map((f: any) => ({
                    _key: generateKey(),
                    _type: 'feature',
                    ...f
                })),

                process: (industry.process || []).map((p: any) => ({
                    _key: generateKey(),
                    _type: 'processStep',
                    ...p
                })),

                whyChooseUs: (industry.whyChooseUs || []).map((w: any) => ({
                    _key: generateKey(),
                    _type: 'feature',
                    ...w
                })),

                // Testimonial - single object, no _key needed
                testimonial: industry.testimonial,

                // FAQs
                faqs: industry.faqs.map((faq: any) => ({
                    _key: generateKey(),
                    _type: 'faq',
                    ...faq
                })),
            }

            // Handle hero image upload
            if (industry.heroImage && industry.heroImage.startsWith('http')) {
                console.log(`   📸 Uploading hero image...`)
                const heroImageAssetId = await uploadImageFromUrl(industry.heroImage)
                if (heroImageAssetId) {
                    sanityIndustry.heroImage = {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: heroImageAssetId,
                        },
                    }
                }
            }

            // Handle intro image upload
            if (industry.image && industry.image.startsWith('http')) {
                console.log(`   📸 Uploading intro image...`)
                const imageAssetId = await uploadImageFromUrl(industry.image)
                if (imageAssetId) {
                    sanityIndustry.image = {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: imageAssetId,
                        },
                    }
                }
            }

            // Create or replace the document in Sanity
            await client.createOrReplace(sanityIndustry)
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
migrateIndustries().catch((error) => {
    console.error('\n💥 Migration failed:', error)
    process.exit(1)
})

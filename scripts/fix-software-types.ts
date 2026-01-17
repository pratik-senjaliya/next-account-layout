import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
dotenv.config()
import { createClient } from '@sanity/client'

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    token: process.env.SANITY_API_TOKEN!,
    apiVersion: '2024-01-01',
    useCdn: false,
})

async function fixSoftwareTypes() {
    console.log('🔧 Fixing software expertise _type fields...\n')

    try {
        const docs = await client.fetch(`*[_type == "hireStaff" && defined(softwareCategories)]`)

        console.log(`📝 Found ${docs.length} documents with software categories\n`)

        for (const doc of docs) {
            console.log(`📄 Processing: ${doc.title}`)

            if (!doc.softwareCategories || doc.softwareCategories.length === 0) {
                console.log('   ⚠️  No categories, skipping\n')
                continue
            }

            // Fix the _type fields
            const fixedCategories = doc.softwareCategories.map((cat: any) => ({
                ...cat,
                _type: 'softwareCategory',  // Change from whatever it was to 'softwareCategory'
                platforms: cat.platforms ? cat.platforms.map((plat: any) => ({
                    ...plat,
                    _type: 'platform'  // Change from 'softwarePlatform' to 'platform'
                })) : []
            }))

            // Update document
            await client
                .patch(doc._id)
                .set({ softwareCategories: fixedCategories })
                .commit()

            console.log(`   ✅ Fixed ${fixedCategories.length} categories\n`)
        }

        console.log('==================================================')
        console.log('🎉 All software types fixed!')
        console.log('   Refresh /studio and try editing again')
        console.log('==================================================\n')

    } catch (error) {
        console.error('❌ Error:', error)
        process.exit(1)
    }
}

fixSoftwareTypes()

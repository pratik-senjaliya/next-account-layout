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

async function cleanupHireStaffData() {
    console.log('🚀 Starting hire-staff data cleanup...')
    console.log(`📦 Project: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`)
    console.log(`📊 Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET}\n`)

    try {
        // Fetch all hire-staff documents
        const hireStaffDocs = await client.fetch(`*[_type == "hireStaff"]`)
        console.log(`📝 Found ${hireStaffDocs.length} hire-staff documents\n`)

        for (const doc of hireStaffDocs) {
            console.log(`📄 Processing: "${doc.title}"`)

            // Clean up experience levels - remove software and idealFor fields
            const cleanedExperienceLevels = doc.experienceLevels?.map((level: any) => {
                const { software, idealFor, ...rest } = level
                return rest
            })

            // Update the document
            await client
                .patch(doc._id)
                .set({
                    experienceLevels: cleanedExperienceLevels,
                })
                .commit()

            console.log(`   ✅ Cleaned experience levels (removed software & idealFor fields)\n`)
        }

        console.log('\n==================================================')
        console.log('🎉 Cleanup complete!')
        console.log(`   ✅ Updated: ${hireStaffDocs.length} documents`)
        console.log('==================================================\n')
    } catch (error) {
        console.error('❌ Error during cleanup:', error)
        process.exit(1)
    }
}

cleanupHireStaffData()

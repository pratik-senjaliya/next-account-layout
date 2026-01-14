import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
dotenv.config()

import { createClient } from '@sanity/client'

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
})

async function verifyData() {
    console.log(`Checking Project: ${client.config().projectId}`)
    console.log(`Checking Dataset: ${client.config().dataset}`)

    try {
        const doc = await client.fetch(`*[_type == "homePage"][0]`)
        console.log('Query Result:', doc)

        if (doc) {
            console.log('✅ Document found!')
        } else {
            console.log('❌ Document NOT found.')
        }
    } catch (e) {
        console.error('Error querying Sanity:', e)
    }
}

verifyData()

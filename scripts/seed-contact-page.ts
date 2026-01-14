import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
dotenv.config()

import { createClient } from '@sanity/client'

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

const contactPageData = {
    _type: 'contactPage',
    _id: 'contactPage',
    title: 'Get in Touch',
    description: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    phone: '+1 (234) 567-8900',
    email: 'info@yoursite.com',
    address: '123 Business Street\nSuite 100\nCity, State 12345',
    businessHours: [
        { _key: '1', days: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
        { _key: '2', days: 'Saturday', hours: '10:00 AM - 4:00 PM' },
        { _key: '3', days: 'Sunday', hours: 'Closed' }
    ],
    seo: {
        metaTitle: "Contact Us | Business Mastery",
        metaDescription: "Get in touch with our team. We're here to help you solve your business challenges.",
        metaKeywords: ["contact", "support", "help", "message"]
    }
}

async function seedContactPage() {
    console.log('🚀 Starting Contact Page Seeding...')

    try {
        await client.delete('drafts.contactPage').catch(() => { })
        await client.createOrReplace(contactPageData)
        console.log('   ✅ Successfully seeded Contact Page data')
    } catch (error) {
        console.error('   ❌ Error seeding Contact Page:', error)
    }

    console.log('\n🎉 Seeding complete!')
}

seedContactPage()

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

const servicesPageData = {
    _type: 'servicesPage',
    _id: 'servicesPage',
    title: 'Comprehensive Financial \nSolutions for Growth',
    description: "From daily bookkeeping to executive-level strategic guidance, we provide the expertise your business needs at every stage.",
    seo: {
        metaTitle: "Professional Services Overview | Business Mastery",
        metaDescription: "Discover our full suite of financial, tax, and strategic business services designed to help you scale efficiently.",
    }
}

const industriesPageData = {
    _type: 'industriesPage',
    _id: 'industriesPage',
    title: 'Specialized Expertise for \nYour Industry',
    description: "We understand that every industry has unique financial challenges. Our specialized teams bring deep sector knowledge to your business.",
    seo: {
        metaTitle: "Industries We Serve | Business Mastery",
        metaDescription: "Specialized financial expertise for healthcare, retail, construction, tech, and more.",
    }
}

const hireStaffPageData = {
    _type: 'hireStaffPage',
    _id: 'hireStaffPage',
    title: 'Build Your Dream Team \nWithout Bounds',
    description: "Access a global pool of vetted, credentialed, and experienced accounting professionals ready to integrate with your firm.",
    seo: {
        metaTitle: "Hire Offshore Staff | Business Mastery",
        metaDescription: "Scale your team with top-tier offshore accounting, tax, and finance professionals.",
    }
}

async function seedListingPages() {
    console.log('🚀 Starting Listing Pages Seeding...')

    try {
        await client.delete('drafts.servicesPage').catch(() => { })
        await client.createOrReplace(servicesPageData)
        console.log('   ✅ Successfully seeded Services Page')

        await client.delete('drafts.industriesPage').catch(() => { })
        await client.createOrReplace(industriesPageData)
        console.log('   ✅ Successfully seeded Industries Page')

        await client.delete('drafts.hireStaffPage').catch(() => { })
        await client.createOrReplace(hireStaffPageData)
        console.log('   ✅ Successfully seeded Hire Staff Page')

    } catch (error) {
        console.error('   ❌ Error seeding pages:', error)
    }

    console.log('\n🎉 Seeding complete!')
}

seedListingPages()

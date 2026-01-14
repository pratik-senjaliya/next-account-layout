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

const generateKey = () => Math.random().toString(36).substring(2, 15)

const aboutPageData = {
    _type: 'aboutPage',
    _id: 'aboutPage',
    heroTitle: 'We Help Entrepreneurs',
    heroTitleHighlight: 'Master Their Business',
    heroDescription: "Understanding your business needs should be three things: simple, effortless, and affordable. We're here to help you understand what you want to do and where you want to go.",
    heroImageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop',

    whatWeDoTitle: 'What We Do',
    whatWeDoDescription: "We take care of business operations and consulting for business owners. And we do it in a way that's never been done before—by pairing intuitive software with real, human expertise. To us, it's more than number crunching. It's giving entrepreneurs more time to focus on what they care about.",
    stats: [
        { _key: generateKey(), value: "2010", label: "Year We Launched" },
        { _key: generateKey(), value: "200+", label: "Employees" },
        { _key: generateKey(), value: "$50M+", label: "Total Funding" },
    ],

    timelineTitle: 'How We Got Here',
    timelineEvents: [
        { _key: generateKey(), year: "2010", event: "Founded with a vision to transform business operations" },
        { _key: generateKey(), year: "2013", event: "Raised $2M in seed capital and launched to the public" },
        { _key: generateKey(), year: "2015", event: "Raised $7M in Series A funding" },
        { _key: generateKey(), year: "2018", event: "Raised an additional $18M in Series B funding" },
        { _key: generateKey(), year: "2021", event: "Raised $60M in Series C funding" },
        { _key: generateKey(), year: "2024", event: "Expanded services globally, serving 10,000+ clients" },
    ],

    missionTitle: "Why We're Here",
    missionDescription: [
        "Our mission is to help every business owner thrive, by providing professional insight and peace of mind in one seamless platform.",
        "Business mastery is the idea that everyone, regardless of economic standing, should have full control of their operations. It's more than knowing how to read a report—it's giving people the tools they need to stay on top of their business, and improve their lives."
    ],
    missionEmphasis: "People and the quality of their lives. That, at its core, is what we're about.",
    missionImageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',

    valuesTitle: 'Our Values',
    valuesDescription: "We rely on five core values for how we communicate, share information, and work towards our mission. Together, these values inform our most valuable asset: our culture.",
    values: [
        {
            _key: generateKey(),
            title: "Customer Obsession",
            description: "We put our clients at the center of everything we do, ensuring their success is our top priority.",
        },
        {
            _key: generateKey(),
            title: "Ownership",
            description: "We take full responsibility for our work and are committed to delivering exceptional results.",
        },
        {
            _key: generateKey(),
            title: "Empathy",
            description: "We understand our clients' challenges and work with compassion to find the best solutions.",
        },
        {
            _key: generateKey(),
            title: "Empowerment",
            description: "We empower our team and clients to achieve their full potential through knowledge and support.",
        },
        {
            _key: generateKey(),
            title: "Transparency",
            description: "We believe in open communication and honest relationships with our clients and team.",
        },
    ]
}

async function seedAboutPage() {
    console.log('🚀 Starting About Page Seeding...')

    const doc: any = { ...aboutPageData }
    delete doc.heroImageUrl
    delete doc.missionImageUrl

    // Upload Hero Image
    if (aboutPageData.heroImageUrl) {
        console.log('   📸 Uploading hero image...')
        const assetId = await uploadImageFromUrl(aboutPageData.heroImageUrl)
        if (assetId) {
            doc.heroImage = {
                _type: 'image',
                asset: { _type: 'reference', _ref: assetId }
            }
        }
    }

    // Upload Mission Image
    if (aboutPageData.missionImageUrl) {
        console.log('   📸 Uploading mission image...')
        const assetId = await uploadImageFromUrl(aboutPageData.missionImageUrl)
        if (assetId) {
            doc.missionImage = {
                _type: 'image',
                asset: { _type: 'reference', _ref: assetId }
            }
        }
    }

    try {
        await client.delete('drafts.aboutPage').catch(() => { })
        await client.createOrReplace(doc)
        console.log('   ✅ Successfully seeded About Page data')
    } catch (error) {
        console.error('   ❌ Error seeding About Page:', error)
    }

    console.log('\n🎉 Seeding complete!')
}

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
        console.warn(`   ⚠️  Image upload failed:`, error)
        return null
    }
}

seedAboutPage()

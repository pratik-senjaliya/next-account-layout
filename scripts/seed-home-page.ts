import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
dotenv.config() // Load .env as fallback/addition
import { createClient } from '@sanity/client'

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

const generateKey = () => Math.random().toString(36).substring(2, 15)

const homePageData = {
    _type: 'homePage',
    _id: 'homePage', // Singleton ID
    heroTitle: 'Professional Services',
    heroTitleHighlight: 'Done Right',
    heroDescription: 'Your business deserves expert attention. We provide dedicated professionals and powerful solutions that work together to help your business succeed and grow.',
    heroImageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop',
    heroStats: [
        { _key: generateKey(), label: 'Active Clients', value: '10,000+' },
        { _key: generateKey(), label: 'In Savings Delivered', value: '$50M+' },
        { _key: generateKey(), label: 'Uptime Guarantee', value: '99.9%' }
    ],
    trustTitle: 'Trusted by thousands of businesses',
    trustDescription: 'Join companies that rely on our expertise',
    trustStats: [
        { _key: generateKey(), label: 'Active Clients', value: '10,000+' },
        { _key: generateKey(), label: 'Industry Experience', value: '15+ Years' },
        { _key: generateKey(), label: 'Support Available', value: '24/7' }
    ],
    testimonialsTitle: 'What Our Clients Say',
    testimonialsDescription: "Don't just take our word for it—hear from businesses that have transformed their operations with our help.",
    testimonials: [
        {
            _key: generateKey(),
            quote: "The service has transformed how we manage our business operations. The team is professional, responsive, and truly understands our needs.",
            author: "Sarah Johnson",
            role: "CEO",
            company: "Tech Innovations Inc."
        },
        {
            _key: generateKey(),
            quote: "Outstanding support and expertise. They've helped us streamline our processes and achieve significant cost savings while maintaining quality.",
            author: "Michael Chen",
            role: "Operations Director",
            company: "Global Solutions"
        },
        {
            _key: generateKey(),
            quote: "Working with this team has been a game-changer. Their attention to detail and commitment to excellence is unmatched in the industry.",
            author: "Emily Rodriguez",
            role: "Founder",
            company: "Creative Ventures"
        }
    ],
    featuresTitle: 'Everything You Need to Succeed',
    featuresDescription: 'Comprehensive solutions designed to streamline your operations and drive growth.',
    features: [
        {
            _key: generateKey(),
            title: 'Expert Support',
            description: 'Get dedicated support from experienced professionals who understand your business needs. Our team is available when you need them, providing personalized guidance and solutions tailored to your specific challenges.',
            linkText: 'Learn More',
            linkHref: '/services',
            imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop'
        },
        {
            _key: generateKey(),
            title: 'Comprehensive Solutions',
            description: 'Access a full suite of tools and services designed to streamline your operations. From initial setup to ongoing management, we provide everything you need in one integrated platform.',
            linkText: 'Learn More',
            linkHref: '/solutions',
            imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
        },
        {
            _key: generateKey(),
            title: 'Real-Time Insights',
            description: 'Stay informed with up-to-date data and analytics. Make confident decisions based on accurate, real-time information that helps you understand your business performance at a glance.',
            linkText: 'Learn More',
            linkHref: '/insights',
            imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
        },
        {
            _key: generateKey(),
            title: 'Streamlined Processes',
            description: 'Simplify complex workflows with our intuitive platform. Reduce manual work, eliminate errors, and focus on what matters most—growing your business and serving your customers.',
            linkText: 'Learn More',
            linkHref: '/processes',
            imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
        }
    ],
    partnersTitle: 'Trusted Partners',
    partnersDescription: 'We work with industry-leading platforms',
    partners: [
        'Shopify', 'Square', 'QuickBooks', 'Salesforce', 'Microsoft', 'Google'
    ],
    blogTitle: 'Explore Our Latest Resources',
    blogDescription: 'From the Blog',
    faqTitle: 'Frequently Asked Questions', // Added title for consistency, though UI might hardcode it? UI has no title for FAQ section specifically, just uses FAQ component. Wait, app/page.tsx just renders <FAQ items=.../>. The FAQ component likely has its own title? No, app/page.tsx: <Section><Container><FAQ .../></Container></Section>.  Wait, I should check the FAQ component.
    faqs: [
        {
            _key: generateKey(),
            question: "What services do you provide?",
            answer: "We offer a comprehensive range of professional services tailored to your business needs. Our solutions include expert consultation, process optimization, ongoing support, and access to advanced tools and resources designed to help your business succeed."
        },
        {
            _key: generateKey(),
            question: "How quickly can I get started?",
            answer: "Getting started is quick and straightforward. After an initial consultation to understand your specific requirements, we can typically have you set up and running within a few business days. Our team will guide you through every step of the process."
        },
        {
            _key: generateKey(),
            question: "What kind of support can I expect?",
            answer: "You'll have access to our dedicated support team who are available to assist with any questions or issues. We provide multiple channels for support including email, phone, and our online platform, ensuring you can reach us when you need help."
        },
        {
            _key: generateKey(),
            question: "Is my data secure?",
            answer: "Security is our top priority. We use industry-standard encryption and security measures to protect your data. Our systems are regularly audited and comply with the latest security standards to ensure your information remains safe and confidential."
        }
    ]
}

async function seedHomePage() {
    console.log('🚀 Starting Home Page Seeding...')

    const doc: any = { ...homePageData }
    delete doc.heroImageUrl
    delete doc.heroTitleHighlight // Schema handles highlight separate? Yes I added it.

    // Handle Hero Image
    if (homePageData.heroImageUrl) {
        console.log('   📸 Uploading hero image...')
        const assetId = await uploadImageFromUrl(homePageData.heroImageUrl)
        if (assetId) {
            doc.heroImage = {
                _type: 'image',
                asset: { _type: 'reference', _ref: assetId }
            }
        }
    }

    // Handle Feature Images
    doc.features = []
    for (const feature of homePageData.features) {
        const featureItem: any = { ...feature }
        delete featureItem.imageUrl

        if (feature.imageUrl) {
            console.log(`   📸 Uploading feature image: ${feature.title}...`)
            const assetId = await uploadImageFromUrl(feature.imageUrl)
            if (assetId) {
                featureItem.image = {
                    _type: 'image',
                    asset: { _type: 'reference', _ref: assetId }
                }
            }
        }
        doc.features.push(featureItem)
    }

    try {
        // Delete any existing draft to ensure Studio shows the published version
        await client.delete('drafts.homePage').catch(() => { })

        await client.createOrReplace(doc)
        console.log('   ✅ Successfully seeded Home Page data')
    } catch (error) {
        console.error('   ❌ Error seeding Home Page:', error)
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

seedHomePage()

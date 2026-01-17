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

const privacyPolicyContent = [
    {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        children: [
            {
                _type: 'span',
                text: 'This Privacy Policy describes how we collect, use, and protect your personal information when you use our accounting and financial services.'
            }
        ]
    },
    {
        _type: 'block',
        _key: 'info-collect-h2',
        style: 'h2',
        children: [{ _type: 'span', text: 'Information We Collect' }]
    },
    {
        _type: 'block',
        _key: 'info-collect-intro',
        style: 'normal',
        children: [{ _type: 'span', text: 'We collect information that you provide directly to us, including:' }]
    },
    {
        _type: 'block',
        _key: 'info-list',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Contact information (name, email, phone number, business address)' }]
    },
    {
        _type: 'block',
        _key: 'info-list-2',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Financial information necessary to provide our services' }]
    },
    {
        _type: 'block',
        _key: 'info-list-3',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Business information and tax documentation' }]
    },
    {
        _type: 'block',
        _key: 'info-list-4',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Payment and billing information' }]
    },
    {
        _type: 'block',
        _key: 'info-list-5',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Communication preferences and correspondence with our team' }]
    },
    {
        _type: 'block',
        _key: 'how-use-h2',
        style: 'h2',
        children: [{ _type: 'span', text: 'How We Use Your Information' }]
    },
    {
        _type: 'block',
        _key: 'how-use-intro',
        style: 'normal',
        children: [{ _type: 'span', text: 'We use the information we collect to:' }]
    },
    {
        _type: 'block',
        _key: 'use-list-1',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Provide bookkeeping, accounting, tax preparation, and financial consulting services' }]
    },
    {
        _type: 'block',
        _key: 'use-list-2',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Communicate with you about our services and your account' }]
    },
    {
        _type: 'block',
        _key: 'use-list-3',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Process payments and maintain billing records' }]
    },
    {
        _type: 'block',
        _key: 'use-list-4',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Comply with legal and regulatory requirements' }]
    },
    {
        _type: 'block',
        _key: 'use-list-5',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Improve our services and customer experience' }]
    },
    {
        _type: 'block',
        _key: 'data-security-h2',
        style: 'h2',
        children: [{ _type: 'span', text: 'Data Security' }]
    },
    {
        _type: 'block',
        _key: 'data-security-p1',
        style: 'normal',
        children: [{
            _type: 'span',
            text: 'We implement industry-standard security measures to protect your personal and financial information. This includes encryption, secure data storage, access controls, and regular security audits.'
        }]
    },
    {
        _type: 'block',
        _key: 'data-security-p2',
        style: 'normal',
        children: [{
            _type: 'span',
            text: 'While we take reasonable measures to protect your information, no method of transmission over the internet is 100% secure. We continuously monitor and update our security practices to maintain the highest level of protection.'
        }]
    },
    {
        _type: 'block',
        _key: 'sharing-h2',
        style: 'h2',
        children: [{ _type: 'span', text: 'Information Sharing' }]
    },
    {
        _type: 'block',
        _key: 'sharing-p1',
        style: 'normal',
        children: [{
            _type: 'span',
            text: 'We do not sell your personal information. We may share your information with:'
        }]
    },
    {
        _type: 'block',
        _key: 'sharing-list-1',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Service providers who assist in delivering our services' }]
    },
    {
        _type: 'block',
        _key: 'sharing-list-2',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Professional advisors (lawyers, accountants, auditors)' }]
    },
    {
        _type: 'block',
        _key: 'sharing-list-3',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Regulatory authorities when required by law' }]
    },
    {
        _type: 'block',
        _key: 'sharing-list-4',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Third parties with your explicit consent' }]
    },
    {
        _type: 'block',
        _key: 'rights-h2',
        style: 'h2',
        children: [{ _type: 'span', text: 'Your Rights' }]
    },
    {
        _type: 'block',
        _key: 'rights-p1',
        style: 'normal',
        children: [{ _type: 'span', text: 'You have the right to:' }]
    },
    {
        _type: 'block',
        _key: 'rights-list-1',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Access your personal information' }]
    },
    {
        _type: 'block',
        _key: 'rights-list-2',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Request corrections to your information' }]
    },
    {
        _type: 'block',
        _key: 'rights-list-3',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Request deletion of your information (subject to legal retention requirements)' }]
    },
    {
        _type: 'block',
        _key: 'rights-list-4',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Opt-out of marketing communications' }]
    },
    {
        _type: 'block',
        _key: 'contact-h2',
        style: 'h2',
        children: [{ _type: 'span', text: 'Contact Us' }]
    },
    {
        _type: 'block',
        _key: 'contact-p1',
        style: 'normal',
        children: [{
            _type: 'span',
            text: 'If you have any questions about this Privacy Policy or our data practices, please contact us at info@yoursite.com.'
        }]
    }
]

const termsOfServiceContent = [
    {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        children: [
            {
                _type: 'span',
                text: 'These Terms of Service govern your use of our accounting and financial services. By engaging our services, you agree to these terms.'
            }
        ]
    },
    {
        _type: 'block',
        _key: 'services-h2',
        style: 'h2',
        children: [{ _type: 'span', text: 'Our Services' }]
    },
    {
        _type: 'block',
        _key: 'services-p1',
        style: 'normal',
        children: [{
            _type: 'span',
            text: 'We provide professional accounting, bookkeeping, tax preparation, payroll management, audit services, and virtual CFO consulting. Our services are tailored to meet the specific needs of your business and industry.'
        }]
    },
    {
        _type: 'block',
        _key: 'engagement-h2',
        style: 'h2',
        children: [{ _type: 'span', text: 'Client Engagement' }]
    },
    {
        _type: 'block',
        _key: 'engagement-h3-1',
        style: 'h3',
        children: [{ _type: 'span', text: 'Service Agreement' }]
    },
    {
        _type: 'block',
        _key: 'engagement-p1',
        style: 'normal',
        children: [{
            _type: 'span',
            text: 'A formal engagement letter will outline the scope of services, fees, timelines, and responsibilities. This agreement must be signed before we begin work.'
        }]
    },
    {
        _type: 'block',
        _key: 'engagement-h3-2',
        style: 'h3',
        children: [{ _type: 'span', text: 'Client Responsibilities' }]
    },
    {
        _type: 'block',
        _key: 'engagement-p2',
        style: 'normal',
        children: [{ _type: 'span', text: 'Clients are responsible for:' }]
    },
    {
        _type: 'block',
        _key: 'client-resp-1',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Providing accurate and complete financial information' }]
    },
    {
        _type: 'block',
        _key: 'client-resp-2',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Timely payment of fees' }]
    },
    {
        _type: 'block',
        _key: 'client-resp-3',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Maintaining proper business records' }]
    },
    {
        _type: 'block',
        _key: 'client-resp-4',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Responding to requests for information in a timely manner' }]
    },
    {
        _type: 'block',
        _key: 'fees-h2',
        style: 'h2',
        children: [{ _type: 'span', text: 'Fees and Payment' }]
    },
    {
        _type: 'block',
        _key: 'fees-p1',
        style: 'normal',
        children: [{
            _type: 'span',
            text: 'Fees are based on the scope of services provided and will be detailed in your engagement letter. We offer various pricing models including hourly rates, fixed fees, and monthly retainers.'
        }]
    },
    {
        _type: 'block',
        _key: 'fees-p2',
        style: 'normal',
        children: [{
            _type: 'span',
            text: 'Invoices are typically sent monthly and payment is due within 15 days of receipt. Late payments may incur interest charges as specified in your agreement.'
        }]
    },
    {
        _type: 'block',
        _key: 'confidentiality-h2',
        style: 'h2',
        children: [{ _type: 'span', text: 'Confidentiality' }]
    },
    {
        _type: 'block',
        _key: 'confidentiality-p1',
        style: 'normal',
        children: [{
            _type: 'span',
            text: 'We maintain strict confidentiality of all client information. We will not disclose your financial data to third parties except as required by law or with your explicit permission.'
        }]
    },
    {
        _type: 'block',
        _key: 'professional-h2',
        style: 'h2',
        children: [{ _type: 'span', text: 'Professional Standards' }]
    },
    {
        _type: 'block',
        _key: 'professional-p1',
        style: 'normal',
        children: [{
            _type: 'span',
            text: 'Our services are provided in accordance with applicable professional standards and regulations. We adhere to the highest ethical standards in all client engagements.'
        }]
    },
    {
        _type: 'block',
        _key: 'limitation-h2',
        style: 'h2',
        children: [{ _type: 'span', text: 'Limitation of Liability' }]
    },
    {
        _type: 'block',
        _key: 'limitation-p1',
        style: 'normal',
        children: [{
            _type: 'span',
            text: 'Our liability is limited to the fees paid for the specific service in question. We are not liable for indirect, consequential, or punitive damages. Specific limitations will be detailed in your engagement letter.'
        }]
    },
    {
        _type: 'block',
        _key: 'termination-h2',
        style: 'h2',
        children: [{ _type: 'span', text: 'Termination' }]
    },
    {
        _type: 'block',
        _key: 'termination-p1',
        style: 'normal',
        children: [{
            _type: 'span',
            text: 'Either party may terminate the engagement with written notice. Upon termination, all outstanding fees must be paid, and we will return client records as requested.'
        }]
    },
    {
        _type: 'block',
        _key: 'changes-h2',
        style: 'h2',
        children: [{ _type: 'span', text: 'Changes to Terms' }]
    },
    {
        _type: 'block',
        _key: 'changes-p1',
        style: 'normal',
        children: [{
            _type: 'span',
            text: 'We reserve the right to modify these terms at any time. Clients will be notified of significant changes, and continued use of our services constitutes acceptance of the updated terms.'
        }]
    },
    {
        _type: 'block',
        _key: 'contact-h2',
        style: 'h2',
        children: [{ _type: 'span', text: 'Contact Information' }]
    },
    {
        _type: 'block',
        _key: 'contact-p1',
        style: 'normal',
        children: [{
            _type: 'span',
            text: 'For questions about these Terms of Service, please contact us at info@yoursite.com or call +1 (234) 567-8900.'
        }]
    }
]

async function populateLegalPages() {
    console.log('🚀 Populating Privacy Policy and Terms of Service...\n')

    try {
        // Create or update Privacy Policy
        const privacyDoc = await client.createOrReplace({
            _id: 'privacyPolicy',
            _type: 'privacyPolicy',
            title: 'Privacy Policy',
            lastUpdated: new Date().toISOString().split('T')[0],
            content: privacyPolicyContent
        })

        console.log('✅ Privacy Policy created/updated')

        // Create or update Terms of Service
        const termsDoc = await client.createOrReplace({
            _id: 'termsOfService',
            _type: 'termsOfService',
            title: 'Terms of Service',
            lastUpdated: new Date().toISOString().split('T')[0],
            content: termsOfServiceContent
        })

        console.log('✅ Terms of Service created/updated\n')

        console.log('==================================================')
        console.log('🎉 Legal pages populated successfully!')
        console.log('   Visit /privacy-policy and /terms-of-service to view')
        console.log('   Edit in Sanity Studio at /studio')
        console.log('==================================================\n')

    } catch (error) {
        console.error('❌ Error:', error)
        process.exit(1)
    }
}

populateLegalPages()

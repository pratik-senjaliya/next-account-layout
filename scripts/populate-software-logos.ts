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

// SOFTWARE DATA FROM ACTUAL HIRE-STAFF.TS FILE - LINES 148-662
const rolesSoftware: Record<string, any[]> = {
    'bookkeeper-accountant': [
        {
            category: 'Accounting Platforms',
            platforms: ['QuickBooks Online & Desktop', 'Xero', 'Sage Intacct', 'NetSuite', 'Microsoft Dynamics 365', 'Sage 50/100/300', 'FreshBooks']
        },
        {
            category: 'AP/AR Automation',
            platforms: ['Bill.com', 'Melio', 'Divvy', 'Ramp', 'Expensify']
        },
        {
            category: 'Receipt Management',
            platforms: ['Dext (formerly Receipt Bank)', 'Hubdoc', 'AutoEntry', 'Neat']
        },
        {
            category: 'Workflow Management',
            platforms: ['Karbon', 'Canopy', 'Financial Cents', 'Liscio']
        }
    ],
    'tax-preparation': [
        {
            category: 'Tax Preparation Software',
            platforms: ['UltraTax CS', 'Lacerte', 'ProSeries', 'CCH ProSystem fx', 'CCH Axcess Tax', 'Drake Tax', 'GoSystem Tax RS', 'TaxAct Professional']
        },
        {
            category: 'Sales Tax Platforms',
            platforms: ['Avalara', 'TaxJar', 'Vertex', 'Sovos']
        },
        {
            category: 'Document Management',
            platforms: ['SafeSend Returns', 'GruntWorx', 'TaxDome', 'SmartVault', 'ShareFile']
        },
        {
            category: 'Workflow Management',
            platforms: ['Canopy', 'Karbon', 'Financial Cents', 'Tax1099']
        }
    ],
    'payroll-compliance': [
        {
            category: 'Full-Service Payroll',
            platforms: ['ADP Run / Workforce Now', 'Paychex Flex', 'Gusto', 'Rippling', 'OnPay', 'Zenefits', 'Justworks', 'TriNet']
        },
        {
            category: 'Time Tracking & Scheduling',
            platforms: ['TSheets (QuickBooks Time)', 'Deputy', 'When I Work', 'Homebase', 'ClockShark', 'Time Doctor']
        },
        {
            category: 'Accounting Integration',
            platforms: ['QuickBooks Online', 'Xero', 'Sage Intacct', 'NetSuite', 'Bill.com']
        },
        {
            category: 'HR Management Systems (HRIS)',
            platforms: ['BambooHR', 'Namely', 'Workday', 'UKG', 'Ceridian Dayforce']
        }
    ],
    'audit-assurance': [
        {
            category: 'Audit Software',
            platforms: ['CaseWare Working Papers', 'CCH Engagement (Axcess Audit)', 'AdvanceFlow', 'TeamMate', 'AuditFile', 'Suralink (for PBC management)']
        },
        {
            category: 'Data Analytics & Testing',
            platforms: ['IDEA (CaseWare Analytics)', 'ACL Analytics', 'Alteryx', 'Tableau', 'Power BI']
        },
        {
            category: 'Confirmation & Documentation',
            platforms: ['Confirmation.com', 'Thomson Reuters Confirmation', 'Practice CS', 'GoFileRoom', 'SmartVault']
        },
        {
            category: 'Research & Reference',
            platforms: ['Thomson Reuters Checkpoint', 'CCH Accounting Research Manager', 'AICPA Resources', 'Bloomberg Tax']
        }
    ],
    'virtual-cfo-fpa': [
        {
            category: 'FP&A & Planning Software',
            platforms: ['Anaplan', 'Adaptive Insights (Workday Planning)', 'Jirav', 'Vena Solutions', 'Mosaic', 'Cube', 'Planful (Host Analytics)']
        },
        {
            category: 'Business Intelligence & Dashboards',
            platforms: ['Power BI', 'Tableau', 'Looker', 'Fathom', 'Reach Reporting', 'Spotlight Reporting', 'Klipfolio']
        },
        {
            category: 'Financial Modeling',
            platforms: ['Advanced Excel / Google Sheets', 'Quantrix', 'Modano', 'Prophix']
        },
        {
            category: 'ERP & Data Sources',
            platforms: ['NetSuite', 'Sage Intacct', 'QuickBooks Online / Desktop', 'Xero', 'Microsoft Dynamics 365', 'SAP Business One']
        }
    ]
}

async function populateSoftwareData() {
    console.log('🚀 Starting software data population...')
    console.log(`📦 Project: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`)
    console.log(`📊 Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET}\n`)

    try {
        // Fetch all hire-staff documents
        const hireStaffDocs = await client.fetch(`*[_type == "hireStaff"]`)
        console.log(`📝 Found ${hireStaffDocs.length} hire-staff documents\n`)

        for (const doc of hireStaffDocs) {
            console.log(`📄 Processing: "${doc.title}"`)
            const slug = doc.slug?.current

            if (!slug) {
                console.log(`   ⚠️  No slug found, skipping\n`)
                continue
            }

            const softwareData = rolesSoftware[slug]
            if (!softwareData) {
                console.log(`   ⚠️  No software data defined for this role, skipping\n`)
                continue
            }

            console.log(`   📊 Found ${softwareData.length} software categories`)

            // Process each category
            const processedCategories = []
            for (const category of softwareData) {
                console.log(`   📁 Category: ${category.category}`)

                const processedPlatforms = []
                for (const platformName of category.platforms) {
                    console.log(`      • ${platformName}`)

                    processedPlatforms.push({
                        _key: `platform-${Date.now()}-${Math.random()}`,
                        name: platformName,
                        // No logo for now - user can upload manually
                    })

                    // Small delay to avoid rate limiting
                    await new Promise(resolve => setTimeout(resolve, 100))
                }

                processedCategories.push({
                    _key: `category-${Date.now()}-${Math.random()}`,
                    category: category.category,
                    platforms: processedPlatforms
                })
            }

            // Update the document
            await client
                .patch(doc._id)
                .set({
                    softwareCategories: processedCategories,
                })
                .commit()

            console.log(`   ✅ Successfully updated with ${processedCategories.length} categories\n`)
        }

        console.log('\n==================================================')
        console.log('🎉 Population complete!')
        console.log(`   ✅ Updated: ${hireStaffDocs.length} documents`)
        console.log('\n💡 Next step: Upload logos in Sanity Studio')
        console.log('   Go to /studio → Edit hire-staff document → Software Integration')
        console.log('   Click each platform → Upload logo image')
        console.log('==================================================\n')
    } catch (error) {
        console.error('❌ Error during population:', error)
        process.exit(1)
    }
}

populateSoftwareData()

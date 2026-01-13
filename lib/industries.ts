export interface Industry {
    id: string;
    title: string;
    slug: string;
    description: string;
    longDescription: string;
    icon: string;
    image: string;
    heroImage: string;
    intro: {
        title: string;
        content: string;
        stats: { label: string; value: string }[];
    };
    features: { title: string; description: string }[];
    process: { step: string; title: string; description: string }[];
    whyChooseUs: { title: string; description: string }[];
    testimonial: {
        quote: string;
        author: string;
        role: string;
        company: string;
    };
    faqs: { question: string; answer: string }[];
}

export const industries: Industry[] = [
    {
        id: "medical-health",
        title: "Medical and Health",
        slug: "medical-health",
        description: "Specialized financial services for healthcare providers, medical practices, and health-related businesses.",
        longDescription: "Navigate the complex financial landscape of healthcare with our HIPAA-compliant accounting and strategic advisory services tailored for medical practices.",
        icon: "heart",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920&h=1080&fit=crop",
        intro: {
            title: "Financial Health for Healthcare Providers",
            content: "From solo practitioners to multi-location clinics, we understand the unique challenges of medical billing, insurance reimbursements, and healthcare compliance.",
            stats: [
                { label: "HIPAA Compliant", value: "100%" },
                { label: "Medical Clients", value: "150+" }
            ]
        },
        features: [
            { title: "Medical Billing Integration", description: "Seamlessly sync with Kareo, DrChrono, and Athenahealth for accurate revenue tracking." },
            { title: "Insurance Reimbursement Tracking", description: "Monitor claims, denials, and payment cycles for optimal cash flow." },
            { title: "Credentialing Support", description: "Financial documentation for insurance panel applications and renewals." },
            { title: "HIPAA-Compliant Systems", description: "All staff trained in HIPAA privacy standards with secure data handling." }
        ],
        process: [
            { step: "01", title: "Practice Assessment", description: "Review your billing systems, payer mix, and current financial workflows." },
            { step: "02", title: "System Integration", description: "Connect to your EMR/PM systems for automated revenue data sync." },
            { step: "03", title: "Reimbursement Optimization", description: "Identify underpayments and improve collections processes." },
            { step: "04", title: "Strategic Advisory", description: "Provide insights on profitability by service line and payer." }
        ],
        whyChooseUs: [
            { title: "Healthcare Expertise", description: "We understand CPT codes, RVUs, and medical practice economics." },
            { title: "Data Security", description: "SOC 2 and HIPAA-compliant infrastructure for patient data protection." },
            { title: "Revenue Cycle Focus", description: "Specialize in optimizing medical practice cash flow and collections." }
        ],
        testimonial: {
            quote: "They understand the nuances of medical billing better than any accountant we've worked with.",
            author: "Dr. Emily Rodriguez",
            role: "Practice Owner",
            company: "Rodriguez Family Medicine"
        },
        faqs: [
            { question: "Are you HIPAA compliant?", answer: "Yes, we are fully HIPAA compliant. All staff undergo HIPAA training and our systems meet PHI protection standards." },
            { question: "Do you integrate with EMR systems?", answer: "Yes, we integrate with major EMR/PM platforms like Kareo, DrChrono, Athenahealth, and eClinicalWorks." }
        ]
    },
    {
        id: "hospitality-retail",
        title: "Hospitality and Retail",
        slug: "hospitality-retail",
        description: "Financial solutions for restaurants, hotels, retail stores, and consumer-facing businesses.",
        longDescription: "Master the fast-paced world of hospitality and retail with our specialized accounting for inventory, point-of-sale systems, and multi-location operations.",
        icon: "shopping-bag",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920&h=1080&fit=crop",
        intro: {
            title: "Drive Profit in High-Volume Retail",
            content: "From managing COGS and inventory turns to analyzing same-store sales, we provide the financial clarity retail and hospitality businesses need to thrive.",
            stats: [
                { label: "POS Systems", value: "15+ Supported" },
                { label: "Locations Managed", value: "500+" }
            ]
        },
        features: [
            { title: "POS Integration", description: "Sync seamlessly with Square, Toast, Shopify POS, Clover, and Lightspeed." },
            { title: "Inventory Management", description: "Track COGS, shrinkage, and inventory turnover for profitability insights." },
            { title: "Multi-Location Reporting", description: "Consolidate financials across multiple stores or restaurant locations." },
            { title: "Sales Analytics", description: "Monitor same-store sales growth, average transaction value, and customer trends." }
        ],
        process: [
            { step: "01", title: "POS Connection", description: "Integrate your point-of-sale system for automated sales data flow." },
            { step: "02", title: "Inventory Setup", description: "Establish COGS tracking and inventory management standards." },
            { step: "03", title: "Monthly Insights", description: "Receive detailed P&L by location, product category, and service line." },
            { step: "04", title: "Growth Strategy", description: "Advise on expansion, menu pricing, and margin optimization." }
        ],
        whyChooseUs: [
            { title: "Omnichannel Expertise", description: "We understand brick-and-mortar, e-commerce, and hybrid retail models." },
            { title: "Real-Time Dashboards", description: "See your sales, inventory, and profitability updated daily." },
            { title: "Hospitality Specialists", description: "Experience with restaurant-specific challenges like tip reporting and labor costs." }
        ],
        testimonial: {
            quote: "Our restaurant group's finances are finally organized. We can see which locations are stars and which need help.",
            author: "Carlos Martinez",
            role: "Owner",
            company: "Martinez Restaurant Group"
        },
        faqs: [
            { question: "Do you work with restaurant POS systems?", answer: "Yes, we integrate with Toast, Square, Clover, Lightspeed, and most major restaurant POS platforms." },
            { question: "Can you handle multi-location consolidation?", answer: "Absolutely. We specialize in consolidating financials across multiple retail or restaurant locations." }
        ]
    },
    {
        id: "real-estate-construction",
        title: "Real Estate & Construction",
        slug: "real-estate-construction",
        description: "Accounting and advisory for real estate investors, developers, contractors, and property management firms.",
        longDescription: "Navigate the complexities of job costing, percentage-of-completion accounting, and real estate syndication with our specialized construction and real estate expertise.",
        icon: "building",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop",
        intro: {
            title: "Built for Real Estate and Construction",
            content: "From job costing and WIP schedules to 1031 exchanges and syndication accounting, we bring deep expertise to real estate and construction financial management.",
            stats: [
                { label: "Projects Tracked", value: "1,000+" },
                { label: "1031 Exchanges", value: "200+" }
            ]
        },
        features: [
            { title: "Job Costing", description: "Track costs by project, phase, and cost code for accurate profitability analysis." },
            { title: "WIP Schedules", description: "Manage work-in-progress and percentage-of-completion accounting." },
            { title: "Property Management Accounting", description: "Handle rent rolls, CAM reconciliations, and tenant billing." },
            { title: "1031 Exchange Support", description: "Facilitate like-kind exchanges with proper documentation and tracking." }
        ],
        process: [
            { step: "01", title: "Project Setup", description: "Establish job costing structure and chart of accounts for each project." },
            { step: "02", title: "Progress Tracking", description: "Monitor costs vs. budget and percent complete for each job." },
            { step: "03", title: "Draw Management", description: "Coordinate with lenders for construction draw requests and documentation." },
            { step: "04", title: "Tax Strategy", description: "Advise on cost segregation, 1031 exchanges, and tax deferral strategies." }
        ],
        whyChooseUs: [
            { title: "Construction Accounting Experts", description: "Specialized in job costing, certified payroll, and prevailing wage compliance." },
            { title: "Real Estate Tax Strategy", description: "Deep knowledge of depreciation, 1031 exchanges, and opportunity zones." },
            { title: "Lender-Ready Reporting", description: "Provide financials that meet lender and investor requirements." }
        ],
        testimonial: {
            quote: "They structured our job costing so we finally know which types of projects are most profitable.",
            author: "Tom Richardson",
            role: "President",
            company: "Richardson Construction"
        },
        faqs: [
            { question: "Do you handle percentage-of-completion accounting?", answer: "Yes, we specialize in construction accounting including POC, WIP schedules, and job cost tracking." },
            { question: "Can you help with 1031 exchanges?", answer: "Absolutely. We provide the financial documentation and tracking required for successful like-kind exchanges." }
        ]
    },
    {
        id: "tech-ecommerce",
        title: "Tech & Ecommerce",
        slug: "tech-ecommerce",
        description: "Financial services for SaaS, software companies, online retailers, and digital businesses.",
        longDescription: "Scale your tech or e-commerce business with specialized accounting for subscription revenue, marketplace fees, and investor-ready metrics.",
        icon: "monitor",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1920&h=1080&fit=crop",
        intro: {
            title: "Financial Clarity for Digital Businesses",
            content: "From MRR tracking to revenue recognition (ASC 606), we provide the financial infrastructure tech and e-commerce companies need to scale and raise capital.",
            stats: [
                { label: "SaaS Clients", value: "100+" },
                { label: "GMV Tracked", value: "$500M+" }
            ]
        },
        features: [
            { title: "SaaS Metrics Tracking", description: "Monitor MRR, ARR, churn, LTV, CAC, and other critical SaaS KPIs." },
            { title: "Revenue Recognition (ASC 606)", description: "Properly account for subscription and usage-based revenue." },
            { title: "Marketplace Reconciliation", description: "Track sales, fees, and payouts from Amazon, Shopify, Etsy, and more." },
            { title: "Investor Reporting", description: "Provide board-ready metrics and KPI dashboards for VC-backed companies." }
        ],
        process: [
            { step: "01", title: "Platform Integration", description: "Connect to Stripe, Shopify, Amazon, and other sales platforms." },
            { step: "02", title: "Metric Dashboard", description: "Build custom KPI dashboards for real-time business insights." },
            { step: "03", title: "Monthly Reporting", description: "Deliver detailed unit economics and cohort analysis." },
            { step: "04", title: "Fundraising Support", description: "Prepare data rooms and financial models for investor due diligence." }
        ],
        whyChooseUs: [
            { title: "SaaS Accounting Specialists", description: "We understand deferred revenue, usage-based billing, and subscription metrics." },
            { title: "E-commerce Expertise", description: "Experience with multi-channel sales, COGS tracking, and marketplace accounting." },
            { title: "Investor Ready", description: "Provide the metrics and reporting VCs and growth equity firms expect." }
        ],
        testimonial: {
            quote: "Their SaaS metrics dashboards gave us the visibility we needed to close our Series A.",
            author: "Jessica Wu",
            role: "CFO",
            company: "CloudSync Technologies"
        },
        faqs: [
            { question: "Do you understand SaaS revenue recognition?", answer: "Yes, we specialize in ASC 606 compliance for subscription and usage-based revenue models." },
            { question: "Can you integrate with Stripe and Shopify?", answer: "Absolutely. We integrate with all major payment processors and e-commerce platforms." }
        ]
    },
    {
        id: "professional-services",
        title: "Professional Services",
        slug: "professional-services",
        description: "Accounting for law firms, consulting practices, agencies, and service-based businesses.",
        longDescription: "Optimize your professional services firm with specialized accounting for billable hours, project profitability, and partner distributions.",
        icon: "briefcase",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop",
        intro: {
            title: "Financial Mastery for Service Firms",
            content: "Whether you're a law firm, consulting practice, or creative agency, we provide the financial insights you need to maximize billable utilization and profitability.",
            stats: [
                { label: "Billable Rate", value: "Optimized" },
                { label: "Service Firms", value: "250+" }
            ]
        },
        features: [
            { title: "Time Tracking Integration", description: "Sync with Clio, TimeSolv, Harvest, and other time & billing platforms." },
            { title: "Project Profitability", description: "Analyze profitability by client, project, and service line." },
            { title: "Realization Rate Analysis", description: "Track billable hours, write-offs, and effective billing rates." },
            { title: "Partner Distribution", description: "Manage draws, K-1 reporting, and partner capital accounts." }
        ],
        process: [
            { step: "01", title: "Billing System Sync", description: "Connect to your time tracking and practice management software." },
            { step: "02", title: "Profitability Setup", description: "Establish tracking by client, matter, or project for margin analysis." },
            { step: "03", title: "Utilization Reports", description: "Monitor billable vs. non-billable time and staff efficiency." },
            { step: "04", title: "Strategic Pricing", description: "Advise on rate optimization and service mix for maximum profit." }
        ],
        whyChooseUs: [
            { title: "Law Firm Specialists", description: "Experience with IOLTA accounts, trust accounting, and legal billing." },
            { title: "Agency Expertise", description: "Understand project-based work, retainers, and creative industry dynamics." },
            { title: "Utilization Focus", description: "Help you maximize billable hours and improve realization rates." }
        ],
        testimonial: {
            quote: "We finally understand which practice areas are most profitable. Game-changer for our firm.",
            author: "Patricia Anderson",
            role: "Managing Partner",
            company: "Anderson & Associates Law"
        },
        faqs: [
            { question: "Do you work with law firm trust accounts?", answer: "Yes, we are experienced with IOLTA accounting and law firm-specific compliance requirements." },
            { question: "Can you track profitability by project?", answer: "Absolutely. We specialize in project-level profitability analysis for service-based businesses." }
        ]
    },
    {
        id: "industrial-niche",
        title: "Industrial & Niche",
        slug: "industrial-niche",
        description: "Specialized accounting for manufacturing, distribution, and unique industry verticals.",
        longDescription: "Tackle the challenges of manufacturing overhead, inventory costing, and specialized industry compliance with our niche accounting expertise.",
        icon: "cog",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&h=1080&fit=crop",
        intro: {
            title: "Precision for Complex Industries",
            content: "From manufacturing cost accounting to specialized regulatory compliance, we bring deep expertise to industrial and niche market businesses.",
            stats: [
                { label: "Inventory Accy", value: "99.9%" },
                { label: "Industries Served", value: "25+" }
            ]
        },
        features: [
            { title: "Manufacturing Cost Accounting", description: "Track direct materials, labor, and overhead for accurate product costing." },
            { title: "Inventory Valuation", description: "Manage FIFO, LIFO, and weighted average costing methods." },
            { title: "Supply Chain Finance", description: "Monitor vendor terms, cash conversion cycles, and working capital." },
            { title: "Industry-Specific Compliance", description: "Navigate unique regulatory requirements for your niche market." }
        ],
        process: [
            { step: "01", title: "Industry Deep Dive", description: "We learn the unique aspects of your industry and value chain." },
            { step: "02", title: "Costing Setup", description: "Establish proper cost accounting for materials, labor, and overhead." },
            { step: "03", title: "Operational Metrics", description: "Track throughput, cycle time, and operational efficiency KPIs." },
            { step: "04", title: "Compliance Monitoring", description: "Ensure adherence to industry-specific regulations and standards." }
        ],
        whyChooseUs: [
            { title: "Manufacturing Expertise", description: "Deep experience with job shops, process manufacturing, and assembly operations." },
            { title: "Niche Industry Knowledge", description: "We've worked with specialized verticals from aerospace to waste management." },
            { title: "ERP Integration", description: "Connect with NetSuite, SAP, Epicor, and other industrial ERP systems." }
        ],
        testimonial: {
            quote: "They understood our complex cost structure better than accountants who've worked in our industry for years.",
            author: "Frank Morrison",
            role: "CEO",
            company: "Precision Manufacturing Corp"
        },
        faqs: [
            { question: "Do you work with manufacturing ERPs?", answer: "Yes, we integrate with NetSuite, SAP Business One, Epicor, and other manufacturing ERP platforms." },
            { question: "Can you handle complex cost accounting?", answer: "Absolutely. We specialize in job costing, process costing, and activity-based costing for manufacturers." }
        ]
    },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
    return industries.find((industry) => industry.slug === slug);
}

export function getAllIndustries(): Industry[] {
    return industries;
}

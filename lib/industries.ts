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
        description: "HIPAA-compliant accounting for medical practices, dental clinics, mental health, therapy centers, med spas, and home healthcare.",
        longDescription: "Healthcare accounting requires specialized knowledge of insurance billing cycles (ERA/EOB), RCM oversight, and HIPAA compliance. From general practices to specialized clinics, our team understands medical accounting nuances.",
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
            { title: "8 Medical Sub-Industries", description: "General/Specialized Medical, Dental, Mental Health, Physical Therapy, Dermatology/Med Spas, Outpatient Centers, Home Healthcare, Pharmacy." },
            { title: "Revenue Cycle Management (RCM)", description: "Track denied claims, aging A/R, ERA/EOB reconciliation, and insurance payment lag cash flow forecasting." },
            { title: "Practice Management Integration", description: "AdvancedMD, Athenahealth, Kareo, Dentrix, SimplePractice, WebPT, Zenoti, AlayaCare integration." },
            { title: "HIPAA & SOC 2 Compliance", description: "SOC 2 Type II delivery centers, all staff HIPAA-trained, Business Associate Agreements (BAA) signed." },
            { title: "Treatment Plan Account ing", description: "Track case fee liabilities for orthodontics, manage DME sales for PT, handle member ship programs for med spas." }
        ],
        process: [
            { step: "01", title: "Practice Assessment", description: "Review your billing systems, payer mix, and current financial workflows." },
            { step: "02", title: "System Integration", description: "Connect to your EMR/PM systems for automated revenue data sync." },
            { step: "03", title: "Reimbursement Optimization", description: "Identify underpayments and improve collections processes." },
            { step: "04", title: "Strategic Advisory", description: "Provide insights on profitability by service line and payer." }
        ],
        whyChooseUs: [
            { title: "HIPAA Compliance & Data Security", description: "SOC 2 Type II compliant delivery centers ensuring all patient and practice data handled with highest security. Full HIPAA compliance." },
            { title: "Healthcare Software Expertise", description: "Deep proficiency in AdvancedMD, Athenahealth, Dentrix, SimplePractice, and integration with accounting software." },
            { title: "RCM & Insurance Knowledge", description: "Understanding of insurance billing cycles, ERA/EOB processing, denial management, and healthcare revenue recognition complexities." },
            { title: "Multi-Location Practices", description: "Handle accounting for single-provider practices up to multi-location groups with consolidated reporting and location-level P&Ls." },
            { title: "40-60% Cost Savings", description: "Save significantly compared to hiring in-house healthcare accounting staff, while getting specialized medical practice expertise." }
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
        description: "Prime Cost management, POS reconciliation, and sales tax nexus for restaurants, hotels, franchises, retail brands, and fitness centers.",
        longDescription: "The hospitality and retail sector requires high-volume transaction reconciliation, inventory accuracy, and multi-location reporting. Our team specializes in POS systems, sales tax nexus, and Prime Cost control.",
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
            { title: "5 Hospitality/Retail Sub-Industries", description: "Restaurants/QSR, Hotels/Resorts, Franchise Operations (Multi-Unit), Retail/Apparel Brands, Fitness Centers/Gyms/Spas." },
            { title: "Daily Sales Reconciliation", description: "Reconcile Toast/Clover/Square POS with bank deposits, manage 3rd-party delivery fees (UberEats/DoorDash), handle merchant fees." },
            { title: "Prime Cost & Inventory Control", description: "Weekly Prime Cost reporting (COGS + Labor), inventory shrinkage tracking, menu item profitability, landed cost analysis." },
            { title: "Multi-Location Consolidation", description: "Standardized Chart of Accounts across 10+ locations, unit-level EBITDA tracking, franchise royalty calculations." },
            { title: "Sales Tax Nexus Management", description: "Wayfair economic nexus for online sales, marketplace facilitator laws, TaxJar/Avalara integration." }
        ],
        process: [
            { step: "01", title: "POS Connection", description: "Integrate your point-of-sale system for automated sales data flow." },
            { step: "02", title: "Inventory Setup", description: "Establish COGS tracking and inventory management standards." },
            { step: "03", title: "Monthly Insights", description: "Receive detailed P&L by location, product category, and service line." },
            { step: "04", title: "Growth Strategy", description: "Advise on expansion, menu pricing, and margin optimization." }
        ],
        whyChooseUs: [
            { title: "Daily Reconciliation Expertise", description: "Daily cash and credit card reconciliation for POS, third-party delivery fees, and merchant charges." },
            { title: "Prime Cost Management", description: "Expert analysis of Labor and COGS—the two biggest expense categories—helping maintain profitability in thin-margin businesses." },
            { title: "Multi-Location Consolidation", description: "Seamless consolidated reporting across locations with individual P&Ls for each unit, identifying underperforming locations." },
            { title: "Sales Tax Compliance", description: "Navigate multi-state sales tax, Wayfair nexus, marketplace facilitator laws, and industry-specific exemptions." },
            { title: "High-Volume Transactions", description: "Handle thousands of daily transactions efficiently with automated reconciliation tools and streamlined workflows." }
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
        description: "Job costing, WIP schedules, property management, AIA billing, and 1031 exchange support for developers, contractors, and architects.",
        longDescription: "Real estate and construction accounting demands expertise in job costing, progress billing, fund accounting, and complex compliance. From property management to general contractors, we understand the built environment.",
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
            { title: "5 Real Estate/Construction Sub-Industries", description: "RE Development & Investment, Property Management, Construction/GC, Architecture & Engineering, Interior Design/Home Staging." },
            { title: "Job Costing & WIP Schedules", description: "Track Labor, Materials, Subcontractors, and Overhead by project. Manage over-billings/under-billings and AIA Progress Billing (G702/G703)." },
            { title: "Property Management Accounting", description: "Tenant ledgers, security deposit (escrow) compliance, CAM reconciliations, owner distributions, delinquency tracking." },
            { title: "1031 Exchange & Tax Strategy", description: "Track like-kind property swaps, K-1 distributions for partnerships, cost segregation studies, Section 179D energy credits." },
            { title: "Certified Payroll & Lien Waivers", description: "WH-347 certified payroll for government projects, prevailing wage compliance, lien waiver management." }
        ],
        process: [
            { step: "01", title: "Project Setup", description: "Establish job costing structure and chart of accounts for each project." },
            { step: "02", title: "Progress Tracking", description: "Monitor costs vs. budget and percent complete for each job." },
            { step: "03", title: "Draw Management", description: "Coordinate with lenders for construction draw requests and documentation." },
            { step: "04", title: "Tax Strategy", description: "Advise on cost segregation, 1031 exchanges, and tax deferral strategies." }
        ],
        whyChooseUs: [
            { title: "Job Costing Expertise", description: "Deep understanding of job cost accounting, WIP schedules, and progress billing methodologies for accurate project profitability." },
            { title: "Compliance Knowledge", description: "Expert handling of certified payroll (WH-347), prevailing wage requirements, lien waiver management, and AIA billing formats." },
            { title: "Multi-Entity Consolidation", description: "Seamless reporting for developers managing multiple SPVs, LLCs, and partnership structures." },
            { title: "Software Integration", description: "Proficient in Procore, Foundation, Sage CRE, Yardi, AppFolio integrating with your existing workflow." },
            { title: "Tax Optimization", description: "Maximize deductions via cost segregation, Section 179D credits, R&D credits, and proper 1031 exchange tracking." }
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
        description: "ASC 606 revenue recognition, SaaS metrics (MRR/ARR/Churn), crypto accounting, e-commerce reconciliation, and investor reporting.",
        longDescription: "Tech and e-commerce businesses require specialized knowledge of subscription billingASC 606, multi-currency transactions, digital asset accounting, and high-growth financial modeling.",
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
            { title: "5 Tech/E-commerce Sub-Industries", description: "SaaS & Software Development, Crypto/Web3/Digital Assets, E-commerce & Amazon FBA, AgTech & BioTech Startups, Digital Marketing & Agencies." },
            { title: "SaaS: ASC 606 & MRR Tracking", description: "Deferred revenue recognition, burn rate analysis, SaaS KPIs (LTV, CAC, Churn, NRR), departmental P&L (Sales, Engineering, G&A)." },
            { title: "Crypto: On-Chain Reconciliation", description: "Wallet-to-ledger transactions, multi-chain (Ethereum, Solana, Polygon), DeFi activity, realized/unrealized gains, cost basis tracking (FIFO/LIFO)." },
            { title: "E-commerce: Marketplace Reconciliation", description: "Amazon/Shopify/Walmart payouts, FBA fees, landed cost analysis (Product + Freight + Customs + Fees), multi-state sales tax nexus." },
            { title: "R&D Credits & Fundraising Support", description: "Form 6765 R&D tax credits, SBIR/STTR grant compliance, QSBS tracking (Section 1202), pitch deck financial projections." }
        ],
        process: [
            { step: "01", title: "Platform Integration", description: "Connect to Stripe, Shopify, Amazon, and other sales platforms." },
            { step: "02", title: "Metric Dashboard", description: "Build custom KPI dashboards for real-time business insights." },
            { step: "03", title: "Monthly Reporting", description: "Deliver detailed unit economics and cohort analysis." },
            { step: "04", title: "Fundraising Support", description: "Prepare data rooms and financial models for investor due diligence." }
        ],
        whyChooseUs: [
            { title: "Revenue Recognition Expertise", description: "Deep understanding of ASC 606 for SaaS multi-element arrangements, subscription revenue, and complex licensing." },
            { title: "SaaS Metrics & KPI Tracking", description: "Monitor metrics that matter: MRR, ARR, CAC, LTV, Churn, Net Revenue Retention, Logo Retention, Rule of 40." },
            { title: "Global & Multi-Currency", description: "Handle international transactions, crypto payments, and multi-currency reconciliation across dozens of payment processors." },
            { title: "E-commerce Reconciliation", description: "Expert reconciliation of complex marketplace payouts with fees, returns, chargebacks, and inventory adjustments across channels." },
            { title: "Scalability for High Growth", description: "Built for hypergrowth—handle transaction volume scaling from hundreds to millions per month without missing a beat." }
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
        description: "IOLTA trust accounting, time & billing integration, project profitability, realization rates, and partner capital management.",
        longDescription: "Professional services firms face unique challenges: trust accounting, billable utilization tracking, realization rates, and complex fee structures for law firms, consulting, agencies, and staffing.",
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
            { title: "4 Professional Service Sub-Industries", description: "Law Firms & Legal Services, Insurance Agencies & Brokerages, Management & Business Consulting, Staffing & Recruitment Agencies." },
            { title: "Trust Accounting & IOLTA Compliance", description: "Three-way reconciliation (bank, book, client ledgers), client cost tracking (hard & soft costs), state-mandated compliance." },
            { title: "Billable Utilization & Realization", description: "Track time recorded vs. amount collected, partner compensation (origination, management, production), WIP by matter/attorney." },
            { title: "Insurance: Commission Reconciliation", description: "Premium trust accounting, carrier commission statement matching, E&O insurance tracking, direct bill vs. agency bill revenue." },
            { title: "Staffing: High-Volume Payroll", description: "Weekly payroll for hundreds of temps, funding/factoring reconciliation, burden analysis (salary + taxes + insurance + comp), WOTC tracking." }
        ],
        process: [
            { step: "01", title: "Billing System Sync", description: "Connect to your time tracking and practice management software." },
            { step: "02", title: "Profitability Setup", description: "Establish tracking by client, matter, or project for margin analysis." },
            { step: "03", title: "Utilization Reports", description: "Monitor billable vs. non-billable time and staff efficiency." },
            { step: "04", title: "Strategic Pricing", description: "Advise on rate optimization and service mix for maximum profit." }
        ],
        whyChooseUs: [
            { title: "Compliance Expertise", description: "Deep understanding of IOLTA trust accounting, insurance fiduciary duties, and staffing agency requirements." },
            { title: "Billable Hour Tracking", description: "Expert management of time & billing systems, utilization reporting, and realization rate analysis to maximize profitability." },
            { title: "Multi-Entity & Partner Accounting", description: "Handle complex partnership structures, partner compensation calculations, and multi-entity consolidation for growing firms." },
            { title: "Cash Flow Management", description: "Optimize AR collections, manage factoring relationships, and ensure healthy cash flow for service businesses with payment lags." },
            { title: "Project-Based Profitability", description: "Detailed project margin analysis helping identify profitable clients, service lines, and practice areas." }
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
        description: "Specialized accounting for 501(c)(3) non-profits, cannabis (Section 280E), family offices, logistics/trucking (IFTA), manufacturing, and agriculture.",
        longDescription: "Specialized industries require experts who understand unique regulations: Section 280E (cannabis), IFTA (trucking), Form 990 (non-profits), Section 263A (manufacturing), and niche compliance.",
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
            { title: "6 Industrial/Niche Sub-Industries", description: "Non-Profit Organizations (NGOs), Cannabis Dispensaries & Cultivation, Family Offices  & HNWI, Logistics/Trucking/3PL, Manufacturing & Distribution, Agriculture & Commercial Farming." },
            { title: "Non-Profit: Fund Accounting & Form 990", description: "Restricted vs. unrestricted funds, functional expense allocation (Program/Management/Fundraising), IRS Form 990/990-EZ, UBIT compliance." },
            { title: "Cannabis: Section 280E Compliance", description: "Inventory costing to maximize COGS (deductions limited), Metrc/BioTrack seed-to-sale reconciliation, cash management, Form 8300 reporting." },
            { title: "Logistics: IFTA & Asset Tracking", description: "Cost-per-mile analysis, IFTA quarterly reporting, Form 2290 (Heavy Vehicle Use Tax), owner-operator 1099 management." },
            { title: "Manufacturing: Cost Accounting & BOM", description: "Standard vs. actual costing, Bill of Materials (BOM), overhead absorption, Section 263A (UNICAP) inventory rules, IC-DISC for exporters." }
        ],
        process: [
            { step: "01", title: "Industry Deep Dive", description: "We learn the unique aspects of your industry and value chain." },
            { step: "02", title: "Costing Setup", description: "Establish proper cost accounting for materials, labor, and overhead." },
            { step: "03", title: "Operational Metrics", description: "Track throughput, cycle time, and operational efficiency KPIs." },
            { step: "04", title: "Compliance Monitoring", description: "Ensure adherence to industry-specific regulations and standards." }
        ],
        whyChooseUs: [
            { title: "Regulatory Expertise", description: "Deep knowledge of Section 280E (cannabis), IFTA (trucking), 263A (manufacturing), Form 990 (non-profits), and specialized compliance." },
            { title: "Specialized Software Proficiency", description: "Experience with Metrc (cannabis), TMS systems (logistics), BOM software (manufacturing), donor management (non-profits)." },
            { title: "Complex Compliance", description: "Handle unique filings: FBAR, FATCA, Schedule H (household employees), IC-DISC, and specialized state reporting." },
            { title: "Industry-Specific KPIs", description: "Track cost-per-mile (trucking), functional expense ratios (non-profits), 280E optimization (cannabis), biological assets (agriculture)." },
            { title: "White-Glove Service", description: "Specialized industries require specialized attention—concierge-level service for family offices, complex compliance for regulated industries." }
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

export interface HireStaffPosition {
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

export const hireStaffPositions: HireStaffPosition[] = [
    {
        id: "bookkeeper-accountant",
        title: "Hire Bookkeeper/Accountant",
        slug: "bookkeeper-accountant",
        description: "Skilled offshore bookkeepers and accountants to manage your daily financial operations.",
        longDescription: "Access highly qualified accounting professionals who work remotely from our state-of-the-art delivery centers, providing you with cost-effective bookkeeping and accounting excellence.",
        icon: "book",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
        intro: {
            title: "Expert Bookkeepers Who Integrate Seamlessly",
            content: "Our offshore bookkeepers are not freelancers working from home. They work from our supervised delivery centers with enterprise-grade infrastructure, ensuring consistent quality and reliability.",
            stats: [
                { label: "Cost Savings", value: "50-70%" },
                { label: "Qualified Staff", value: "100%" }
            ]
        },
        features: [
            { title: "Bachelor's in Accounting (Minimum)", description: "All bookkeepers hold at least a Bachelor's degree in Accounting or Finance." },
            { title: "US GAAP Trained", description: "Pre-trained in US Generally Accepted Accounting Principles and US tax codes." },
            { title: "QuickBooks & Xero Certified", description: "Experts in leading accounting software platforms used in the US." },
            { title: "Supervised Work Environment", description: "Work from our delivery centers with 24/7 monitoring and quality control." }
        ],
        process: [
            { step: "01", title: "Share Requirements", description: "Tell us about your bookkeeping needs and preferred software tools." },
            { step: "02", title: "Interview Candidates", description: "We shortlist 2-3 qualified candidates for you to interview via video call." },
            { step: "03", title: "Onboarding", description: "Your selected bookkeeper integrates with your team and systems within days." },
            { step: "04", title: "Ongoing Support", description: "We provide continuous training, quality checks, and replacement guarantee." }
        ],
        whyChooseUs: [
            { title: "No Freelancers", description: "Our staff works from professional delivery centers, not from home." },
            { title: "Infrastructure Included", description: "Dual fiber internet, backup power, and enterprise workstations provided." },
            { title: "30-Day Replacement Guarantee", description: "If the fit isn't right, we replace them immediately at no cost." }
        ],
        testimonial: {
            quote: "Hiring through them was seamless. Our offshore bookkeeper feels like part of our local team.",
            author: "Jennifer Moore",
            role: "Partner",
            company: "Moore & Associates CPA"
        },
        faqs: [
            { question: "What are the qualifications of bookkeepers?", answer: "All bookkeepers hold a minimum Bachelor's degree in Accounting and are trained in US GAAP and QuickBooks/Xero." },
            { question: "Can I interview before hiring?", answer: "Yes, we shortlist 2-3 candidates and you conduct video interviews to select the best fit." }
        ]
    },
    {
        id: "tax-preparation",
        title: "Hire Tax Preparation Staff",
        slug: "tax-preparation",
        description: "Certified tax professionals to handle preparation, planning, and filing for your clients.",
        longDescription: "Expand your tax practice capacity with offshore tax preparers who hold CPA, EA, or CA credentials and specialize in US federal and state tax compliance.",
        icon: "tax",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1920&h=1080&fit=crop",
        intro: {
            title: "Scale Your Tax Practice Without Overhead",
            content: "Our tax preparers are credentialed professionals (CPAs, EAs, CAs) who work exclusively on US tax returns and are updated annually on IRS tax code changes.",
            stats: [
                { label: "Credentialed Pros", value: "CPA/EA/CA" },
                { label: "IRS Compliant", value: "100%" }
            ]
        },
        features: [
            { title: "IRS Tax Code Expertise", description: "Annual training on TCJA, SECURE Act, and all federal/state updates." },
            { title: "Multi-State Experience", description: "Handle complex multi-state tax returns with confidence." },
            { title: "Tax Software Proficiency", description: "Experienced with Drake, Lacerte, ProSeries, and UltraTax." },
            { title: "Quality 3-Tier Review", description: "Every return undergoes preparer, senior reviewer, and manager sign-off." }
        ],
        process: [
            { step: "01", title: "Define Your Needs", description: "Share the types of returns, software, and volume you handle." },
            { step: "02", title: "Candidate Selection", description: "We present vetted, credentialed tax professionals for your review." },
            { step: "03", title: "Test Project", description: "Start with a 15-day risk-free trial on real tax returns." },
            { step: "04", title: "Scale Seamlessly", description: "Add more staff as your practice grows during tax season." }
        ],
        whyChooseUs: [
            { title: "Credentialed Professionals", description: "Only CPAs, Enrolled Agents, and Chartered Accountants." },
            { title: "Annual CPE Included", description: "We handle all Continuing Professional Education at our cost." },
            { title: "Tax Season Flexibility", description: "Scale up during busy season, scale down after April." }
        ],
        testimonial: {
            quote: "Our offshore tax team handled 400+ returns this season. Quality was exceptional.",
            author: "Michael Torres",
            role: "Managing Partner",
            company: "Torres Tax Group"
        },
        faqs: [
            { question: "Do they have US tax credentials?", answer: "Yes, our senior tax staff hold CPA, Enrolled Agent (EA), or Chartered Accountant credentials." },
            { question: "How do you ensure quality?", answer: "We use a 3-tier review process: Preparer → Senior Reviewer → Manager sign-off." }
        ]
    },
    {
        id: "payroll-compliance",
        title: "Hire Payroll and Compliance",
        slug: "payroll-compliance",
        description: "Payroll specialists who handle multi-state payroll processing and compliance filing.",
        longDescription: "Ensure flawless payroll execution and regulatory compliance with dedicated offshore specialists trained in US labor laws and payroll systems.",
        icon: "users",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
        intro: {
            title: "Never Miss a Payroll Deadline Again",
            content: "Our payroll specialists manage the full cycle from data entry to tax filings, ensuring your clients' employees are always paid on time.",
            stats: [
                { label: "On-Time Rate", value: "100%" },
                { label: "Multi-State Ready", value: "Yes" }
            ]
        },
        features: [
            { title: "Payroll Platform Experts", description: "Certified in ADP, Paychex, Gusto, QuickBooks Payroll, and more." },
            { title: "Tax Filing & Compliance", description: "Handle 941, 940, W-2, 1099, and state unemployment filings." },
            { title: "Benefits Administration", description: "Manage 401(k) contributions, health insurance deductions, and garnishments." },
            { title: "Labor Law Knowledge", description: "Trained in FLSA, overtime rules, and workers' compensation requirements." }
        ],
        process: [
            { step: "01", title: "System Setup", description: "We sync with your payroll software and time-tracking tools." },
            { step: "02", title: "Team Training", description: "Your offshore specialist learns your unique payroll processes." },
            { step: "03", title: "Processing Begins", description: "Payroll runs are executed bi-weekly or per your schedule." },
            { step: "04", title: "Compliance Monitoring", description: "We stay ahead of labor law changes and filing deadlines." }
        ],
        whyChooseUs: [
            { title: "Zero Payroll Errors", description: "Our 3-tier QC process ensures accurate calculations every time." },
            { title: "Compliance Peace of Mind", description: "We monitor federal, state, and local regulation changes." },
            { title: "Scalable for Growth", description: "Easily add staff as your client roster expands." }
        ],
        testimonial: {
            quote: "Our payroll offshore team handles 50+ companies flawlessly. Best decision we made.",
            author: "Rebecca Adams",
            role: "Director of Operations",
            company: "Adams Payroll Services"
        },
        faqs: [
            { question: "Can they handle multi-state payroll?", answer: "Yes, our specialists are trained in the complexities of multi-state compliance and tax filing." },
            { question: "What if there's an error?", answer: "Our 3-tier review process minimizes errors, but if one occurs, we take full responsibility and correct it immediately." }
        ]
    },
    {
        id: "audit-assurance",
        title: "Hire Audit and Assurance",
        slug: "audit-assurance",
        description: "Experienced audit professionals to support internal controls and compliance reviews.",
        longDescription: "Strengthen your audit practice with offshore professionals who perform detailed testing, documentation, and analysis under your supervision.",
        icon: "shield",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&h=1080&fit=crop",
        intro: {
            title: "Audit Support That Scales",
            content: "Our audit professionals handle the detailed work of testing, sampling, and documentation, allowing your senior team to focus on analysis and client relationships.",
            stats: [
                { label: "Audit Ready", value: "Always" },
                { label: "Documentation", value: "Detailed" }
            ]
        },
        features: [
            { title: "SOC 2 & GAAP Trained", description: "Familiarity with US audit standards and compliance frameworks." },
            { title: "Internal Control Testing", description: "Perform walkthroughs, testing, and control documentation." },
            { title: "Workpaper Preparation", description: "Create detailed audit workpapers in your firm's standard format." },
            { title: "Data Analytics Tools", description: "Proficient in IDEA, ACL, and Excel-based audit analytics." }
        ],
        process: [
            { step: "01", title: "Audit Scope Review", description: "We understand your audit methodology and documentation standards." },
            { step: "02", title: "Staff Assignment", description: "Match you with audit professionals experienced in your industry." },
            { step: "03", title: "Engagement Testing", description: "Your offshore team performs testing under your senior oversight." },
            { step: "04", title: "Review & Finalization", description: "All workpapers are reviewed by your team before finalization." }
        ],
        whyChooseUs: [
            { title: "Audit Methodology Trained", description: "We adapt to your firm's specific audit approach and templates." },
            { title: "SOC 2 Compliant Centers", description: "Your data is protected in our certified delivery centers." },
            { title: "Experienced Seniors Available", description: "Access to CA and CPA-credentialed audit managers for complex work." }
        ],
        testimonial: {
            quote: "Their audit support allowed us to take on 3 additional clients this year without hiring locally.",
            author: "David Kim",
            role: "Audit Partner",
            company: "Kim & Partners LLP"
        },
        faqs: [
            { question: "Do they understand US audit standards?", answer: "Yes, all audit staff are trained in GAAS, SOC 2, and US compliance frameworks." },
            { question: "How is work supervised?", answer: "Your senior team reviews all workpapers; we provide the detailed testing and documentation support." }
        ]
    },
    {
        id: "virtual-cfo-fpa",
        title: "Hire Virtual CFO & FP&A",
        slug: "virtual-cfo-fpa",
        description: "Senior financial analysts and CFO-level professionals for strategic planning and forecasting.",
        longDescription: "Access executive-level financial talent to drive FP&A, budgeting, forecasting, and board-level reporting without the C-suite salary.",
        icon: "trending-up",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop",
        intro: {
            title: "Strategic Financial Leadership, Offshore",
            content: "Our Virtual CFO and FP&A professionals bring executive experience in financial modeling, investor relations, and strategic planning at a fraction of the cost.",
            stats: [
                { label: "Experience Level", value: "10+ Years" },
                { label: "Funding Supported", value: "$100M+" }
            ]
        },
        features: [
            { title: "Financial Modeling", description: "Build complex 3-statement models and scenario analysis for decision-making." },
            { title: "Budget & Forecast", description: "Create rolling forecasts and variance analysis for executive teams." },
            { title: "Investor Reporting", description: "Prepare board decks, KPI dashboards, and investor update materials." },
            { title: "M&A Support", description: "Conduct financial due diligence and integration modeling for acquisitions." }
        ],
        process: [
            { step: "01", title: "Strategic Assessment", description: "We understand your business model, KPIs, and growth objectives." },
            { step: "02", title: "CFO Matching", description: "We present senior FP&A or CFO-level candidates for interview." },
            { step: "03", title: "Model Development", description: "Your offshore CFO builds custom financial models and dashboards." },
            { step: "04", title: "Ongoing Advisory", description: "Weekly strategy sessions and monthly board-ready reporting." }
        ],
        whyChooseUs: [
            { title: "C-Suite Experience", description: "Our Virtual CFOs have led finance teams at high-growth companies." },
            { title: "Strategic Partner", description: "They don't just report numbers; they advise on growth strategy." },
            { title: "Cost-Effective Leadership", description: "Get CFO-level talent at 30-40% of a US-based salary." }
        ],
        testimonial: {
            quote: "Our offshore CFO became our strategic partner for our Series A. Couldn't have done it without them.",
            author: "Amanda Chen",
            role: "CEO",
            company: "TechFlow Inc"
        },
        faqs: [
            { question: "What experience level do Virtual CFOs have?", answer: "Our Virtual CFOs typically have 10+ years of experience, including prior roles as Controllers or Finance Directors." },
            { question: "Can they present to our board?", answer: "Yes, many of our Virtual CFOs regularly present financial updates to boards and investors via video conference." }
        ]
    },
];

export function getHireStaffBySlug(slug: string): HireStaffPosition | undefined {
    return hireStaffPositions.find((position) => position.slug === slug);
}

export function getAllHireStaffPositions(): HireStaffPosition[] {
    return hireStaffPositions;
}

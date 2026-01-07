export interface Service {
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

export const services: Service[] = [
  {
    id: "bookkeeping",
    title: "Bookkeeping & Accounting",
    slug: "bookkeeping-accounting",
    description: "Accurate and timely financial record-keeping to keep your business on track.",
    longDescription: "Our comprehensive bookkeeping and accounting services provide you with a clear, real-time view of your financial health, allowing you to focus on growth.",
    icon: "book",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
    intro: {
      title: "Streamline Your Finances with Expert Bookkeeping",
      content: "Managing your business's day-to-day finances can be overwhelming. Our team of expert bookkeepers ensures every transaction is recorded accurately and every account is reconciled flawlessly.",
      stats: [
        { label: "Accuracy", value: "99.9%" },
        { label: "Hours Saved/Mo", value: "20+" }
      ]
    },
    features: [
      { title: "Daily Transaction Categorization", description: "Stay on top of your spending with daily updates." },
      { title: "Bank & Credit Card Reconciliation", description: "Ensuring your books always match your bank statements." },
      { title: "Monthly Financial Statements", description: "P&L and Balance Sheets delivered to your inbox every month." },
      { title: "Accounts Payable & Receivable", description: "Streamlined management of money coming in and going out." }
    ],
    process: [
      { step: "01", title: "Assessment", description: "We review your current books and software setup." },
      { step: "02", title: "Integration", description: "We connect our systems to your bank and tools." },
      { step: "03", title: "Execution", description: "Our team begins daily bookkeeping and management." },
      { step: "04", title: "Reporting", description: "You receive detailed monthly reports and strategy sessions." }
    ],
    whyChooseUs: [
      { title: "Financial Clarity", description: "Get a real-time view of your cash flow and profitability." },
      { title: "Tax Readiness", description: "Avoid the year-end scramble with perfectly organized records." },
      { title: "Dedicated Support", description: "Your own dedicated bookkeeper who knows your business." }
    ],
    testimonial: {
      quote: "The clarity we now have over our finances is game-changing. We've saved hours every week.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "Innovate Retail"
    },
    faqs: [
      { question: "What software do you use?", answer: "We specialize in QuickBooks Online, Xero, and Sage." },
      { question: "How often are my books updated?", answer: "We typically update your transactions daily or weekly depending on your plan." }
    ]
  },
  {
    id: "tax",
    title: "Tax Preparation",
    slug: "tax-preparation",
    description: "Expert tax planning and preparation for businesses and individuals.",
    longDescription: "Navigate complex tax laws with confidence. Our proactive tax strategies help you minimize liability and maximize savings.",
    icon: "tax",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1920&h=1080&fit=crop",
    intro: {
      title: "Proactive Tax Planning for Maximum Savings",
      content: "Tax season shouldn't be stressful. We work year-round to ensure you're positioned to take advantage of every available deduction and credit.",
      stats: [
        { label: "Savings Found", value: "15%+" },
        { label: "Compliance Rate", value: "100%" }
      ]
    },
    features: [
      { title: "Corporate Income Tax", description: "Accurate filing for S-Corps, C-Corps, and Partnerships." },
      { title: "Strategic Tax Planning", description: "Forward-looking strategies to reduce your future tax burden." },
      { title: "Sales & Use Tax", description: "Managing compliance across multiple jurisdictions." },
      { title: "IRS Representation", description: "We stand by you in case of audits or inquiries." }
    ],
    process: [
      { step: "01", title: "Discovery", description: "We analyze your past returns and current financial data." },
      { step: "02", title: "Planning", description: "Developing a year-round strategy for tax minimization." },
      { step: "03", title: "Preparation", description: "Gathering documentation and drafting accurate returns." },
      { step: "04", title: "Filing", description: "Securely submitting returns and providing payment guidance." }
    ],
    whyChooseUs: [
      { title: "Expert Knowledge", description: "Our team stays current on all federal and state tax code changes." },
      { title: "Risk Mitigation", description: "We ensure full compliance to avoid costly penalties and audits." },
      { title: "Personalized Strategy", description: "Taxes aren't one-size-fits-all; your plan will be custom." }
    ],
    testimonial: {
      quote: "They found deductions we had been missing for years. Incredible attention to detail.",
      author: "Mark Davis",
      role: "Founder",
      company: "Davis Logistics"
    },
    faqs: [
      { question: "Do you handle state taxes?", answer: "Yes, we handle federal and all state tax jurisdictions." },
      { question: "Can you help with back taxes?", answer: "Absolutely, we have extensive experience resolving prior year issues." }
    ]
  },
  {
    id: "payroll",
    title: "Payroll and Compliance",
    slug: "payroll-compliance",
    description: "Simplified payroll processing and regulatory compliance management.",
    longDescription: "Ensure your employees are paid on time while staying compliant with ever-changing labor laws and tax regulations.",
    icon: "users",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
    intro: {
      title: "Worry-Free Payroll for Your Growing Team",
      content: "From automated payments to complex compliance filings, we handle the intricacies of payroll so you can focus on leading your people.",
      stats: [
        { label: "On-Time Rate", value: "100%" },
        { label: "Peace of Mind", value: "Locked" }
      ]
    },
    features: [
      { title: "Automated Pay Runs", description: "Direct deposits and paper checks delivered seamlessly." },
      { title: "Tax Filing & Payments", description: "We handle all federal, state, and local payroll taxes." },
      { title: "Benefits Administration", description: "Syncing health insurance and 401(k) contributions." },
      { title: "Compliance Monitoring", description: "Staying ahead of labor law updates and workers' comp." }
    ],
    process: [
      { step: "01", title: "Onboarding", description: "Setting up your team and syncing with your time-tracking tools." },
      { step: "02", title: "Verification", description: "Pre-processing checks to ensure accuracy for every run." },
      { step: "03", title: "Processing", description: "Executing payments and tax withholdings automatically." },
      { step: "04", title: "reporting", description: "Accessing detailed labor cost and tax reports anytime." }
    ],
    whyChooseUs: [
      { title: "Reliability", description: "Never miss a pay date or a tax deadline again." },
      { title: "Expert Support", description: "Real humans available to help with complex payroll questions." },
      { title: "Seamless Integration", description: "Flows directly into your bookkeeping for zero friction." }
    ],
    testimonial: {
      quote: "Moving our payroll here was a breeze. No more manual entry errors.",
      author: "Linda Chen",
      role: "HR Director",
      company: "Global Tech"
    },
    faqs: [
      { question: "Do you handle 1099 contractors?", answer: "Yes, we manage both W-2 employees and 1099 contractors." },
      { question: "Can you help with multi-state payroll?", answer: "We specialize in the complexities of multi-state compliance." }
    ]
  },
  {
    id: "audit",
    title: "Audit & Assurance Support",
    slug: "audit-assurance",
    description: "Robust audit preparation and internal control examination.",
    longDescription: "Build trust with stakeholders through rigorous financial examination and proactive audit readiness preparation.",
    icon: "shield",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&h=1080&fit=crop",
    intro: {
      title: "Confidence Through Transparency",
      content: "Whether you're preparing for an external audit or want to strengthen internal controls, our assurance experts provide the rigor you need.",
      stats: [
        { label: "Audit Readiness", value: "Verified" },
        { label: "Internal Controls", value: "Optimized" }
      ]
    },
    features: [
      { title: "Audit Readiness Reviews", description: "Identifying gaps before the external auditors arrive." },
      { title: "Internal Control Testing", description: "Strengthening your systems to prevent fraud and errors." },
      { title: "Compliance Audits", description: "Ensuring you meet specific industry and regulatory standards." },
      { title: "Financial Examination", description: "Deep-dive analysis of accounts for stakeholder trust." }
    ],
    process: [
      { step: "01", title: "Scoping", description: "Defining the areas of examination and key focus points." },
      { step: "02", title: "Testing", description: "Gathering evidence and testing controls and transactions." },
      { step: "03", title: "Analysis", description: "Evaluating findings and identifying areas for improvement." },
      { step: "04", title: "Reporting", description: "Providing a detailed report of findings and recommendations." }
    ],
    whyChooseUs: [
      { title: "Objective Insights", description: "A fresh, expert eye on your financial processes." },
      { title: "Reduced Risk", description: "Proactively identify and mitigate financial and operational risks." },
      { title: "Stakeholder Trust", description: "Independent assurance that builds credibility." }
    ],
    testimonial: {
      quote: "Their prep work made our annual audit the smoothest one we've ever had.",
      author: "Robert Wilson",
      role: "Treasurer",
      company: "Non-Profit Alliance"
    },
    faqs: [
      { question: "Do you provide certified audits?", answer: "We provide support and prep; for final certifications, we coordinate with independent partners or work with yours." },
      { question: "How long does a readiness review take?", answer: "Typically 2-4 weeks depending on the complexity of your organization." }
    ]
  },
  {
    id: "cfo",
    title: "Virtual CFO & FP&A",
    slug: "virtual-cfo-fpa",
    description: "Strategic financial leadership and forward-looking analysis.",
    longDescription: "Get executive-level financial strategy and planning without the cost of a full-time CFO. Drive growth with data-backed insights.",
    icon: "trending-up",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop",
    intro: {
      title: "Strategic Partnerships for Scalable Growth",
      content: "Beyond the basics of accounting, our Virtual CFO services provide the high-level strategy you need to scale your business profitably.",
      stats: [
        { label: "Profit Growth", value: "25% Avg" },
        { label: "Funding Raised", value: "$50M+" }
      ]
    },
    features: [
      { title: "Financial Forecasting", description: "Building robust models for future revenue and expenses." },
      { title: "Budgeting & Analysis", description: "Tracking performance against goals with deep variance analysis." },
      { title: "Cash Flow Management", description: "Optimizing your working capital for maximum flexibility." },
      { title: "Board & Investor Reporting", description: "Creating professional decks and presenting to stakeholders." }
    ],
    process: [
      { step: "01", title: "Strategic Audit", description: "Deep dive into your business model and growth goals." },
      { step: "02", title: "Model Building", description: "Creating your custom financial and operational forecast." },
      { step: "03", title: "Implementation", description: "Integrating insights into your weekly and monthly workflows." },
      { step: "04", title: "Growth Advisory", description: "Ongoing strategic guidance for key business decisions." }
    ],
    whyChooseUs: [
      { title: "Future-Focused", description: "We don't just look back at what happened; we look ahead at what's possible." },
      { title: "Scalable Leadership", description: "Executive talent that grows at the pace of your business." },
      { title: "Data-Driven Decisions", description: "Turn your financial data into a powerful weapon for growth." }
    ],
    testimonial: {
      quote: "Our Virtual CFO has been instrumental in navigating our Series B funding and scale.",
      author: "James Miller",
      role: "Founder",
      company: "NextGen SaaS"
    },
    faqs: [
      { question: "How often do we meet?", answer: "Typically we have weekly strategy syncs and monthly deep-dive reviews." },
      { question: "Can you help with M&A?", answer: "Yes, we provide extensive support for mergers, acquisitions, and exit planning." }
    ]
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServices(): Service[] {
  return services;
}

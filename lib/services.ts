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
    description: "Accurate and timely financial record-keeping for your business.",
    longDescription: "Bridge the capacity gap and reclaim your time with premium white-label support that acts as a seamless extension of your team.",
    icon: "book",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
    intro: {
      title: "Scalable Bookkeeping and Specialized Support for Growing US Firms",
      content: "At the heart of every thriving CPA practice is a foundation of reliable, bulletproof financial data. We don't just process transactions; we provide a high-performance back-office engine that ensures your workpapers arrive on your desk audit-ready and fully tax-compliant. By acting as a seamless extension of your team, we handle the technical heavy lifting, allowing your senior staff to move toward high-value client advisory.",
      stats: [
        { label: "Cost Savings", value: "40-60%" },
        { label: "Turnaround", value: "24-48h" },
        { label: "Accuracy", value: "99.9%" }
      ]
    },
    features: [
      {
        title: "Bookkeeping & Ledger Maintenance",
        description: "Transitioning from messy data to a clean, audit-ready General Ledger. Chart of Accounts optimization mapped to industry standards, daily transaction processing with real-time bank and credit card feeds, and cloud ecosystem management with third-party app integration."
      },
      {
        title: "Accounts Payable: Procure-to-Pay (P2P)",
        description: "Fraud prevention, vendor happiness, and cash flow timing. Vendor onboarding with W-9 compliance, 3-way matching workflow verifying PO-Receiving-Invoice alignment, expense management with policy compliance auditing, and early payment discount identification."
      },
      {
        title: "Accounts Receivable: Order-to-Cash (O2C)",
        description: "Accelerating cash inflow and reducing bad debt. Revenue recognition and invoicing for subscription models, automated collection services with gentle dunning emails, cash application with merchant fee reconciliation, and customer credit management."
      },
      {
        title: "Reconciliations & Month-End Excellence",
        description: "Ensuring the Balance Sheet is 100% accurate every 30 days. Advanced reconciliations including merchant account sync, loan and lease amortization splits, inter-company due to/from balancing, month-end adjustments for accruals and prepaid expenses, and comprehensive management reporting packages."
      },
      {
        title: "Catch-up & Clean-up Services",
        description: "Bringing historical data up to date for taxes or funding. Backlog processing from bank statements, balance sheet forensic review of uncategorized accounts, and audit-ready packaging with permanent file preparation for high-value contracts and asset purchases."
      }
    ],
    process: [
      {
        step: "01",
        title: "Assessment & Integration",
        description: "We review your current software setup, clean up your Chart of Accounts, and connect to your QuickBooks Online, Xero, or Sage platform with zero-friction technology sync."
      },
      {
        step: "02",
        title: "Daily Transaction Processing",
        description: "Our team conducts proactive daily management with real-time coding of bank feeds, micro-task splitting, and owner-paid expense recording through accountable plans."
      },
      {
        step: "03",
        title: "Advanced Reconciliation",
        description: "We perform monthly reconciliations including merchant accounts, loan amortization, and inter-company balances, with month-end adjustments for accruals and depreciation."
      },
      {
        step: "04",
        title: "Reporting & Advisory",
        description: "Receive detailed management reporting packages with P&L, Balance Sheet, and Cash Flow statements, plus trend analysis to spot unusual expense spikes."
      }
    ],
    whyChooseUs: [
      {
        title: "Significant Operational Cost Savings",
        description: "Reduce your firm's overhead by 40% to 60%. Our transparent, flat-fee pricing eliminates the high costs of local recruitment, payroll taxes, and employee benefits."
      },
      {
        title: "Instant, On-Demand Scalability",
        description: "Eliminate the hiring bottleneck. Scale up or down instantly during tax season or when onboarding large new clients based on your real-time workload."
      },
      {
        title: "Specialized Expertise in US GAAP",
        description: "Access a global pool of accounting professionals rigorously trained in US GAAP, AICPA, and PCAOB standards, staying current on evolving IRS regulations."
      },
      {
        title: "Guaranteed 24/48-Hour Processing",
        description: "Accelerate your firm's output with rapid turnaround times. Leveraging global time zones, we process client data overnight with draft workpapers ready within 24-48 hours."
      },
      {
        title: "Multi-Tier Quality Assurance",
        description: "Every deliverable undergoes a strict Four-Eye review process—prepared by a specialist and verified by a senior manager, ensuring 99% accuracy before reaching your desk."
      }
    ],
    testimonial: {
      quote: "The clarity we now have over our finances is game-changing. We've saved hours every week and our clients are getting audit-ready books.",
      author: "Sarah Johnson",
      role: "Managing Partner",
      company: "Johnson & Associates CPA"
    },
    faqs: [
      {
        question: "What software do you use?",
        answer: "We specialize in QuickBooks Online, Xero, Karbon, and Canopy. We plug directly into your preferred ecosystem to ensure data integrity across your entire stack."
      },
      {
        question: "How often are my books updated?",
        answer: "We offer daily bank and credit card updates to keep your clients' books current, allowing you to provide accurate financial insights at a moment's notice."
      },
      {
        question: "Do you provide niche industry support?",
        answer: "Yes! We provide dedicated support for E-commerce (multi-state nexus and COGS), Real Estate (property-level accounting and K-1 support), and Professional Services (trust accounting and project tracking)."
      }
    ]
  },
  {
    id: "tax",
    title: "Tax Preparation",
    slug: "tax-preparation",
    description: "Expert tax planning and preparation to maximize your savings.",
    longDescription: "Scale your firm's capacity and eliminate tax-season burnout with precision white-label support.",
    icon: "tax",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1554224311-beee228c3d84?w=1920&h=1080&fit=crop",
    intro: {
      title: "Comprehensive Tax Filing and Compliance Services",
      content: "We provide end-to-end support for the full spectrum of US tax returns. Using a multi-level review process, we ensure your tax filing and compliance services meet the highest standards of accuracy. Our specialized tax preparation services act as a high-performance back-office engine, allowing your partners to focus on high-value client advisory while we handle the heavy lifting of compliance.",
      stats: [
        { label: "Accuracy Rate", value: "99%" },
        { label: "Cost Reduction", value: "40-60%" },
        { label: "Delivery", value: "Overnight" }
      ]
    },
    features: [
      {
        title: "Individual Tax Preparation (Form 1040)",
        description: "Accuracy, optimization of credits, and seamless data flow. Workpaper preparation with bookmarked, hyperlinked PDFs. Schedule C for self-employed with home office calculations, Schedule D capital gains reconciliation, Schedule E rental property tracking with depreciation, and optimization of itemized deductions vs standard deduction with all applicable credits."
      },
      {
        title: "Business Tax Compliance (1065, 1120, 1120S)",
        description: "Precision in book-to-tax adjustments and shareholder reporting. Form 1120/1120S for Federal and State Corporate/S-Corp returns, Form 1065 for partnerships with complex capital account maintenance. M-1 & M-3 reconciliations bridging financial and taxable income, fixed asset MACRS vs Section 179/Bonus optimization, shareholder basis tracking, and bulk 1099 preparation with electronic filing."
      },
      {
        title: "International Tax Compliance (Inbound & Outbound)",
        description: "Specialized expertise in high-penalty IRS disclosure forms. Inbound Form 5472 & 1120 for foreign-owned US entities, FIRPTA compliance for foreign real estate sellers. Outbound Form 5471 for CFCs, Form 8865 for foreign partnerships, GILTI & Subpart F calculations. Individual FBAR (FinCEN 114), Form 8938 (FATCA), and Form 2555 for expats."
      },
      {
        title: "Indirect Tax (Sales & Use Tax)",
        description: "Multi-state nexus protection for e-commerce and retail. Economic and physical nexus studies, state sales tax permit registration, monthly/quarterly/annual sales tax return preparation via Avalara or TaxJar, and audit support with documentation gathering for state inquiries."
      },
      {
        title: "Specialized Statutory & Trust Filings",
        description: "Niche tax areas for high-net-worth and non-profit clients. Form 990/990-PF for exempt organizations and private foundations, Form 1041 fiduciary income tax returns with beneficiary K-1 issuance, and Form 706/709 estate and gift tax preparation."
      }
    ],
    process: [
      {
        step: "01",
        title: "Document Collection & Organization",
        description: "We organize digital shoeboxes into bookmarked, hyperlinked PDF workpapers, cross-referencing all source documents with the draft tax return."
      },
      {
        step: "02",
        title: "Return Preparation & Review",
        description: "Our specialists prepare returns using UltraTax, Lacerte, CCH, or Drake, with every return undergoing a Four-Eye review process by a senior tax manager."
      },
      {
        step: "03",
        title: "Book-to-Tax Adjustments",
        description: "We handle M-1 & M-3 reconciliations, fixed asset optimization, and shareholder basis tracking to ensure accurate taxable income calculations."
      },
      {
        step: "04",
        title: "Filing & Client Delivery",
        description: "Reviewer-ready files delivered overnight via Follow the Sun model, requiring minimal internal oversight before client submission."
      }
    ],
    whyChooseUs: [
      {
        title: "99% Accuracy via Four-Eye Review",
        description: "Every return is prepared by a specialist and verified by a senior tax manager. You receive reviewer-ready files that require minimal internal oversight."
      },
      {
        title: "Overnight Follow the Sun Delivery",
        description: "Leverage global time zones to your advantage. Send us data in the evening, and find completed drafts in your inbox by the next morning."
      },
      {
        title: "40–60% Operational Cost Reduction",
        description: "Reclaim your budget by eliminating the overhead of local salaries and benefits. Reinvest capital into firm growth and high-level advisory."
      },
      {
        title: "Instant, On-Demand Scalability",
        description: "Stop the grueling hunt for seasonal staff. We provide immediate bandwidth to handle tax-season surges or sudden new client acquisitions without hiring lag."
      },
      {
        title: "Seamless Tech & GAAP Integration",
        description: "Our team works directly in your existing stack—UltraTax, Lacerte, CCH, or Drake. We follow US GAAP and current tax laws to ensure your brand's quality remains uncompromised."
      }
    ],
    testimonial: {
      quote: "Their tax team is exceptional. We've doubled our capacity during tax season without adding any local hires. The accuracy and overnight turnaround is incredible.",
      author: "Michael Chen",
      role: "Senior Partner",
      company: "Chen Tax & Advisory"
    },
    faqs: [
      {
        question: "What tax software do you support?",
        answer: "We work directly in your existing stack including UltraTax, Lacerte, CCH ProSystem fx, and Drake. We follow US GAAP and current tax laws to ensure quality."
      },
      {
        question: "Do you handle international tax compliance?",
        answer: "Yes! We specialize in high-penalty IRS disclosure forms including Form 5472, 5471, 8865, FBAR (FinCEN 114), and Form 8938 (FATCA) for both inbound and outbound scenarios."
      },
      {
        question: "What is your turnaround time?",
        answer: "We offer overnight Follow the Sun delivery. Send us data in the evening, and find completed draft returns in your inbox by the next morning, ready for your review."
      }
    ]
  },
  {
    id: "payroll",
    title: "Payroll and Compliance",
    slug: "payroll-compliance",
    description: "Seamless payroll processing and regulatory compliance.",
    longDescription: "Expand your firm's service lines and eliminate administrative burnout with expert white-label support.",
    icon: "users",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop",
    intro: {
      title: "Comprehensive Payroll Processing Services",
      content: "We handle the daily heavy lifting of payroll management, ensuring your clients' employees are paid accurately and on time, every time. Managing payroll has evolved from a simple administrative task to a high-stakes compliance challenge. For US-based CPA firms, the complexities of multi-state tax withholding and shifting labor laws make it difficult to maintain profitable margins. Our outsourced payroll solutions act as a seamless extension of your firm, allowing you to offer a Virtual Payroll Office without the overhead.",
      stats: [
        { label: "States Supported", value: "All 50" },
        { label: "Platforms", value: "10+" },
        { label: "Compliance", value: "SOC 1/2" }
      ]
    },
    features: [
      {
        title: "Full-Cycle Payroll Processing",
        description: "Timely and accurate pay delivery for diverse workforces. Processing payroll for all frequencies (weekly, bi-weekly, semi-monthly, monthly), handling multiple pay types including salary, hourly, commissions, and bonuses. Managing final paycheck requirements meeting state-specific immediate payment laws, syncing time-tracking software, and coordinating direct deposit (ACH) files and physical checks."
      },
      {
        title: "Multi-State Payroll Tax Compliance",
        description: "Navigating the complexity of 50 different state tax jurisdictions. Calculating and initiating payments for Form 941 (Quarterly Federal Tax) and Form 940 (Annual FUTA), reconciling total tax deposits against payroll reports, managing State Unemployment Insurance (SUI) rates and local taxes, and registering for new state tax IDs when hiring remote employees in new states."
      },
      {
        title: "Benefits & Deduction Administration",
        description: "Precision in Gross-to-Net calculations. Tracking 401(k), 403(b), and Simple IRA deferrals with employer matching, uploading retirement contribution files to providers like Vanguard and Fidelity, deducting health/dental/vision and HSA/FSA premiums, processing statutory garnishments for child support and tax levies, and setting up pay-as-you-go workers' comp integrations."
      },
      {
        title: "Year-End Reporting & Reconciliation",
        description: "Ensuring a stress-free January for the client. Reconciling annual payroll totals before generating W-2s and 1099-NECs, handling electronic filing of W-3 and 1096 summary forms with SSA/IRS, performing year-end reasonableness tests to catch errors before the IRS, and ensuring taxable fringe benefits are properly added to W-2s."
      },
      {
        title: "HR Administrative Support",
        description: "The people side of the payroll process. Setting up new employee profiles in HRIS, collecting and verifying Form I-9 and W-4 withholding certificates, training employees on accessing pay stubs and year-end tax forms via employee self-service portals, and updating address changes, bank details, and withholding status upon request."
      }
    ],
    process: [
      {
        step: "01",
        title: "System Integration",
        description: "We connect with your payroll platform (Gusto, ADP, Paychex, Rippling) and sync time-tracking software like TSheets or ClockShark with automated G/L entries to QuickBooks Online, Xero, or Sage Intacct."
      },
      {
        step: "02",
        title: "Payroll Execution",
        description: "Our team processes payroll for all frequencies, auditing timesheets, calculating federal and multi-state taxes, managing benefits deductions, and coordinating direct deposits and check printing."
      },
      {
        step: "03",
        title: "Tax Filing & Compliance",
        description: "We file Form 941 quarterly and Form 940 annually, manage state unemployment insurance rates, submit new hire reporting to state agencies, and respond to tax rate change notices."
      },
      {
        step: "04",
        title: "Year-End Processing",
        description: "We reconcile annual totals, generate and electronically file W-2s and W-3s with the SSA, issue 1099-NECs to contractors with Form 1096, and perform compliance audits to catch errors proactively."
      }
    ],
    whyChooseUs: [
      {
        title: "SOC 1 & SOC 2 Compliant Security",
        description: "Our outsourced payroll solutions operate within SOC 1 & SOC 2 compliant environments, utilizing 256-bit encryption and multi-factor authentication to ensure sensitive employee data is never compromised."
      },
      {
        title: "Tech-Agnostic Expertise",
        description: "We don't ask you to change your workflow. Our team is proficient in Gusto, Rippling, ADP Run/Workforce Now, Paychex, with automatic syncing to QuickBooks Online, Xero, and Sage Intacct."
      },
      {
        title: "Multi-State Tax Mastery",
        description: "We navigate all 50 state tax jurisdictions, managing SUI rates, local city/county taxes, and registering for new state tax IDs when you hire remote employees in new states."
      },
      {
        title: "Benefits Administration Excellence",
        description: "We handle 401(k) deferrals, health insurance premiums, HSA/FSA deductions, statutory garnishments, and workers' comp integrations with precision Gross-to-Net calculations."
      },
      {
        title: "Stress-Free Year-End",
        description: "We reconcile annual totals, generate W-2s and 1099-NECs, electronically file with SSA/IRS, and perform reasonableness tests to catch errors before the IRS does."
      }
    ],
    testimonial: {
      quote: "Outsourcing payroll to them was the best decision we made. Our clients love the accuracy and we've eliminated the year-end stress. They handle everything from multi-state taxes to W-2 generation flawlessly.",
      author: "Jennifer Martinez",
      role: "Operations Director",
      company: "Martinez Accounting Group"
    },
    faqs: [
      {
        question: "What payroll platforms do you support?",
        answer: "We're proficient in all major US payroll platforms including Gusto, Rippling, ADP Run/Workforce Now, Paychex, with automatic syncing to QuickBooks Online, Xero, and Sage Intacct."
      },
      {
        question: "How do you handle multi-state payroll?",
        answer: "We navigate all 50 state tax jurisdictions, managing State Unemployment Insurance rates, local city/county taxes, and registering for new state tax IDs when you hire remote employees in new states."
      },
      {
        question: "Is my employee data secure?",
        answer: "Absolutely. Our solutions operate within SOC 1 & SOC 2 compliant environments, utilizing 256-bit encryption and multi-factor authentication (MFA) to ensure sensitive employee data is never compromised."
      }
    ]
  },
  {
    id: "audit",
    title: "Audit & Assurance",
    slug: "audit-assurance",
    description: "Robust audit readiness and internal control examinations.",
    longDescription: "Maximize your audit capacity and reduce busy season burnout through strategic outsourcing.",
    icon: "shield",
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop",
    intro: {
      title: "Comprehensive Financial Audit Assistance Services",
      content: "We provide end-to-end support throughout the audit lifecycle delivering reviewer-ready files that adhere to GAAS and PCAOB standards. The demand for high-quality audit and assurance services has reached a record high, yet the talent pool for auditors remains at a critical low. Our specialized audit support services act as a technical extension of your team, handling the heavy lifting of the audit file so your senior auditors can focus on high-risk areas and client relationships.",
      stats: [
        { label: "Cost Reduction", value: "40-50%" },
        { label: "GAAS Compliant", value: "100%" },
        { label: "Review Ready", value: "First Time" }
      ]
    },
    features: [
      {
        title: "Audit Planning & Risk Assessment",
        description: "Strategic groundwork to ensure a focused and efficient audit. Rolling forward previous year's electronic audit files in CaseWare, AdvanceFlow, or CCH Axcess. Drafting engagement letters and independence confirmations. Calculating overall materiality and performance materiality, preparing planning analytics with flux analysis to identify significant trends, documenting understanding of the entity and fraud risk factors, and creating detailed PBC checklists."
      },
      {
        title: "Substantive Testing & Execution",
        description: "The heavy lifting of verifying account balances. Using IDEA or ACL for statistical and non-statistical sampling, vouching samples from General Ledger to source documents, tracing source documents into the ledger for completeness. Account-specific procedures for cash reconciliations, A/R confirmation process via Confirmation.com, inventory price testing, and search for unrecorded liabilities reviewing post-balance sheet payments."
      },
      {
        title: "Internal Control & Compliance Testing",
        description: "Testing the organizational plumbing. Documenting process walkthroughs (Sales, Payroll, Purchasing) through flowcharts and narratives, identifying key controls within transaction cycles, testing operating effectiveness of internal controls, reporting control deficiencies (significant deficiencies vs material weaknesses), and verifying adherence to industry-specific regulations like HIPAA or HUD."
      },
      {
        title: "Financial Statement Preparation & Finalization",
        description: "The last mile of the audit engagement. Drafting full disclosure financial statements (P&L, Balance Sheet, Cash Flow, Footnotes) per US GAAP, completing disclosure checklists to ensure all mandatory footnotes, performing mathematical accuracy checks on entire financial reports, indexing and cross-referencing every number back to supporting schedules, and drafting management letter points and audit summary memos."
      },
      {
        title: "Specialized Audit Support (Niche Areas)",
        description: "High-margin expertise for specific US requirements. Employee Benefit Plan audits testing participant eligibility and distributions for 401(k) or 403(b) plans. Governmental and Single Audits supporting Yellow Book audits and Uniform Guidance compliance for non-profits receiving federal funds. Agreed-Upon Procedures performing specific testing for royalty audits or loan covenant compliance."
      }
    ],
    process: [
      {
        step: "01",
        title: "Engagement Setup & Planning",
        description: "We roll forward prior year audit files, calculate materiality benchmarks, prepare planning analytics with flux analysis, and create comprehensive PBC checklists to track document status."
      },
      {
        step: "02",
        title: "Substantive Testing",
        description: "Our team performs vouching and tracing procedures, manages confirmation processes, conducts inventory price testing, reviews bank reconciliations, and searches for unrecorded liabilities."
      },
      {
        step: "03",
        title: "Control Testing & Documentation",
        description: "We document process walkthroughs, identify key controls, test operating effectiveness, and report control deficiencies following GAAS standards."
      },
      {
        step: "04",
        title: "Finalization & Delivery",
        description: "We draft full disclosure financial statements per US GAAP, complete disclosure checklists, perform tie-out procedures, index and cross-reference all workpapers, and prepare management letters."
      }
    ],
    whyChooseUs: [
      {
        title: "40–50% Reduction in Labor Costs",
        description: "Eliminate the financial strain of high base salaries and peak-season overtime. Our model maximizes the profitability of every engagement by lowering cost-per-audit."
      },
      {
        title: "Reclaimed Staff Efficiency",
        description: "Stop wasting senior talent on vouching, tracing, and confirmation tracking. Offloading junior-level tasks allows your onsite team to focus on high-risk areas and professional judgment."
      },
      {
        title: "Infinite Seasonal Bandwidth",
        description: "Bypass the hiring bottleneck. We provide immediate, unlimited capacity, giving you freedom to accept complex new engagements during busy season without burning out your internal team."
      },
      {
        title: "Reviewer-Ready Workpapers",
        description: "Mitigate fatigue-based errors with our multi-tier review system. Every file is prepared by a specialist and verified by a senior manager to meet strict GAAS and PCAOB standards."
      },
      {
        title: "Frictionless, Secure Workflow",
        description: "We work directly in your existing audit software—whether it's CaseWare, CCH Engagement, or AdvanceFlow—to ensure a secure, digital environment with real-time project visibility."
      }
    ],
    testimonial: {
      quote: "Their audit team has been a game-changer for our firm. We've been able to take on larger engagements without the stress of finding qualified auditors. The workpapers are reviewer-ready and meet our strict quality standards.",
      author: "David Thompson",
      role: "Audit Partner",
      company: "Thompson & Partners LLP"
    },
    faqs: [
      {
        question: "What audit software do you support?",
        answer: "We work directly in your existing audit software including CaseWare, CCH Engagement (Axcess Audit), AdvanceFlow, and other major platforms to ensure seamless integration."
      },
      {
        question: "Are you GAAS and PCAOB compliant?",
        answer: "Yes, all our audit work adheres to strict GAAS and PCAOB standards. Every file undergoes multi-tier review by specialists and senior managers before delivery."
      },
      {
        question: "Can you handle specialized audits?",
        answer: "Absolutely. We support Employee Benefit Plan (EBP) audits, Governmental and Single Audits (Yellow Book), and Agreed-Upon Procedures (AUP) engagements for various industries."
      }
    ]
  },
  {
    id: "cfo",
    title: "Virtual CFO & FP&A",
    slug: "virtual-cfo-fpa",
    description: "Strategic financial leadership to drive your business growth.",
    longDescription: "Executive-level financial expertise that transforms your data into actionable strategy.",
    icon: "chart",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
    intro: {
      title: "Strategic Financial Leadership for Business Growth",
      content: "Move beyond compliance accounting and step into strategic financial leadership. Our Virtual CFO services provide executive-level financial expertise that transforms your data into actionable insights and strategic decisions. We act as your right hand to the CEO, providing the financial analysis and strategic guidance needed to drive sustainable growth.",
      stats: [
        { label: "ROI Improvement", value: "30%+" },
        { label: "Strategic Insights", value: "Real-Time" },
        { label: "Cost vs Full CFO", value: "60% Less" }
      ]
    },
    features: [
      {
        title: "Financial Planning & Analysis (FP&A)",
        description: "Predicting the future through data-driven modeling. Developing annual bottom-up budgets aligned with departmental goals, creating 12-month rolling forecasts that adapt to market conditions, performing variance analysis to explain budget vs actual performance, building dynamic scenario and what-if models to test strategic moves, creating 13-week cash flow projections to manage liquidity, and analyzing cash conversion cycles to optimize collections."
      },
      {
        title: "Strategic Advisory & Decision Support",
        description: "Acting as the right hand to the CEO/Owner. Product/service line profitability analysis identifying high-margin vs money-losing offerings, customer profitability calculating cost to serve vs revenue generated, break-even and pricing strategy analysis, competitor pricing research for optimal positioning, preparing monthly executive summary decks for board meetings, and translating complex financial data into actionable narratives for non-financial founders."
      },
      {
        title: "Business Intelligence (BI) & KPI Dashboards",
        description: "Real-time visibility into business health. Building live dashboards using Power BI, Tableau, or Fathom pulling data from ERP systems, tracking non-financial KPIs like website traffic conversion and customer churn, industry-specific metrics for SaaS (MRR, LTV, CAC) and E-commerce (ROAS, cart abandonment), and benchmarking financial ratios against industry averages."
      },
      {
        title: "Capital Structure & M&A Support",
        description: "Helping the business find and manage money. Preparing pro-forma financial statements for bank loans or venture capital, managing financial data rooms for investor due diligence, buy-side due diligence reviewing target company books for red flags, sell-side preparation cleaning up financials to maximize valuation, and advising on capital allocation decisions between R&D reinvestment, debt payoff, or dividend distribution."
      },
      {
        title: "Fractional Controller & Compliance Oversight",
        description: "Strengthening the internal financial backbone. Implementing check and balance procedures to prevent fraud and embezzlement, developing month-end close checklists to close books in under 5 days, leading relationships with external auditors and tax CPAs for smooth year-end, and ensuring compliance with ASC 606 (Revenue Recognition) and other US GAAP standards."
      }
    ],
    process: [
      {
        step: "01",
        title: "Financial Assessment",
        description: "We analyze your current financial position, review existing reports and KPIs, identify gaps in financial visibility, and establish strategic goals aligned with your business objectives."
      },
      {
        step: "02",
        title: "Dashboard & Model Development",
        description: "We build custom KPI dashboards using Power BI or Tableau, develop dynamic financial models for budgeting and forecasting, and create scenario planning tools for strategic decision-making."
      },
      {
        step: "03",
        title: "Strategic Planning & Analysis",
        description: "We provide ongoing FP&A support with variance analysis, profitability studies by product/customer, break-even and pricing strategy guidance, and cash flow forecasting with optimization recommendations."
      },
      {
        step: "04",
        title: "Executive Advisory & Reporting",
        description: "We prepare board-ready presentations with executive summaries, provide strategic advisory as the CEO's right hand for financial decisions, and support fundraising or M&A activities with pro-forma statements and due diligence."
      }
    ],
    whyChooseUs: [
      {
        title: "Executive-Level Expertise at Fractional Cost",
        description: "Get CFO-level strategic guidance at 60% less cost than a full-time executive. Perfect for growing businesses that need strategic financial leadership without the overhead."
      },
      {
        title: "Data-Driven Decision Making",
        description: "Transform raw data into actionable insights with custom KPI dashboards, scenario planning models, and real-time business intelligence that drives better decisions."
      },
      {
        title: "Strategic Growth Partner",
        description: "We go beyond numbers to become your strategic partner, providing profitability analysis, pricing strategy, fundraising support, and M&A advisory to accelerate growth."
      },
      {
        title: "Industry-Specific Metrics Expertise",
        description: "We track the metrics that matter for your industry—MRR and CAC for SaaS, ROAS for E-commerce, or custom KPIs for your specific business model."
      },
      {
        title: "Board-Ready Reporting",
        description: "Receive executive summary decks and board presentations that translate complex financial data into clear, actionable narratives that resonate with investors and stakeholders."
      }
    ],
    testimonial: {
      quote: "Having a Virtual CFO has been transformational for our business. The strategic insights and financial modeling have helped us make smarter decisions and secure our Series A funding. Best investment we've made.",
      author: "Amanda Foster",
      role: "CEO & Founder",
      company: "TechGrowth Solutions"
    },
    faqs: [
      {
        question: "How is a Virtual CFO different from a bookkeeper?",
        answer: "A bookkeeper records historical transactions. A Virtual CFO provides forward-looking strategic guidance, financial modeling, scenario planning, fundraising support, and executive-level decision-making assistance."
      },
      {
        question: "What tools do you use for dashboards and reporting?",
        answer: "We build custom dashboards using Power BI, Tableau, or Fathom, pulling data from your ERP system to provide real-time visibility into KPIs and business performance."
      },
      {
        question: "Can you help with fundraising?",
        answer: "Absolutely. We prepare pro-forma financial statements, manage data rooms for investor due diligence, build financial models, and provide strategic guidance throughout the fundraising process."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServices(): Service[] {
  return services;
}

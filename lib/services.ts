export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  features: string[];
  benefits: string[];
  process?: {
    step: string;
    title: string;
    description: string;
  }[];
}

export const services: Service[] = [
  {
    id: "business-consulting",
    title: "Business Consulting",
    slug: "business-consulting",
    description:
      "Expert guidance to help your business grow, optimize operations, and achieve strategic goals.",
    longDescription:
      "Our business consulting services provide comprehensive support to help your organization reach its full potential. We work closely with you to identify opportunities, overcome challenges, and implement strategies that drive sustainable growth.",
    icon: "chart",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&h=1080&fit=crop",
    features: [
      "Strategic planning and development",
      "Business model optimization",
      "Market analysis and positioning",
      "Growth strategy development",
      "Performance improvement",
    ],
    benefits: [
      "Clear roadmap for business growth",
      "Improved operational efficiency",
      "Better market positioning",
      "Increased profitability",
      "Competitive advantage",
    ],
  },
  {
    id: "strategic-planning",
    title: "Strategic Planning",
    slug: "strategic-planning",
    description:
      "Develop comprehensive strategies that align with your business goals and market opportunities.",
    longDescription:
      "Strategic planning is the foundation of business success. We help you create actionable plans that align with your vision, leverage market opportunities, and position your business for long-term growth.",
    icon: "target",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop",
    features: [
      "Vision and mission development",
      "SWOT analysis",
      "Goal setting and KPIs",
      "Action plan creation",
      "Risk assessment and mitigation",
    ],
    benefits: [
      "Clear direction and focus",
      "Better resource allocation",
      "Improved decision-making",
      "Measurable outcomes",
      "Long-term sustainability",
    ],
  },
  {
    id: "operations",
    title: "Operations Optimization",
    slug: "operations",
    description:
      "Streamline your business processes to improve efficiency and reduce costs.",
    longDescription:
      "Operations optimization helps you work smarter, not harder. We analyze your current processes, identify bottlenecks, and implement improvements that increase efficiency while reducing costs.",
    icon: "lightning",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop",
    features: [
      "Process analysis and mapping",
      "Workflow optimization",
      "Cost reduction strategies",
      "Quality improvement",
      "Automation opportunities",
    ],
    benefits: [
      "Reduced operational costs",
      "Faster turnaround times",
      "Improved quality",
      "Higher productivity",
      "Better customer satisfaction",
    ],
  },
  {
    id: "financial",
    title: "Financial Advisory",
    slug: "financial",
    description:
      "Get expert financial guidance to make informed decisions about investments, budgeting, and resource allocation.",
    longDescription:
      "Financial advisory services help you make informed decisions about your business finances. From budgeting and forecasting to investment analysis, we provide the expertise you need to optimize your financial performance.",
    icon: "dollar",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
    features: [
      "Financial planning and analysis",
      "Budget development",
      "Cash flow management",
      "Investment analysis",
      "Financial reporting",
    ],
    benefits: [
      "Better financial control",
      "Improved cash flow",
      "Informed decision-making",
      "Risk mitigation",
      "Financial stability",
    ],
  },
  {
    id: "technology",
    title: "Technology Consulting",
    slug: "technology",
    description:
      "Leverage technology to transform your business. We help you select, implement, and optimize technology solutions.",
    longDescription:
      "Technology consulting helps you leverage the right tools and systems to transform your business. We help you select, implement, and optimize technology solutions that drive growth and innovation.",
    icon: "computer",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop",
    features: [
      "Technology assessment",
      "System selection",
      "Implementation planning",
      "Digital transformation",
      "IT optimization",
    ],
    benefits: [
      "Improved efficiency",
      "Better data insights",
      "Enhanced security",
      "Scalable solutions",
      "Competitive advantage",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServices(): Service[] {
  return services;
}


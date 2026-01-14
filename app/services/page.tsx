import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { generateMetadata as genMeta } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { ScrollButton } from "@/components/ui/ScrollButton";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQ } from "@/components/ui/FAQ";
import { Testimonial } from "@/components/ui/Testimonial";
import { getAllServices } from "@/lib/services";
import Link from "next/link";

export const metadata: Metadata = genMeta({
  title: "Professional Services Overview",
  description:
    "Discover our full suite of financial, tax, and strategic business services designed to help you scale efficiently.",
});

export default function ServicesHubPage() {
  const services = getAllServices();

  const commonFAQ = [
    {
      question: "How do I know which service is right for my business?",
      answer: "We offer a free initial consultation to assess your business's current state and long-term goals. Based on this assessment, we recommend a tailored combination of services.",
    },
    {
      question: "Can I bundle multiple services?",
      answer: "Absolutely. Most of our clients benefit from a combination of bookkeeping, tax, and CFO advisory to ensure holistic financial management.",
    },
    {
      question: "Are your services available for international businesses?",
      answer: "Yes, we support businesses across various jurisdictions, particularly those with US-based entities or operations.",
    },
  ];

  const genericProcess = [
    { step: "01", title: "Free Consultation", description: "A initial deep dive into your business needs and current financial health." },
    { step: "02", title: "Custom Proposal", description: "We draft a strategy and service package tailored specifically to your objectives." },
    { step: "03", title: "Seamless Onboarding", description: "Our team integrates with your systems and staff with zero downtime." },
    { step: "04", title: "Ongoing Excellence", description: "Continuous execution, monitoring, and strategic advisory to drive growth." },
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <Section
        background="white"
        spacing="xl"
        className="relative bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden py-24 md:py-32"
      >
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop"
            alt="Financial strategy and growth"
            fill
            className="object-cover"
            priority
          />
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services" },
            ]}
            className="mb-8 text-primary-200"
          />
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Comprehensive Financial <br />
              <span className="text-secondary-400">Solutions for Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-10 max-w-3xl leading-relaxed">
              From daily bookkeeping to executive-level strategic guidance,
              we provide the expertise your business needs at every stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-secondary-500 hover:bg-secondary-600 text-white px-10 py-4"
                >
                  Schedule Free Consultation
                </Button>
              </Link>
              <ScrollButton
                targetId="all-services"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-10 py-4"
              >
                View Case Studies
              </ScrollButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Intro/About Us Section */}
      <Section background="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-left">
              <span className="text-primary-600 font-semibold uppercase tracking-wider text-sm mb-4 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8 font-primary">
                Excellence in Financial <br />Partnership
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                We believe that accurate financial data is the foundation of every successful business decision. Our mission is to transform your complex financial processes into a streamlined growth engine.
              </p>
              <div className="grid grid-cols-3 gap-8 p-8 bg-primary-50 rounded-2xl">
                <div>
                  <div className="text-2xl font-bold text-primary-700">15+</div>
                  <p className="text-xs text-neutral-500 uppercase font-bold mt-1">Years Exp</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-700">500+</div>
                  <p className="text-xs text-neutral-500 uppercase font-bold mt-1">Clients</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-700">98%</div>
                  <p className="text-xs text-neutral-500 uppercase font-bold mt-1">Retention</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl animate-fade-in-right transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
                alt="Our leadership team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Our Services/Solutions Section */}
      <Section background="gray" spacing="lg" id="all-services">
        <Container>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 font-primary">Our Core Expertise</h2>
            <p className="text-lg text-neutral-600">
              Deep specialized knowledge across five critical pillars of business financial success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Link key={service.id} href={`/services/${service.slug}`} className="group">
                <Card hover className="h-full flex flex-col p-0 border-none shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 mb-8 flex-grow leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary-600 font-bold gap-2 group-hover:gap-4 transition-all">
                      <span>Explore Details</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
            {/* Custom Solution Card */}
            <Card className="h-full flex flex-col justify-center items-center bg-primary-900 text-white p-10 text-center border-none shadow-xl transform lg:scale-105">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprise Needs?</h3>
              <p className="text-primary-100 mb-8">We offer custom-built financial solutions for high-complexity organizations.</p>
              <Button variant="secondary" className="w-full py-4 text-lg">Talk to a Partner</Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 4. Our Process Section */}
      <Section background="white" spacing="lg">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">How We Partner With You</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our refined onboarding and engagement process ensures clarity and results from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-neutral-100 -z-10"></div>
            {genericProcess.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-all text-center group">
                <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Why Choose Us Section */}
      <Section background="primary" spacing="lg" className="bg-neutral-900 text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary-400 font-semibold uppercase tracking-wider text-sm mb-4 block">The Value Proposition</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">Expertise You Can Trust, <br />Results You Can Measure</h2>
              <div className="space-y-10">
                {[
                  { title: "Direct Access to Principals", desc: "No junior associates. You work directly with experienced financial leaders." },
                  { title: "Scalable Infrastructure", desc: "Our systems grow with your business, from $1M to $100M+ in revenue." },
                  { title: "Proactive Strategy", desc: "We don't just report the past; we forecast and plan for your future." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
                    <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop" alt="Strategy" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 rounded-3xl overflow-hidden shadow-xl">
                    <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=1000&fit=crop" alt="Meeting" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="relative h-48 rounded-3xl overflow-hidden shadow-xl">
                    <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1000&fit=crop" alt="Analysis" fill className="object-cover" />
                  </div>
                  <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
                    <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop" alt="Growth" fill className="object-cover" />
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-500 text-white p-8 rounded-full shadow-2xl font-bold text-center">
                <div className="text-3xl">99%</div>
                <div className="text-xs uppercase">Accuracy</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. Testimonial Section */}
      <Section background="gray" spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Testimonial
              quote="Partnering with this team has completely changed our company's success story. We went from reactive firefighting to proactive growth planning in months."
              author="Robert Chen"
              role="Founder"
              company="Veridian Ventures"
            />
          </div>
        </Container>
      </Section>

      {/* 7. FAQ Section */}
      <Section background="white" spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-neutral-900 mb-12">Frequently Asked Questions</h2>
            <FAQ items={commonFAQ} />
          </div>
        </Container>
      </Section>

      {/* 8. CTA Section */}
      <Section
        background="primary"
        spacing="xl"
        className="bg-secondary-600 text-white text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary-900/10"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Transform Your Financial <br />Strategy Today
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed font-medium">
              Join 500+ businesses that have chosen excellence. Schedule your initial consultation and let's map out your growth trajectory.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-secondary-600 hover:bg-neutral-100 px-12 py-5 text-xl font-bold shadow-2xl"
                >
                  Book My Free Call
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 px-12 py-5 text-xl font-bold"
                >
                  Contact Sales Team
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-white/70 text-sm font-semibold">
              Comprehensive Assessment • No Commitment • Expert Insights
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

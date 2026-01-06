import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { generateMetadata as genMeta } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";
import { getAllServices } from "@/lib/services";

export const metadata: Metadata = genMeta({
  title: "Consulting Services",
  description:
    "Expert business consulting services to help your company grow, optimize operations, and achieve strategic goals. Professional guidance tailored to your needs.",
  keywords: [
    "business consulting",
    "consulting services",
    "strategic planning",
    "operations",
    "professional services",
  ],
});

// Get services dynamically
const getIcon = (iconName: string) => {
  const icons: Record<string, React.ReactElement> = {
    chart: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    target: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    lightning: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    dollar: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    computer: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  };

  return icons[iconName] || icons.chart;
};

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We start with a comprehensive consultation to understand your business, challenges, and goals. This helps us tailor our approach to your specific needs.",
  },
  {
    step: "02",
    title: "Analysis & Assessment",
    description:
      "Our team conducts a thorough analysis of your current operations, identifying areas for improvement and opportunities for growth.",
  },
  {
    step: "03",
    title: "Strategy Development",
    description:
      "We develop a customized strategy with clear objectives, actionable steps, and measurable outcomes aligned with your business goals.",
  },
  {
    step: "04",
    title: "Implementation Support",
    description:
      "We work alongside your team to implement the strategy, providing guidance, training, and support throughout the process.",
  },
  {
    step: "05",
    title: "Ongoing Optimization",
    description:
      "We monitor progress, measure results, and continuously optimize the strategy to ensure you achieve and exceed your objectives.",
  },
];

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <>
      {/* Hero Section */}
      <Section
        background="white"
        spacing="xl"
        className="relative bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden"
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&h=1080&fit=crop"
            alt="Business consulting professionals"
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
            className="mb-6 text-primary-200"
          />
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Business Consulting
              <br />
              <span className="text-secondary-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Expert guidance to help your business grow, optimize operations,
              and achieve strategic goals. Professional consulting services
              tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-secondary-500 hover:bg-secondary-600 text-white animate-scale-in"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service Overview */}
      <Section background="white" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Comprehensive Consulting Solutions
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              We offer a wide range of consulting services designed to address
              every aspect of your business. From strategic planning to
              operational optimization, our expert team provides the guidance
              you need to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Link key={service.id} href={`/services/${service.slug}`}>
                <Card hover className="p-6 h-full animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-primary-600 mb-4">{getIcon(service.icon)}</div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-primary-600 font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section background="gray" spacing="lg">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Consulting Process
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop"
                alt="Consulting process"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              {processSteps.slice(0, 3).map((step, index) => (
                <div key={index}>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-3xl font-bold text-primary-600">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed ml-12">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 lg:order-2">
              {processSteps.slice(3).map((step, index) => (
                <div key={index}>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-3xl font-bold text-primary-600">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed ml-12">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section background="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Why Choose Our Consulting Services
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Experienced Professionals",
                    description:
                      "Our team brings decades of combined experience across industries, ensuring you get expert guidance.",
                  },
                  {
                    title: "Customized Solutions",
                    description:
                      "Every business is unique. We tailor our approach to your specific needs, challenges, and goals.",
                  },
                  {
                    title: "Proven Methodology",
                    description:
                      "Our process is based on best practices and proven frameworks that deliver measurable results.",
                  },
                  {
                    title: "Ongoing Support",
                    description:
                      "We don't just deliver a plan—we work with you to implement it and ensure long-term success.",
                  },
                ].map((benefit, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Consulting benefits"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-5xl font-bold mb-2">15+</div>
                  <div className="text-xl font-semibold mb-4">
                    Years of Experience
                  </div>
                  <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/20">
                    <div>
                      <div className="text-3xl font-bold mb-1">500+</div>
                      <div className="text-sm opacity-90">
                        Projects Completed
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">98%</div>
                      <div className="text-sm opacity-90">
                        Client Satisfaction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section
        background="primary"
        spacing="lg"
        className="bg-gradient-to-r from-primary-700 to-primary-800"
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-primary-100 leading-relaxed">
              Schedule a consultation today and discover how our consulting
              services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary-700 hover:bg-primary-50"
              >
                Schedule Consultation
              </Button>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

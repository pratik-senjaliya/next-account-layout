import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { getHireStaffBySlug, getAllHireStaffPositions } from "@/lib/hire-staff";
import { generateMetadata as genMeta } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQ } from "@/components/ui/FAQ";
import { Testimonial } from "@/components/ui/Testimonial";
import { ExperienceTabs } from "@/components/ui/ExperienceTabs";
import { SoftwareGrid } from "@/components/ui/SoftwareGrid";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const position = getHireStaffBySlug(slug);

  if (!position) return {};

  return genMeta({
    title: position.title,
    description: position.longDescription,
  });
}

export async function generateStaticParams() {
  const positions = getAllHireStaffPositions();
  return positions.map((position) => ({
    slug: position.slug,
  }));
}

export default async function HireStaffPage({ params }: PageProps) {
  const { slug } = await params;
  const position = getHireStaffBySlug(slug);

  if (!position) {
    notFound();
  }

  return (
    <>
      {/* 1. Hero Section */}
      <Section
        background="white"
        spacing="xl"
        className="relative bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden py-24 md:py-32 lg:py-40"
      >
        <div className="absolute inset-0 opacity-20">
          <Image
            src={position.heroImage}
            alt={position.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Hire Staff", href: "/hire-staff" },
              { label: position.title },
            ]}
            className="mb-8 text-primary-200"
          />
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-[1.1] tracking-tight">
              {position.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-12 max-w-3xl leading-relaxed font-medium">
              {position.longDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                variant="secondary"
                size="lg"
                className="bg-secondary-500 hover:bg-secondary-600 text-white px-12 py-5 text-lg font-bold shadow-xl"
              >
                Schedule Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-12 py-5 text-lg font-bold"
              >
                Learn Our Methodology
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Intro/About us Section */}
      <Section background="white" spacing="lg" className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="animate-fade-in-left order-2 lg:order-1">
              <span className="text-primary-600 font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Overview</span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8 leading-tight font-primary">
                {position.intro.title}
              </h2>
              <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
                {position.intro.content}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {position.intro.stats.map((stat, i) => (
                  <div key={i} className="p-6 bg-neutral-50 rounded-2xl border-l-4 border-primary-600">
                    <div className="text-4xl font-bold text-primary-700 mb-2">{stat.value}</div>
                    <p className="text-sm text-neutral-500 uppercase font-bold tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] rounded-[60px] overflow-hidden shadow-large animate-fade-in-right order-1 lg:order-2">
              <Image
                src={position.image}
                alt={`${position.title} specialists`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent"></div>
            </div>
          </div>
        </Container>
      </Section>


      {/* 3.5. Experience Levels Section - NEW */}
      <Section background="white" spacing="lg" className="py-24 md:py-32 bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Experience Levels</span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Choose Your Perfect Match</h2>
            <p className="text-lg text-neutral-600 leading-relaxed font-medium">
              From junior associates to senior managers, we have professionals at every experience level to match your specific needs and budget.
            </p>
          </div>

          <ExperienceTabs experienceLevels={position.experienceLevels} />
        </Container>
      </Section>

      {/* 4. Getting Started / Process Section - UPDATED */}
      <Section background="white" spacing="lg" className="py-24 md:py-32" id="methodology">
        <Container>
          <div className="text-center mb-20">
            <span className="text-primary-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Getting Started</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-medium">
              We follow a rigorous methodology to ensure your {position.title} transition is effortless and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative">
            <div className="hidden lg:block absolute top-[60px] left-0 w-full h-1 bg-neutral-100 -z-10"></div>
            {position.gettingStarted.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-white border-8 border-primary-50 text-primary-600 rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-8 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-500 shadow-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-primary-700 transition-colors">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4.5. Software Integration Section - NEW */}
      <Section background="gray" spacing="lg" className="py-24 md:py-32 bg-neutral-50">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Software Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Seamless Integration</h2>
            <p className="text-lg text-neutral-600 leading-relaxed font-medium">
              Our professionals are proficient in all major platforms and tools. No need to change your existing workflow.
            </p>
          </div>

          <SoftwareGrid categories={position.softwareCategories} />
        </Container>
      </Section>

      {/* 5. Why choose us Section */}
      <Section background="primary" spacing="lg" className="bg-neutral-900 text-white py-24 md:py-32 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative">
            <div>
              <span className="text-secondary-400 font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Why Partner With Us</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-12 leading-tight tracking-tight">The {position.title} <br />Advantage</h2>
              <div className="space-y-12">
                {position.whyChooseUs.map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-16 h-16 bg-white/5 rounded-[20px] flex items-center justify-center text-secondary-400 border border-white/10 group-hover:bg-secondary-500 group-hover:text-white transition-all duration-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-3 text-white">{item.title}</h4>
                      <p className="text-lg text-neutral-400 leading-relaxed max-w-md">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] lg:h-[700px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
              <div className="relative h-full rounded-[60px] overflow-hidden shadow-2xl border-8 border-white/5">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1200&fit=crop"
                  alt="Client success story"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-transparent p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-1 bg-secondary-500"></div>
                    <span className="text-secondary-400 font-bold uppercase tracking-widest text-xs">Innovation Partner</span>
                  </div>
                  <p className="text-2xl text-white font-bold leading-tight">
                    Driving performance through <br />strategic financial leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5.5. Risk-Free Trial Section - NEW */}
      <Section background="white" spacing="lg" className="py-24 md:py-32 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-bold uppercase tracking-wider">{position.trial.duration} Risk-Free</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Try Before You Commit</h2>
            <p className="text-xl md:text-2xl text-primary-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              {position.trial.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-neutral-100 shadow-2xl text-lg px-10 py-6 w-full sm:w-auto"
                >
                  Start Your Free Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 text-lg px-10 py-6 w-full sm:w-auto"
                >
                  Schedule a Call
                </Button>
              </Link>
            </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. Testimonial Section */}
      <Section background="gray" spacing="lg" className="py-24 md:py-32">
        <Container>
          <div className="max-w-5xl mx-auto">
            <Testimonial
              quote={position.testimonial.quote}
              author={position.testimonial.author}
              role={position.testimonial.role}
              company={position.testimonial.company}
            />
          </div>
        </Container>
      </Section>

      {/* 7. FAQ Section */}
      <Section background="white" spacing="lg" className="py-24 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Expert Q&A</h2>
              <p className="text-lg text-neutral-600 font-medium">
                Detailed answers to the most common questions regarding our {position.title} services.
              </p>
            </div>
            <FAQ items={position.faqs} />
          </div>
        </Container>
      </Section>

      {/* 8. CTA Section */}
      <Section
        background="primary"
        spacing="xl"
        className="bg-secondary-600 text-white text-center relative overflow-hidden py-32 md:py-40"
      >
        <div className="absolute inset-0 bg-primary-900/20"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-bold mb-8 text-white leading-[1.1] tracking-tight">
              Ready to Upgrade Your <br />{position.title}?
            </h2>
            <p className="text-xl md:text-3xl mb-14 text-white/95 leading-relaxed font-medium">
              Join elite businesses that trust our experts with their growth.
              Schedule your strategy session today.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-secondary-600 hover:bg-neutral-100 px-16 py-6 text-2xl font-bold shadow-2xl rounded-2xl transform hover:scale-105 transition-all"
              >
                Schedule Consultation
              </Button>
              <Link href="/hire-staff">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 px-16 py-6 text-2xl font-bold rounded-2xl"
                >
                  See All Solutions
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

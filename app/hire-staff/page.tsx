import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { generateMetadata as genMeta } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { getAllHireStaff, getHireStaffPage } from "@/lib/sanity/queries";
import Link from "next/link";
import { ScrollButton } from "@/components/ui/ScrollButton";

// Enable ISR - revalidate every 60 seconds
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const sanityData = await getHireStaffPage().catch(() => null);

  if (sanityData?.seo) {
    return genMeta({
      title: sanityData.seo.metaTitle || "Hire Offshore Staff",
      description: sanityData.seo.metaDescription,
      keywords: sanityData.seo.metaKeywords,
      ogImage: sanityData.seo.openGraphImage
    });
  }

  return genMeta({
    title: "Hire Offshore Staff",
    description:
      "Scale your team with top-tier offshore accounting, tax, and finance professionals.",
  });
}

export default async function HireStaffHubPage() {
  const [hireStaffPositions = [], pageData] = await Promise.all([
    getAllHireStaff().catch(() => []),
    getHireStaffPage().catch(() => null)
  ]);

  const title = pageData?.title || "Build Your Dream Team \nWithout Bounds";
  const description = pageData?.description || "Access a global pool of vetted, credentialed, and experienced accounting professionals ready to integrate with your firm.";

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
            alt="Hire Staff"
            fill
            className="object-cover"
            priority
          />
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Hire Staff" }]}
            className="mb-8 text-primary-200"
          />
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight whitespace-pre-line">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-10 max-w-3xl leading-relaxed whitespace-pre-line">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-secondary-500 hover:bg-secondary-600 text-white px-10 py-4"
                >
                  Start Hiring
                </Button>
              </Link>
              <ScrollButton
                targetId="roles-list"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-10 py-4"
              >
                View Roles
              </ScrollButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Roles List */}
      <Section background="gray" spacing="lg" id="roles-list">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Available Roles
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From bookkeepers to CFOs, find the perfect addition to your team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hireStaffPositions?.map((position: any) => (
              <Link
                key={position.id}
                href={`/hire-staff/${position.slug}`}
                className="group"
              >
                <Card
                  hover
                  className="h-full flex flex-col p-0 border-none shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={position.image}
                      alt={position.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-neutral-600 mb-8 flex-grow leading-relaxed">
                      {position.description}
                    </p>
                    <div className="flex items-center text-primary-600 font-bold gap-2 group-hover:gap-4 transition-all">
                      <span>View Role Details</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. CTA Section */}
      <Section
        background="primary"
        spacing="xl"
        className="bg-secondary-600 text-white text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary-900/10"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
              Risk-Free 15-Day Trial
            </h2>
            <p className="text-xl mb-12 text-white/90 leading-relaxed font-medium">
              We are so confident in our staff that we offer a 15-day risk-free
              trial. If you&apos;re not satisfied, you don&apos;t pay.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-secondary-600 hover:bg-neutral-100 px-12 py-5 text-xl font-bold shadow-2xl"
                >
                  Start Your Trial
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

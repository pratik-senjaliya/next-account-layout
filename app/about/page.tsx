import type { Metadata } from "next";
import Image from "next/image";
import { generateMetadata as genMeta } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = genMeta({
  title: "About Us",
  description:
    "Learn about our company, mission, values, and the team dedicated to helping businesses succeed. Over 15 years of experience delivering professional services.",
  keywords: ["about", "company", "mission", "values", "team", "history"],
});

const stats = [
  { value: "2010", label: "Year We Launched" },
  { value: "200+", label: "Employees" },
  { value: "$50M+", label: "Total Funding" },
];

const timeline = [
  {
    year: "2010",
    event: "Founded with a vision to transform business operations",
  },
  {
    year: "2013",
    event: "Raised $2M in seed capital and launched to the public",
  },
  {
    year: "2015",
    event: "Raised $7M in Series A funding",
  },
  {
    year: "2018",
    event: "Raised an additional $18M in Series B funding",
  },
  {
    year: "2021",
    event: "Raised $60M in Series C funding",
  },
  {
    year: "2024",
    event: "Expanded services globally, serving 10,000+ clients",
  },
];

const values = [
  {
    title: "Customer Obsession",
    description:
      "We put our clients at the center of everything we do, ensuring their success is our top priority.",
  },
  {
    title: "Ownership",
    description:
      "We take full responsibility for our work and are committed to delivering exceptional results.",
  },
  {
    title: "Empathy",
    description:
      "We understand our clients' challenges and work with compassion to find the best solutions.",
  },
  {
    title: "Empowerment",
    description:
      "We empower our team and clients to achieve their full potential through knowledge and support.",
  },
  {
    title: "Transparency",
    description:
      "We believe in open communication and honest relationships with our clients and team.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section
        background="white"
        spacing="xl"
        className="relative bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
            alt="About us"
            fill
            className="object-cover"
            priority
          />
        </div>

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "About" },
            ]}
            className="mb-6 text-primary-200"
          />
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              We Help Entrepreneurs
              <br />
              <span className="text-secondary-400">Master Their Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Understanding your business needs should be three things: simple,
              effortless, and affordable. We're here to help you understand what
              you want to do and where you want to go.
            </p>
          </div>
        </Container>
      </Section>

      {/* What We Do */}
      <Section background="white" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              We take care of business operations and consulting for business
              owners. And we do it in a way that's never been done before—by
              pairing intuitive software with real, human expertise. To us, it's
              more than number crunching. It's giving entrepreneurs more time to
              focus on what they care about.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-neutral-50 rounded-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How We Got Here */}
      <Section background="gray" spacing="lg">
        <Container>
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              How We Got Here
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start pb-6 border-b border-neutral-200 last:border-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl font-bold text-primary-600 min-w-[80px]">
                    {item.year}
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-neutral-700 leading-relaxed">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Why We're Here */}
      <Section background="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Why We're Here
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Our mission is to help every business owner thrive, by providing
                professional insight and peace of mind in one seamless platform.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Business mastery is the idea that everyone, regardless of
                economic standing, should have full control of their operations.
                It's more than knowing how to read a report—it's giving people
                the tools they need to stay on top of their business, and
                improve their lives.
              </p>
              <p className="text-lg font-semibold text-neutral-900 mt-6">
                People and the quality of their lives. That, at its core, is
                what we're about.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
                alt="Our mission"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Values */}
      <Section background="gray" spacing="lg">
        <Container>
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We rely on five core values for how we communicate, share
              information, and work towards our mission. Together, these values
              inform our most valuable asset: our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <Card hover className="p-6 h-full">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Learn More */}
      <Section background="white" spacing="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Learn More About Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/industries">
              <Card hover className="p-6 text-center">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Industries
                </h3>
                <p className="text-neutral-600">
                  Explore how we tailor our services to your specific industry needs
                </p>
              </Card>
            </Link>
            <Link href="/hire-staff">
              <Card hover className="p-6 text-center">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Hire Staff
                </h3>
                <p className="text-neutral-600">
                  Find the perfect professionals to join your team remotely or on-site
                </p>
              </Card>
            </Link>
            <Link href="/services">
              <Card hover className="p-6 text-center">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  How It Works
                </h3>
                <p className="text-neutral-600">
                  Learn about our process and how we help businesses succeed
                </p>
              </Card>
            </Link>
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8 text-primary-100 leading-relaxed">
              Get in touch today and discover how we can help your business
              succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary-700 hover:bg-primary-50"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


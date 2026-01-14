import type { Metadata } from "next";
import Image from "next/image";
import { generateMetadata as genMeta } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Testimonial } from "@/components/ui/Testimonial";
import { StatCard } from "@/components/ui/StatCard";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FAQ } from "@/components/ui/FAQ";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export const metadata: Metadata = genMeta({
  title: "Home",
  description:
    "Professional services and solutions for your business. Modern, reliable, and efficient solutions tailored to help your business succeed.",
  keywords: ["business", "services", "professional", "solutions", "home"],
});

export default function HomePage() {
  const testimonials = [
    {
      quote:
        "The service has transformed how we manage our business operations. The team is professional, responsive, and truly understands our needs.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "Tech Innovations Inc.",
    },
    {
      quote:
        "Outstanding support and expertise. They've helped us streamline our processes and achieve significant cost savings while maintaining quality.",
      author: "Michael Chen",
      role: "Operations Director",
      company: "Global Solutions",
    },
    {
      quote:
        "Working with this team has been a game-changer. Their attention to detail and commitment to excellence is unmatched in the industry.",
      author: "Emily Rodriguez",
      role: "Founder",
      company: "Creative Ventures",
    },
  ];

  const features = [
    {
      title: "Expert Support",
      description:
        "Get dedicated support from experienced professionals who understand your business needs. Our team is available when you need them, providing personalized guidance and solutions tailored to your specific challenges.",
      linkText: "Learn More",
      linkHref: "/services",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    },
    {
      title: "Comprehensive Solutions",
      description:
        "Access a full suite of tools and services designed to streamline your operations. From initial setup to ongoing management, we provide everything you need in one integrated platform.",
      linkText: "Learn More",
      linkHref: "/solutions",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    },
    {
      title: "Real-Time Insights",
      description:
        "Stay informed with up-to-date data and analytics. Make confident decisions based on accurate, real-time information that helps you understand your business performance at a glance.",
      linkText: "Learn More",
      linkHref: "/insights",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      title: "Streamlined Processes",
      description:
        "Simplify complex workflows with our intuitive platform. Reduce manual work, eliminate errors, and focus on what matters most—growing your business and serving your customers.",
      linkText: "Learn More",
      linkHref: "/processes",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
  ];

  const faqItems = [
    {
      question: "What services do you provide?",
      answer:
        "We offer a comprehensive range of professional services tailored to your business needs. Our solutions include expert consultation, process optimization, ongoing support, and access to advanced tools and resources designed to help your business succeed.",
    },
    {
      question: "How quickly can I get started?",
      answer:
        "Getting started is quick and straightforward. After an initial consultation to understand your specific requirements, we can typically have you set up and running within a few business days. Our team will guide you through every step of the process.",
    },
    {
      question: "What kind of support can I expect?",
      answer:
        "You'll have access to our dedicated support team who are available to assist with any questions or issues. We provide multiple channels for support including email, phone, and our online platform, ensuring you can reach us when you need help.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Security is our top priority. We use industry-standard encryption and security measures to protect your data. Our systems are regularly audited and comply with the latest security standards to ensure your information remains safe and confidential.",
    },
  ];

  return (
    <>
      {/* Hero Section - Dark Background with Image */}
      <Section
        background="white"
        spacing="xl"
        className="relative bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden"
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop"
            alt="Professional business team"
            fill
            className="object-cover"
            priority
          />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                Professional Services
                <br />
                <span className="text-secondary-400">Done Right</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-10 max-w-2xl leading-relaxed">
                Your business deserves expert attention. We provide{" "}
                <strong className="text-white">dedicated professionals</strong>{" "}
                and <strong className="text-white">powerful solutions</strong>{" "}
                that work together to help your business succeed and grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/services">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-secondary-500 hover:bg-secondary-600 text-white w-full sm:w-auto"
                  >
                    Get Started
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                  >
                    Schedule a Call
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-8 text-sm md:text-base text-primary-200">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-lg">10,000+</span>
                  <span>Active Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-lg">$50M+</span>
                  <span>In Savings Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-lg">99.9%</span>
                  <span>Uptime Guarantee</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Business professionals working together"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust Indicators */}
      <Section background="white" spacing="md">
        <Container>
          <div className="text-center mb-10 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-2">
              Trusted by thousands of businesses
            </h2>
            <p className="text-neutral-600">
              Join companies that rely on our expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <StatCard value="10,000+" label="Active Clients" />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <StatCard value="15+ Years" label="Industry Experience" />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <StatCard value="24/7" label="Support Available" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section background="gray" spacing="lg">
        <Container>
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Don't just take our word for it—hear from businesses that have
              transformed their operations with our help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <Testimonial {...testimonial} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section background="white" spacing="lg">
        <Container>
          <div className="text-center mb-14 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to streamline your operations and
              drive growth.
            </p>
          </div>

          <div className="space-y-20 md:space-y-28">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center animate-fade-in-up">
              <div>
                <FeatureCard {...features[0]} />
              </div>
              <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={features[0].image}
                  alt={features[0].title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center animate-fade-in-up">
              <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg lg:order-first">
                <Image
                  src={features[1].image}
                  alt={features[1].title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <FeatureCard {...features[1]} />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center animate-fade-in-up">
              <div>
                <FeatureCard {...features[2]} />
              </div>
              <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={features[2].image}
                  alt={features[2].title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center animate-fade-in-up">
              <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg lg:order-first">
                <Image
                  src={features[3].image}
                  alt={features[3].title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <FeatureCard {...features[3]} />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Partner Logos */}
      <Section background="gray" spacing="md">
        <Container>
          <div className="text-center mb-10 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-2">
              Trusted Partners
            </h2>
            <p className="text-neutral-600">
              We work with industry-leading platforms
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
            {[
              "Shopify",
              "Square",
              "QuickBooks",
              "Salesforce",
              "Microsoft",
              "Google",
            ].map((partner, i) => (
              <div
                key={i}
                className="w-full h-20 bg-white rounded-lg flex items-center justify-center border border-neutral-200 shadow-sm hover:shadow-md transition-all hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="text-sm text-neutral-600 font-semibold">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Blog Section */}
      <Section background="white" spacing="lg">
        <Container>
          <div className="flex items-center justify-between mb-12 animate-fade-in-up">
            <div>
              <p className="text-sm text-primary-600 font-semibold mb-2 uppercase tracking-wide">
                From the Blog
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Explore Our Latest Resources
              </h2>
            </div>
            <Link
              href="/resources"
              className="hidden md:block text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "10 Essential Strategies for Business Growth in 2024",
                excerpt:
                  "Discover proven strategies that successful businesses are using to drive growth and stay competitive.",
                category: "Business Growth",
                date: "Jan 15, 2024",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
                slug: "10-essential-strategies-business-growth",
                id: "1",
              },
              {
                title: "How to Optimize Your Business Operations",
                excerpt:
                  "Learn practical tips and techniques to streamline your operations and improve efficiency.",
                category: "Operations",
                date: "Jan 10, 2024",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
                slug: "optimize-business-operations",
                id: "2",
              },
              {
                title: "Financial Planning: A Complete Guide",
                excerpt:
                  "Everything you need to know about financial planning and cash flow management.",
                category: "Finance",
                date: "Jan 5, 2024",
                image:
                  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
                slug: "financial-planning-guide-small-business",
                id: "3",
              },
            ].map((post, index) => (
              <Link
                key={index}
                href={`/resources/${post.slug}`}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card hover className="h-full overflow-hidden">
                  <div className="relative h-48 mb-4 -m-6 mb-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 pt-0">
                    <div className="flex items-center gap-3 mb-3 text-sm text-neutral-500">
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="text-primary-600 font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                      Learn more →
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link
              href="/resources"
              className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              View All Resources →
            </Link>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section background="white" spacing="lg">
        <Container>
          <FAQ items={faqItems} showMoreLink={true} />
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-primary-100 leading-relaxed">
              Join thousands of businesses that trust us with their operations.
              Schedule a consultation today and see how we can help your business
              grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary-700 hover:bg-primary-50"
                >
                  Schedule a Call
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

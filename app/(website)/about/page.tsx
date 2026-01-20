import type { Metadata } from "next";
import Image from "next/image";
import { generateMetadata as genMeta } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";
import { getAboutPage } from "@/lib/sanity/queries";

// Enable ISR
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const sanityData = await getAboutPage().catch(() => null);

  if (sanityData?.seo) {
    return genMeta({
      title: sanityData.seo.metaTitle || "About Us",
      description: sanityData.seo.metaDescription,
      keywords: sanityData.seo.metaKeywords,
      ogImage: sanityData.seo.openGraphImage
    });
  }

  return genMeta({
    title: "About Us",
    description:
      "Learn about our company, mission, values, and the team dedicated to helping businesses succeed. Over 15 years of experience delivering professional services.",
    keywords: ["about", "company", "mission", "values", "team", "history"],
  });
}

export default async function AboutPage() {
  const sanityData = await getAboutPage().catch(() => null);

  const staticData = {
    heroTitle: "We Help Entrepreneurs",
    heroTitleHighlight: "Master Their Business",
    heroDescription:
      "Understanding your business needs should be three things: simple, effortless, and affordable. We're here to help you understand what you want to do and where you want to go.",
    heroImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
    whatWeDoTitle: "What We Do",
    whatWeDoDescription:
      "We take care of business operations and consulting for business owners. And we do it in a way that's never been done before—by pairing intuitive software with real, human expertise. To us, it's more than number crunching. It's giving entrepreneurs more time to focus on what they care about.",
    stats: [
      { value: "2010", label: "Year We Launched" },
      { value: "200+", label: "Employees" },
      { value: "$50M+", label: "Total Funding" },
    ],
    timelineTitle: "How We Got Here",
    timelineEvents: [
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
    ],
    missionTitle: "Why We're Here",
    missionDescription: [
      "Our mission is to help every business owner thrive, by providing professional insight and peace of mind in one seamless platform.",
      "Business mastery is the idea that everyone, regardless of economic standing, should have full control of their operations. It's more than knowing how to read a report—it's giving people the tools they need to stay on top of their business, and improve their lives.",
    ],
    missionEmphasis:
      "People and the quality of their lives. That, at its core, is what we're about.",
    missionImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
    valuesTitle: "Our Values",
    valuesDescription:
      "We rely on five core values for how we communicate, share information, and work towards our mission. Together, these values inform our most valuable asset: our culture.",
    values: [
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
    ],
  };

  const data = sanityData || staticData;

  // Handle mission description which might be string[] or portable text in future.
  // For now safely assuming array of strings as per staticData structure
  // If sanity returns something else, we might need adapter.
  // My query returns `missionDescription` directly. In seed it is array of strings.
  // In Schema it is array of text. Sanity returns array of strings for `array of text`?
  // Let's verify schema: `type: 'array', of: [{ type: 'text' }]` -> This returns array of objects like `[{_key, _type: 'text', value: '...'}]`?
  // No, `type: 'text'` inside array -> `[{_key:..., _type: 'text', text: "..."}]` ?
  // Actually, standard `array` of `string` is simpler: `type: 'array', of: [{type: 'string'}]`.
  // My schema used `type: 'text'` which is long string.
  // Sanity response for simple array types usually is plain array if configured right, but for objects it keeps keys.
  // Let's assume for now it might return objects. I should robustly handle it.

  // Correction: Schema `of: [{ type: 'text' }]`.
  // Response will be `missionDescription: [ "string1", "string2" ]` ONLY IF it was `of: [{type: 'string'}]`.
  // Since it is `text` (which is an object block in some contexts? No, `text` is primitive type in Sanity schema but in array it wraps in object usually).
  // Wait, `defineField({name: 'missionDescription', type: 'array', of: [{type: 'text'}]})`
  // This will likely produce `[{_key: '...', _type: 'text', value: '...'}]`? No `value` field is implicit?
  // Actually, `text` is primitive. But inside array, primitives are wrapped?
  // Let's check my seed script. `missionDescription: ["...", "..."]`.
  // When I upload this to Sanity via client, it might reject if schema expects objects?
  // Or it auto-wraps?
  // Sanity array of primitives: `of: [{type: 'string'}]` -> `['a', 'b']`.
  // If I use `type: 'text'`, it's likely similar.
  // NOTE: To be safe, I should just treat it as array of strings in frontend, and if it comes back as objects, map it.

  const missionParagraphs = Array.isArray(data.missionDescription)
    ? data.missionDescription.map((p: any) => typeof p === 'string' ? p : (p.text || p.value || ""))
    : [];

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
            src={data.heroImage}
            alt={data.heroTitle}
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
              {data.heroTitle}
              <br />
              {data.heroTitleHighlight && (
                <span className="text-secondary-400">{data.heroTitleHighlight}</span>
              )}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              {data.heroDescription}
            </p>
          </div>
        </Container>
      </Section>

      {/* What We Do */}
      <Section background="white" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {data.whatWeDoTitle}
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              {data.whatWeDoDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {data.stats?.map((stat: any, index: number) => (
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

      {/* How We Got Here (Timeline) */}
      <Section background="gray" spacing="lg">
        <Container>
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {data.timelineTitle}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {data.timelineEvents?.map((item: any, index: number) => (
                <div
                  key={index}
                  className="flex gap-6 items-start pb-6 border-b border-neutral-200 last:border-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl font-bold text-primary-600 min-w-[5rem]">
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

      {/* Why We're Here (Mission) */}
      <Section background="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                {data.missionTitle}
              </h2>
              {missionParagraphs.map((paragraph: string, idx: number) => (
                <p key={idx} className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {data.missionEmphasis && (
                <p className="text-lg font-semibold text-neutral-900 mt-6">
                  {data.missionEmphasis}
                </p>
              )}
            </div>
            <div
              className="relative h-96 rounded-2xl overflow-hidden shadow-lg animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Image
                src={data.missionImage}
                alt={data.missionTitle}
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
              {data.valuesTitle}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {data.valuesDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.values?.map((value: any, index: number) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
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

      {/* Learn More (Static Links) */}
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
                  Explore how we tailor our services to your specific industry
                  needs
                </p>
              </Card>
            </Link>
            <Link href="/hire-staff">
              <Card hover className="p-6 text-center">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Hire Staff
                </h3>
                <p className="text-neutral-600">
                  Find the perfect professionals to join your team remotely or
                  on-site
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

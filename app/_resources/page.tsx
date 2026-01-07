import type { Metadata } from "next";
import Image from "next/image";
import { generateMetadata as genMeta } from "@/lib/seo";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { getAllBlogPosts } from "@/lib/blog";
import Link from "next/link";

export const metadata: Metadata = genMeta({
  title: "Resources & Blog",
  description:
    "Explore our collection of articles, guides, and resources to help your business succeed. Expert insights, tips, and best practices.",
  keywords: ["blog", "resources", "articles", "guides", "insights", "tips"],
});

const categories = [
  "All",
  "Business Growth",
  "Operations",
  "Finance",
  "Technology",
  "Strategy",
  "Marketing",
];

export default function ResourcesPage() {
  const blogPosts = getAllBlogPosts();

  return (
    <>
      {/* Hero Section */}
      <Section
        background="white"
        spacing="xl"
        className="relative bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden"
      >
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Resources" },
            ]}
            className="mb-6 text-primary-200"
          />
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Resources & Blog
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of articles, guides, and insights to help
              your business succeed. Expert advice, best practices, and industry
              trends.
            </p>
          </div>
        </Container>
      </Section>

      {/* Categories Filter */}
      <Section background="white" spacing="md">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center animate-fade-in-up">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-600 transition-colors font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Blog Posts Grid */}
      <Section background="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
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
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-500">
                        By {post.author}
                      </span>
                      <span className="text-primary-600 font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                        Read More
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter CTA */}
      <Section
        background="primary"
        spacing="lg"
        className="bg-gradient-to-r from-primary-700 to-primary-800"
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 text-primary-100 leading-relaxed">
              Subscribe to our newsletter and get the latest insights, tips, and
              resources delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

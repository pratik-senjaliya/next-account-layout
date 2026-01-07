import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { generateMetadata as genMeta } from "@/lib/seo";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return genMeta({
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    });
  }

  return genMeta({
    title: post.title,
    description: post.excerpt,
    keywords: [post.category.toLowerCase(), "blog", "article"],
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

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
              { label: "Resources", href: "/resources" },
              { label: post.title },
            ]}
            className="mb-6 text-primary-200"
          />
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="mb-6">
              <span className="px-3 py-1 bg-secondary-500/20 text-secondary-300 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-primary-200 text-sm">
              <div className="flex items-center gap-2">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Image */}
      <Section background="white" spacing="sm">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl -mt-16 mb-12 animate-fade-in-up">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Content */}
      <Section background="white" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <article
              className="prose prose-lg max-w-none animate-fade-in-up"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </Container>
      </Section>

      {/* Author Info */}
      <Section background="gray" spacing="md">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md animate-fade-in-up">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-600">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                    {post.author}
                  </h3>
                  <p className="text-neutral-600 mb-4">{post.authorRole}</p>
                  <p className="text-neutral-700">
                    Expert insights and practical advice to help your business
                    succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Posts */}
      <Section background="white" spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getAllBlogPosts()
                .filter((p) => p.id !== post.id && p.category === post.category)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/resources/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-neutral-600 mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <span className="text-primary-600 font-medium text-sm inline-flex items-center gap-1">
                        Read Article
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                  </Link>
                ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section
        background="primary"
        spacing="lg"
        className="bg-gradient-to-r from-primary-700 to-primary-800"
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-primary-100 leading-relaxed">
              Get expert guidance and support to help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
                  Contact Us
                </button>
              </Link>
              <Link href="/services">
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Our Services
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


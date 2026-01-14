"use client";

import type { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { getAllBlogPosts } from "@/lib/blog";
import Link from "next/link";

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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts by category and search
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

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

      {/* Search Bar */}
      <Section background="white" spacing="sm" className="pt-8">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 rounded-2xl border-2 border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all text-lg"
              />
              <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </Container>
      </Section>

      {/* Categories Filter */}
      <Section background="white" spacing="sm">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center animate-fade-in-up">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${selectedCategory === category
                    ? "bg-primary-600 text-white shadow-lg scale-105"
                    : "border-2 border-neutral-200 text-neutral-700 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-600"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Post */}
      {featuredPost && (
        <Section background="white" spacing="md">
          <Container>
            <Link href={`/resources/${featuredPost.slug}`}>
              <Card hover className="overflow-hidden group cursor-pointer">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-64 md:h-full min-h-[300px]">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-secondary-500 text-white rounded-full text-sm font-bold shadow-lg">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4 text-sm text-neutral-500">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-lg font-medium">
                        {featuredPost.category}
                      </span>
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-neutral-600 mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-500">
                        By {featuredPost.author}
                      </span>
                      <span className="text-primary-600 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read More
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </Container>
        </Section>
      )}

      {/* Blog Posts Grid */}
      <Section background="white" spacing="lg">
        <Container>
          {remainingPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/resources/${post.slug}`}
                  className="animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card hover className="h-full overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                    <div className="relative h-48 mb-4 -m-6 mb-4 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 pt-0">
                      <div className="flex items-center gap-3 mb-3 text-sm text-neutral-500">
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-neutral-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-neutral-500">
                          By {post.author}
                        </span>
                        <span className="text-primary-600 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-neutral-500">No articles found matching your criteria.</p>
            </div>
          )}
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

import { client } from './client'
import type { BlogPost } from '../blog'

// GROQ query to get all posts
export async function getAllPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    "id": _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    "date": publishedAt,
    author,
    authorRole,
    "image": mainImage.asset->url,
    readTime,
    "content": ""
  }`

  return client.fetch(query)
}

// GROQ query to get a single post by slug
export async function getPostBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    "id": _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    category,
    "date": publishedAt,
    author,
    authorRole,
    "image": mainImage.asset->url,
    readTime
  }`

  return client.fetch(query, { slug })
}

// Get all slugs for generateStaticParams
export async function getAllPostSlugs(): Promise<string[]> {
  const query = `*[_type == "post"].slug.current`
  return client.fetch(query)
}

// Get unique categories
export async function getAllCategories(): Promise<string[]> {
  const query = `array::unique(*[_type == "post"].category)`
  return client.fetch(query)
}

// ==================== SERVICES ====================

// GROQ query to get all services
export async function getAllServices() {
  const query = `*[_type == "service"] | order(title asc) {
    "id": _id,
    title,
    "slug": slug.current,
    description,
    longDescription,
    icon,
    "heroImage": heroImage.asset->url,
    "image": image.asset->url,
    "intro": {
      "title": introTitle,
      "content": introContent,
      "stats": introStats
    },
    features,
    serviceAreas,
    process,
    whyChooseUs,
    testimonial,
    faqs
  }`

  return client.fetch(query)
}

// GROQ query to get a single service by slug
export async function getServiceBySlug(slug: string) {
  const query = `*[_type == "service" && slug.current == $slug][0] {
    "id": _id,
    title,
    "slug": slug.current,
    description,
    longDescription,
    icon,
    "heroImage": heroImage.asset->url,
    "image": image.asset->url,
    "intro": {
      "title": introTitle,
      "content": introContent,
      "stats": introStats
    },
    features,
    serviceAreas,
    process,
    whyChooseUs,
    testimonial,
    faqs
  }`

  return client.fetch(query, { slug })
}

// Get all service slugs for generateStaticParams
export async function getAllServiceSlugs(): Promise<string[]> {
  const query = `*[_type == "service"].slug.current`
  return client.fetch(query)
}

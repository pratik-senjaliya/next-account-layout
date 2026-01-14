import type { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/sanity/queries";
import { ResourcesClient } from "./ResourcesClient";

// Enable ISR - revalidate every 60 seconds
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Resources & Insights | Business Growth Strategies",
  description: "Discover expert insights and actionable strategies for business growth, operations optimization, and financial management.",
};

export default async function ResourcesPage() {
  // Fetch data from Sanity
  const blogPosts = await getAllPosts();
  const categories = await getAllCategories();

  // Add "All" to the beginning
  const allCategories = ["All", ...categories];

  return (
    <ResourcesClient
      blogPosts={blogPosts}
      categories={allCategories}
    />
  );
}

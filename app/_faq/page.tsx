import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FAQ } from "@/components/ui/FAQ";

export const metadata: Metadata = genMeta({
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about our services, pricing, support, and more. Get the information you need to make informed decisions.",
  keywords: ["faq", "questions", "answers", "help", "support"],
});

const faqItems = [
  {
    question: "What services do you provide?",
    answer:
      "We offer a comprehensive range of professional services tailored to your business needs. Our solutions include expert consultation, process optimization, ongoing support, and access to advanced tools and resources designed to help your business succeed. We specialize in business consulting, strategic planning, operations optimization, financial advisory, and technology consulting.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "Getting started is quick and straightforward. After an initial consultation to understand your specific requirements, we can typically have you set up and running within a few business days. Our team will guide you through every step of the process, ensuring a smooth onboarding experience.",
  },
  {
    question: "What kind of support can I expect?",
    answer:
      "You'll have access to our dedicated support team who are available to assist with any questions or issues. We provide multiple channels for support including email, phone, and our online platform, ensuring you can reach us when you need help. Our support team is available during business hours, and we offer priority support for enterprise clients.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use industry-standard encryption and security measures to protect your data. Our systems are regularly audited and comply with the latest security standards including SOC 2 and ISO certifications to ensure your information remains safe and confidential. We never share your data with third parties without your explicit consent.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Our pricing is flexible and based on your specific needs. We offer various plans ranging from basic packages for small businesses to comprehensive enterprise solutions. Pricing depends on the scope of services, number of users, and level of support required. Contact us for a customized quote that fits your budget and requirements.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Yes, absolutely. We understand that every business is unique, and we offer customized solutions tailored to your specific needs. Our team will work with you to understand your requirements and develop a solution that addresses your particular challenges and goals.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time. We offer flexible month-to-month plans with no long-term contracts required. If you're on an annual plan, we offer prorated refunds for unused months. Please contact our support team to discuss cancellation options.",
  },
  {
    question: "Do you provide training for your services?",
    answer:
      "Yes, we provide comprehensive training to help you and your team get the most out of our services. This includes initial onboarding sessions, documentation, video tutorials, and ongoing training as new features are released. We also offer advanced training workshops for teams that want to maximize their efficiency.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve businesses across a wide range of industries including technology, healthcare, finance, retail, manufacturing, professional services, and more. Our solutions are designed to be flexible and adaptable to different business models and industry requirements.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can contact our customer support team through multiple channels: email at support@yoursite.com, phone at +1 (234) 567-8900, or through our online chat system. Our support team is available Monday through Friday, 9 AM to 6 PM, and we typically respond to inquiries within 24 hours.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <Section
        background="white"
        spacing="xl"
        className="relative bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden"
      >
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Frequently Asked
              <br />
              <span className="text-secondary-400">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services, pricing, and
              support. Can't find what you're looking for? Contact us and we'll
              be happy to help.
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section background="white" spacing="lg">
        <Container>
          <FAQ items={faqItems} showMoreLink={false} />
        </Container>
      </Section>

      {/* Contact CTA */}
      <Section
        background="primary"
        spacing="lg"
        className="bg-gradient-to-r from-primary-700 to-primary-800"
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 text-primary-100 leading-relaxed">
              Can't find the answer you're looking for? Our support team is here
              to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="px-8 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
                  Contact Support
                </button>
              </a>
              <a href="mailto:support@yoursite.com">
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Send Email
                </button>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


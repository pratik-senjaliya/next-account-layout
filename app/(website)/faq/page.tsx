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
  // Infrastructure & Remote Logistics
  {
    question: "How does it work remotely?",
    answer:
      "We function as a seamless extension of your office. We use secure remote access tools (Citrix, VPN, or RDP) to work directly on your local server, or we work within your cloud-based apps (QuickBooks Online, Xero, Drake Hosted). You assign tasks via your project management tool, and we update statuses in real-time.",
  },
  {
    question: "Where does the staff work from?",
    answer:
      "Unlike freelance platforms, our staff works from our State-of-the-Art Delivery Centers (not from home). This ensures a professional environment, supervised quality, and 100% infrastructure redundancy including dual fiber-optic lines and industrial-grade generators.",
  },
  {
    question: "What infrastructure and security are provided to the staff?",
    answer:
      "Every staff member is provided with high-performance workstations (dual-monitor setups), biometric access control, and 24/7 CCTV monitoring. Our offices are 'Paperless' (no printers, cameras, or USBs allowed) to ensure zero data leakage.",
  },

  // Data Privacy & Security
  {
    question: "How do you ensure my client's data is secure?",
    answer:
      "We follow a 'No-Data-Storage' policy. We do not download or store sensitive files locally. Our delivery centers are SOC 2 Type II compliant, ensuring we meet the highest US standards for data privacy and security.",
  },
  {
    question: "Are you compliant with US privacy laws?",
    answer:
      "Yes. We are fully compliant with GDPR, HIPAA (for medical accounting), and the Gramm-Leach-Bliley Act (GLBA). We also sign a US-jurisdiction Non-Disclosure Agreement (NDA) to give you total legal peace of mind.",
  },

  // Staffing & Qualifications
  {
    question: "What are the qualifications of your offshore staff?",
    answer:
      "Our staff consists of highly educated professionals. Junior roles hold a Bachelor's in Accounting, while Seniors and Managers typically hold CPA, CA, or Enrolled Agent (EA) credentials. They are pre-trained in US GAAP and IRS tax codes.",
  },
  {
    question: "Can I interview the staff before hiring?",
    answer:
      "Yes. For our Dedicated FTE model, we shortlist 2–3 vetted resumes based on your requirements. You are encouraged to conduct video interviews via Zoom or Teams to choose the professional who best fits your firm's culture.",
  },
  {
    question: "What if a staff member leaves or doesn't work out?",
    answer:
      "We have a 'No-Questions-Asked' Replacement Policy. If a staff member isn't the right fit within the first 30 days, we replace them immediately. If an employee leaves, we provide a replacement from our buffer talent pool within 15 days at no extra cost.",
  },

  // Workflow & Communication
  {
    question: "Do you work on our time zone or yours?",
    answer:
      "We offer a 'Crossover' Model. Our team typically works while you sleep (The Overnight Advantage), so work is ready by your morning. We also ensure a 3–4 hour overlap with your business day for live meetings and queries.",
  },
  {
    question: "How do you handle document sharing?",
    answer:
      "We use your preferred secure portal (ShareFile, SmartVault, TaxDome, etc.) to ensure end-to-end encryption. We never ask you to email sensitive financial documents directly.",
  },
  {
    question: "Will the staff speak fluent English?",
    answer:
      "Absolutely. All our professionals undergo rigorous English proficiency training. They are capable of clear, professional written and verbal communication, ensuring no 'language gap' in your workflow.",
  },

  // Quality Control & Training
  {
    question: "What is your Quality Control (QC) process?",
    answer:
      "We utilize a 3-Tier Review System: Preparer completes the initial task, Senior Reviewer audits for technical accuracy, and Manager performs a final sign-off before delivery.",
  },
  {
    question: "What about the training for new IRS laws?",
    answer:
      "We handle all technical training and Continuing Professional Education (CPE). Our team is updated annually on new tax legislation (like TCJA or SECURE Act updates) at our expense. You only need to brief them on your specific 'firm-style' preferences.",
  },

  // Pricing & Trial
  {
    question: "How much can I expect to save?",
    answer:
      "On average, our clients save between 50% and 70% compared to hiring a full-time, in-house accountant in the US. You save on salaries, payroll taxes, health insurance, and office overhead.",
  },
  {
    question: "Do you offer a trial period?",
    answer:
      "Yes! We offer a 15-Day Risk-Free Trial. You can test our quality, communication, and speed on a real project. If you aren't satisfied by the end of the trial, you have no obligation to continue.",
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


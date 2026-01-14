import React from "react";
import Link from "next/link";
import { Container } from "./Container";

import { industries } from "@/lib/industries";
import { hireStaffPositions as hireStaff } from "@/lib/hire-staff";

const services = [
  { name: "Bookkeeping & Accounting", href: "/services/bookkeeping-accounting" },
  { name: "Tax Preparation", href: "/services/tax-preparation" },
  { name: "Payroll and Compliance", href: "/services/payroll-compliance" },
  { name: "Audit & Assurance", href: "/services/audit-assurance" },
  { name: "Virtual CFO & FP&A", href: "/services/virtual-cfo-fpa" },
  { name: "View All Services", href: "/services" },
];

const resources = [
  { name: "FAQ", href: "/faq" },
  { name: "Blog", href: "/resources" },
];

const company = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const legal = [
  { name: "Privacy Policy", href: "#privacy" },
  { name: "Terms of Service", href: "#terms" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Main Footer Content */}
      <div className="border-b border-neutral-800">
        <Container>
          <div className="py-12 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-8">
              {/* Company Info - Spans 2 cols on large screens */}
              <div className="col-span-2 lg:col-span-2">
                <Link href="/" className="inline-block mb-4">
                  <span className="text-2xl font-bold text-white">
                    YourCompany
                  </span>
                </Link>
                <p className="text-sm text-neutral-400 mb-6 max-w-sm leading-relaxed">
                  Professional services and solutions for your business. Modern,
                  reliable, and efficient.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-neutral-800 hover:bg-secondary-600 rounded-lg transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-neutral-800 hover:bg-secondary-600 rounded-lg transition-colors"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-neutral-800 hover:bg-secondary-600 rounded-lg transition-colors"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                  Services
                </h3>
                <ul className="space-y-3">
                  {services.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm hover:text-white transition-colors text-neutral-400"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div>
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Industries
                </h3>
                <ul className="space-y-3">
                  {industries.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/industries/${item.slug}`}
                        className="text-sm hover:text-white transition-colors text-neutral-400"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hire Staff */}
              <div>
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Hire Staff
                </h3>
                <ul className="space-y-3">
                  {hireStaff.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/hire-staff/${item.slug}`}
                        className="text-sm hover:text-white transition-colors text-neutral-400"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company & Resources */}
              <div>
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                  Company
                </h3>
                <ul className="space-y-3">
                  {company.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm hover:text-white transition-colors text-neutral-400"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-4 border-t border-neutral-800 mt-4">
                    <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold block mb-3">Resources</span>
                  </li>
                  {resources.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm hover:text-white transition-colors text-neutral-400"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="mt-12 pt-8 border-t border-neutral-800">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                    Get in Touch
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="tel:+1234567890"
                      className="block text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      +1 (234) 567-8900
                    </a>
                    <a
                      href="mailto:info@yoursite.com"
                      className="block text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      info@yoursite.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <Container>
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} YourCompany. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              {legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm hover:text-white transition-colors text-neutral-400"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

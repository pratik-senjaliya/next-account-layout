"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NavLink } from "@/components/ui/NavLink";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      {
        name: "Bookkeeping & Accounting",
        href: "/services/bookkeeping-accounting",
        description: "Accurate and timely financial record-keeping for your business.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        ),
      },
      {
        name: "Tax Preparation",
        href: "/services/tax-preparation",
        description: "Expert tax planning and preparation to maximize your savings.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        name: "Payroll and Compliance",
        href: "/services/payroll-compliance",
        description: "Seamless payroll processing and regulatory compliance.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
      },
      {
        name: "Audit & Assurance",
        href: "/services/audit-assurance",
        description: "Robust audit readiness and internal control examinations.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
      },
      {
        name: "Virtual CFO & FP&A",
        href: "/services/virtual-cfo-fpa",
        description: "Strategic financial leadership to drive your business growth.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Hire Staff",
    href: "/hire-staff",
    submenu: [
      {
        name: "Hire Bookkeeper/Accountant",
        href: "/hire-staff/bookkeeper-accountant",
        description: "Skilled offshore bookkeepers to manage your financial operations.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
      },
      {
        name: "Hire Tax Preparation Staff",
        href: "/hire-staff/tax-preparation",
        description: "Certified tax professionals for your tax practice.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
      },
      {
        name: "Hire Payroll and Compliance",
        href: "/hire-staff/payroll-compliance",
        description: "Payroll specialists for seamless processing.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        name: "Hire Audit and Assurance",
        href: "/hire-staff/audit-assurance",
        description: "Experienced audit professionals for your practice.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        ),
      },
      {
        name: "Hire Virtual CFO & FP&A",
        href: "/hire-staff/virtual-cfo-fpa",
        description: "Senior financial analysts and CFO-level professionals.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Industries",
    href: "/industries",
    submenu: [
      {
        name: "Medical and Health",
        href: "/industries/medical-health",
        description: "HIPAA-compliant financial services for healthcare providers.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        ),
      },
      {
        name: "Hospitality and Retail",
        href: "/industries/hospitality-retail",
        description: "POS integration and multi-location reporting for retail.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        ),
      },
      {
        name: "Real Estate & Construction",
        href: "/industries/real-estate-construction",
        description: "Job costing and 1031 exchange expertise.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
      },
      {
        name: "Tech & Ecommerce",
        href: "/industries/tech-ecommerce",
        description: "SaaS metrics and revenue recognition for digital businesses.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        name: "Professional Services",
        href: "/industries/professional-services",
        description: "Time tracking and project profitability for service firms.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        name: "Industrial & Niche",
        href: "/industries/industrial-niche",
        description: "Manufacturing cost accounting and specialized compliance.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
      },
    ],
  },
  { name: "Resources", href: "/resources" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showTopBanner, setShowTopBanner] = useState(true);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Promotional Banner */}
      {showTopBanner && (
        <div className="bg-yellow-400 text-neutral-900 text-sm py-2.5 relative">
          <div className="container-custom">
            <div className="flex items-center justify-center gap-4">
              <p className="text-center">
                <strong>Free Consultation</strong> when you start an annual plan
                <Link
                  href="#schedule-call"
                  className="ml-2 font-semibold underline hover:no-underline"
                >
                  Learn More →
                </Link>
              </p>
              <button
                onClick={() => setShowTopBanner(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-yellow-500 rounded transition-colors"
                aria-label="Close banner"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Contact Bar
      <div className="bg-neutral-900 text-neutral-300 text-sm py-2.5 hidden md:block">
        <div className="container-custom">
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@yoursite.com"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              info@yoursite.com
            </a>
            <a
              href="tel:+1234567890"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +1 (234) 567-8900
            </a>
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-30 bg-white border-b border-neutral-200 transition-shadow duration-200",
          isScrolled && "shadow-md"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <span className="text-2xl md:text-3xl font-bold text-primary-700 group-hover:text-primary-800 transition-colors">
                YourCompany
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => {
                if (item.submenu) {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setHoveredMenu(item.name)}
                      onMouseLeave={() => setHoveredMenu(null)}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1",
                          "text-neutral-700 hover:text-primary-600"
                        )}
                      >
                        {item.name}
                        <svg
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            hoveredMenu === item.name && "rotate-180"
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </Link>

                      {/* Mega Menu */}
                      {hoveredMenu === item.name && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[800px] bg-white rounded-xl shadow-2xl border border-neutral-200 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="grid grid-cols-12 gap-8">
                            {/* Services Column */}
                            <div className="col-span-8">
                              <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-100">
                                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                                  Our Services
                                </h3>
                                <Link
                                  href="/services"
                                  className="text-xs font-semibold text-primary-600 hover:text-primary-700 underline flex items-center gap-1"
                                >
                                  View Hub
                                </Link>
                              </div>
                              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                                {item.submenu.map((subItem) => (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    className="group flex items-start gap-4 p-3 rounded-lg hover:bg-neutral-50 transition-colors"
                                  >
                                    <div className="mt-1 p-2 bg-primary-50 text-primary-600 rounded-lg group-hover:bg-primary-100 group-hover:text-primary-700 transition-colors">
                                      {subItem.icon}
                                    </div>
                                    <div>
                                      <div className="text-sm font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                                        {subItem.name}
                                      </div>
                                      <p className="text-xs text-neutral-500 line-clamp-2 mt-0.5">
                                        {subItem.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Featured Section */}
                            <div className="col-span-4 bg-neutral-900 rounded-xl p-6 text-white flex flex-col justify-between relative overflow-hidden group">
                              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-all duration-500"></div>
                              <div>
                                <span className="inline-block px-2 py-1 bg-primary-500/20 text-primary-300 text-[10px] font-bold uppercase tracking-widest rounded mb-3">
                                  Partner with us
                                </span>
                                <h4 className="text-lg font-bold mb-2">Ready to scale?</h4>
                                <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                                  Let our expert team handle your finances while you focus on what you do best.
                                </p>
                              </div>
                              <Button
                                size="sm"
                                className="w-full bg-white text-neutral-900 hover:bg-neutral-100 border-none text-xs font-bold"
                              >
                                Free Consultation
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <NavLink key={item.href} href={item.href}>
                    {item.name}
                  </NavLink>
                );
              })}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Button
                variant="primary"
                size="sm"
                className="hidden md:inline-flex bg-secondary-600 hover:bg-secondary-700"
                onClick={() => {
                  // Handle schedule call
                }}
              >
                Schedule a Call
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label="Open menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

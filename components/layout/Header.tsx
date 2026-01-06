"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NavLink } from "@/components/ui/NavLink";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Business Consulting", href: "/services/business-consulting" },
      { name: "Strategic Planning", href: "/services/strategic-planning" },
      { name: "Operations Optimization", href: "/services/operations" },
      { name: "Financial Advisory", href: "/services/financial" },
      { name: "Technology Consulting", href: "/services/technology" },
    ],
  },
  { name: "Solutions", href: "/solutions" },
  { name: "About", href: "/about" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showTopBanner, setShowTopBanner] = useState(true);
  const [hoveredService, setHoveredService] = useState(false);

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
                      onMouseEnter={() => setHoveredService(true)}
                      onMouseLeave={() => setHoveredService(false)}
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
                            hoveredService && "rotate-180"
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

                      {/* Dropdown Menu */}
                      {hoveredService && (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-neutral-200 py-2 z-50 animate-slide-down">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
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

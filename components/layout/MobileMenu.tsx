"use client";

import React, { useState } from "react";
import { NavLink } from "@/components/ui/NavLink";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Business Consulting", href: "/services" },
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

export const MobileMenu: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [expandedService, setExpandedService] = useState(false);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-200">
            <span className="text-lg font-semibold text-neutral-900">Menu</span>
            <button
              onClick={onClose}
              className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
              aria-label="Close menu"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto">
            {navigation.map((item) => {
              if (item.submenu) {
                return (
                  <div key={item.href}>
                    <button
                      onClick={() => setExpandedService(!expandedService)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between text-base font-medium border-b border-neutral-200 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 transition-colors"
                    >
                      <span>{item.name}</span>
                      <svg
                        className={cn(
                          "w-5 h-5 text-neutral-600 flex-shrink-0 transition-transform",
                          expandedService && "rotate-180"
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
                    </button>
                    {expandedService && (
                      <div className="bg-neutral-50 border-b border-neutral-200">
                        {item.submenu.map((subItem) => (
                          <div key={subItem.href} onClick={onClose}>
                            <Link
                              href={subItem.href}
                              className="block px-8 py-2.5 text-sm text-neutral-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <div key={item.href} onClick={onClose}>
                  <NavLink href={item.href} mobile>
                    {item.name}
                  </NavLink>
                </div>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="p-4 border-t border-neutral-200">
            <Button
              variant="primary"
              className="w-full bg-secondary-600 hover:bg-secondary-700"
              onClick={() => {
                onClose();
                // Handle schedule call action
              }}
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

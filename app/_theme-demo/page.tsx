"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export default function ThemeDemoPage() {
  return (
    <main className="min-h-screen">
      {/* Color Palette Demo */}
      <Section background="white" spacing="lg">
        <Container>
          <h1 className="text-4xl font-bold mb-2">Theme System Demo</h1>
          <p className="text-lg text-neutral-600 mb-12">
            This page demonstrates the theme system components and colors
          </p>

          {/* Primary Colors */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Primary Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                (shade) => (
                  <div key={shade} className="text-center">
                    <div
                      className={`h-20 w-full rounded-lg mb-2 bg-primary-${shade}`}
                    />
                    <p className="text-xs text-neutral-600">{shade}</p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Secondary Colors */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Secondary Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                (shade) => (
                  <div key={shade} className="text-center">
                    <div
                      className={`h-20 w-full rounded-lg mb-2 bg-secondary-${shade}`}
                    />
                    <p className="text-xs text-neutral-600">{shade}</p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Button Variants</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button variant="primary" size="sm">
                Small
              </Button>
              <Button variant="primary" size="md">
                Medium
              </Button>
              <Button variant="primary" size="lg">
                Large
              </Button>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Card Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <h3 className="text-xl font-semibold mb-2">Standard Card</h3>
                <p className="text-neutral-600">
                  This is a standard card component with default styling.
                </p>
              </Card>
              <Card hover>
                <h3 className="text-xl font-semibold mb-2">Hover Card</h3>
                <p className="text-neutral-600">
                  This card has hover effects enabled.
                </p>
              </Card>
              <Card className="bg-primary-50 border-primary-200">
                <h3 className="text-xl font-semibold mb-2">Custom Card</h3>
                <p className="text-neutral-600">
                  This card has custom background and border colors.
                </p>
              </Card>
            </div>
          </div>

          {/* Typography */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Typography</h2>
            <div className="space-y-4">
              <h1 className="text-5xl font-bold">Heading 1</h1>
              <h2 className="text-4xl font-semibold">Heading 2</h2>
              <h3 className="text-3xl font-semibold">Heading 3</h3>
              <h4 className="text-2xl font-semibold">Heading 4</h4>
              <h5 className="text-xl font-semibold">Heading 5</h5>
              <h6 className="text-lg font-semibold">Heading 6</h6>
              <p className="text-base text-neutral-700">
                This is a paragraph with base text styling. It demonstrates the
                default text color and line height.
              </p>
              <p className="text-lg text-neutral-600">
                This is a larger paragraph with lighter text color.
              </p>
            </div>
          </div>

          {/* Gradient Text */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Gradient Text</h2>
            <h1 className="text-5xl font-bold gradient-text mb-4">
              Gradient Heading
            </h1>
            <p className="text-lg text-neutral-600">
              Beautiful gradient text effect using CSS gradients
            </p>
          </div>

          {/* Responsive Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Responsive Grid</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} hover>
                  <div className="h-32 bg-primary-100 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-600">
                      {item}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2">Grid Item {item}</h3>
                  <p className="text-sm text-neutral-600">
                    Responsive grid that adapts to screen size
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}


import React from 'react';

interface SoftwareCategory {
    category: string;
    platforms: string[];
}

interface SoftwareGridProps {
    categories: SoftwareCategory[];
}

export function SoftwareGrid({ categories }: SoftwareGridProps) {
    return (
        <div className="space-y-8">
            {categories.map((category, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <h4 className="text-lg font-bold text-neutral-900 mb-4 flex items-center">
                        <span className="w-1 h-6 bg-primary-600 rounded-full mr-3"></span>
                        {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                        {category.platforms.map((platform, pIndex) => (
                            <span
                                key={pIndex}
                                className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-white text-neutral-700 border border-neutral-300 hover:border-primary-400 hover:bg-primary-50 hover:text-primary-700 transition-all shadow-sm hover:shadow-md"
                            >
                                {platform}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

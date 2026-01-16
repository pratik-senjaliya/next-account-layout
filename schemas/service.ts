import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'intro', title: 'Intro Section' },
        { name: 'details', title: 'Details' },
        { name: 'content', title: 'Main Content' },
        { name: 'seo', title: 'SEO' },
    ],
    fields: [
        // SEO
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo',
            group: 'seo',
        }),

        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            group: 'hero',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
            group: 'hero',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
            rows: 3,
            group: 'hero',
        }),
        defineField({
            name: 'longDescription',
            title: 'Long Description',
            type: 'text',
            rows: 4,
            group: 'hero',
        }),
        defineField({
            name: 'icon',
            title: 'Icon Name',
            type: 'string',
            description: 'Lucide icon name (e.g., "book", "users")',
            group: 'hero',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: { hotspot: true },
            group: 'hero',
        }),
        defineField({
            name: 'image',
            title: 'Intro Image',
            type: 'image',
            options: { hotspot: true },
            group: 'intro',
        }),
        defineField({
            name: 'introTitle',
            title: 'Intro Title',
            type: 'string',
            group: 'intro',
        }),
        defineField({
            name: 'introContent',
            title: 'Intro Content',
            type: 'text',
            group: 'intro',
        }),
        defineField({
            name: 'introStats',
            title: 'Intro Stats',
            type: 'array',
            of: [{ type: 'stat' }],
            group: 'intro',
        }),
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'feature' }],
            group: 'content',
        }),
        defineField({
            name: 'serviceAreas',
            title: 'Service Areas / Capabilities',
            type: 'array',
            group: 'content',
            of: [
                {
                    type: 'object',
                    name: 'serviceArea',
                    fields: [
                        defineField({ name: 'name', type: 'string', title: 'Name' }),
                        defineField({ name: 'focus', type: 'string', title: 'Focus' }),
                        defineField({
                            name: 'sections',
                            title: 'Sections',
                            type: 'array',
                            of: [{
                                type: 'object',
                                fields: [
                                    defineField({ name: 'title', type: 'string', title: 'Section Title' }),
                                    defineField({ name: 'tasks', type: 'array', title: 'Tasks', of: [{ type: 'string' }] })
                                ]
                            }]
                        })
                    ],
                },
            ],
        }),
        defineField({
            name: 'process',
            title: 'Process Steps',
            type: 'array',
            of: [{ type: 'processStep' }],
            group: 'content',
        }),
        defineField({
            name: 'whyChooseUs',
            title: 'Why Choose Us',
            type: 'array',
            of: [{ type: 'feature' }],
            group: 'content',
        }),
        defineField({
            name: 'testimonial',
            title: 'Testimonial',
            type: 'testimonial',
            group: 'content',
        }),
        defineField({
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            of: [{ type: 'faq' }],
            group: 'content',
        }),
    ],
})

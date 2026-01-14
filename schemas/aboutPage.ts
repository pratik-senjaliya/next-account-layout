import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'whatWeDo', title: 'What We Do' },
        { name: 'timeline', title: 'Timeline' },
        { name: 'mission', title: 'Mission' },
        { name: 'values', title: 'Values' },
    ],
    fields: [
        // Hero Section
        defineField({
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
            group: 'hero',
        }),
        defineField({
            name: 'heroTitleHighlight',
            title: 'Hero Title Highlight',
            type: 'string',
            group: 'hero',
        }),
        defineField({
            name: 'heroDescription',
            title: 'Hero Description',
            type: 'text',
            group: 'hero',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: { hotspot: true },
            group: 'hero',
        }),

        // What We Do
        defineField({
            name: 'whatWeDoTitle',
            title: 'What We Do Title',
            type: 'string',
            group: 'whatWeDo',
        }),
        defineField({
            name: 'whatWeDoDescription',
            title: 'What We Do Description',
            type: 'text',
            group: 'whatWeDo',
        }),
        defineField({
            name: 'stats',
            title: 'Stats',
            type: 'array',
            of: [{ type: 'stat' }],
            group: 'whatWeDo',
        }),

        // Timeline
        defineField({
            name: 'timelineTitle',
            title: 'Timeline Title',
            type: 'string',
            group: 'timeline',
        }),
        defineField({
            name: 'timelineEvents',
            title: 'Timeline Events',
            type: 'array',
            group: 'timeline',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'year', type: 'string', title: 'Year' }),
                        defineField({ name: 'event', type: 'text', title: 'Event Description' }),
                    ],
                },
            ],
        }),

        // Mission (Why We're Here)
        defineField({
            name: 'missionTitle',
            title: 'Mission Title',
            type: 'string',
            group: 'mission',
        }),
        defineField({
            name: 'missionDescription',
            title: 'Mission Description',
            type: 'array',
            of: [{ type: 'text' }], // Using array of text to support multiple paragraphs
            group: 'mission',
        }),
        defineField({
            name: 'missionEmphasis',
            title: 'Mission Emphasis',
            type: 'string',
            description: 'Bold text at the end of the mission section',
            group: 'mission',
        }),
        defineField({
            name: 'missionImage',
            title: 'Mission Image',
            type: 'image',
            options: { hotspot: true },
            group: 'mission',
        }),

        // Values
        defineField({
            name: 'valuesTitle',
            title: 'Values Title',
            type: 'string',
            group: 'values',
        }),
        defineField({
            name: 'valuesDescription',
            title: 'Values Description',
            type: 'text',
            group: 'values',
        }),
        defineField({
            name: 'values',
            title: 'Values List',
            type: 'array',
            group: 'values',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', type: 'string', title: 'Title' }),
                        defineField({ name: 'description', type: 'text', title: 'Description' }),
                    ]
                }
            ],
        }),
    ],
})

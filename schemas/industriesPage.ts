import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'industriesPage',
    title: 'Industries Page',
    type: 'document',
    fields: [
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo',
        }),
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            initialValue: 'Industries We Serve'
        }),
        defineField({
            name: 'description',
            title: 'Page Description',
            type: 'text',
            initialValue: "Specialized expertise across various sectors."
        })
    ],
})

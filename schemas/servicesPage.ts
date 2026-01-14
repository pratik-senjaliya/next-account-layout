import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'servicesPage',
    title: 'Services Page',
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
            initialValue: 'Our Services'
        }),
        defineField({
            name: 'description',
            title: 'Page Description',
            type: 'text',
            initialValue: "Comprehensive business solutions tailored to your needs."
        })
    ],
})

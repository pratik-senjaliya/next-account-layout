import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'hireStaffPage',
    title: 'Hire Staff Page',
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
            initialValue: 'Hire Featured Staff'
        }),
        defineField({
            name: 'description',
            title: 'Page Description',
            type: 'text',
            initialValue: "Find the perfect addition to your team."
        })
    ],
})

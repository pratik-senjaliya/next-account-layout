import { type SchemaTypeDefinition } from 'sanity'

// Objects
import faq from './objects/faq'
import feature from './objects/feature'
import testimonial from './objects/testimonial'
import processStep from './objects/processStep'
import stat from './objects/stat'
import seo from './objects/seo'

// Documents
import post from './post'
import service from './service'
import industry from './industry'
import hireStaff from './hireStaff'
import homePage from './homePage'
import aboutPage from './aboutPage'
import contactSubmission from './contactSubmission'
import contactPage from './contactPage'
import privacyPolicy from './privacyPolicy'

import blogPage from './blogPage'
import settings from './settings'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        // Objects
        faq,
        feature,
        testimonial,
        processStep,
        stat,
        seo,

        // Documents
        settings,
        homePage,
        aboutPage,
        service,
        hireStaff,
        industry,
        blogPage,
        post,
        contactPage,
        privacyPolicy,

        contactSubmission,
    ],
}

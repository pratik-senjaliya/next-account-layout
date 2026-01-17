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
import servicesPage from './servicesPage'
import industriesPage from './industriesPage'
import hireStaffPage from './hireStaffPage'
import privacyPolicy from './privacyPolicy'
import termsOfService from './termsOfService'

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
        post,
        service,
        industry,
        hireStaff,
        homePage,
        aboutPage,
        contactSubmission,
        contactPage,
        servicesPage,
        industriesPage,
        hireStaffPage,
        privacyPolicy,
        termsOfService,
    ],
}

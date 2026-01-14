import { type SchemaTypeDefinition } from 'sanity'

// Objects
import faq from './objects/faq'
import feature from './objects/feature'
import testimonial from './objects/testimonial'
import processStep from './objects/processStep'
import stat from './objects/stat'

// Documents
import post from './post'
import service from './service'
import industry from './industry'
import hireStaff from './hireStaff'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        // Objects
        faq,
        feature,
        testimonial,
        processStep,
        stat,

        // Documents
        post,
        service,
        industry,
        hireStaff,
    ],
}

import { Block } from 'payload/types';

  export const PortfolioHero: Block = {
    slug: 'portfoliohero',
    labels: {
        singular: 'Portfolio Hero',
        plural: 'Portfolio Heroes',
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
        {
            type: 'upload',
            name: 'media',
            relationTo: 'media',
            label: 'Thumbnail Media',
            hasMany: false,
            required: true,
        },
    ],
};

export const items = [
    {
        $type: 'DocumentReferenceResponseModel',
        id: 'simple-document-id',
        name: 'Simple Document',
        published: true,
        documentType: {
            alias: 'blogPost',
            icon: 'icon-document',
            name: 'Simple Document Type',
            id: 'simple-document-type-id',
        },
        variants: [],
    },
    {
        $type: 'DocumentReferenceResponseModel',
        id: '1234',
        name: 'Image Block',
        published: true,
        documentType: {
            alias: 'imageBlock',
            icon: 'icon-settings',
            name: 'Image Block',
            id: 'image-block-id',
        },
        variants: [],
    },
    {
        $type: 'MediaReferenceResponseModel',
        id: 'media-id',
        name: 'Simple Media',
        mediaType: {
            alias: 'image',
            icon: 'icon-picture',
            name: 'Image',
            id: 'media-type-id',
        },
    },
    {
        $type: 'DefaultReferenceResponseModel',
        id: 'default-id',
        name: 'Some other reference',
        type: 'Default',
        icon: 'icon-bug',
    },
];

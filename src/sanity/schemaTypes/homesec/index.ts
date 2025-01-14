export const homeContent = {
    name:'homecontent',
    title:'Home Content',
    type:'document',
    fields:[
        {
            name:'mainHeading',
            title:'Main Heading',
            type:'string'
        },
        {
            name:'paragraph',
            title:'Paragraph',
            type:'text'
        },
        {
            name:'content',
            title:'Hero Content',
            type:'text'
        },
        {
            name:'heroimg',
            title:'Hero Image',
            type:'image',
        },
        {
            name:'bulbimg',
            title:'Buld Image',
            type:'image'
        },
        {
            name:'personimage',
            title:'Person Image',
            type:'image'
        },
        {
            name:'buttonHero',
            title:'Button Hero',
            type:'string',
        },
        {
            name:'imglist',
            title:'Img List',
            type:'array',
            of:[{type:'object',

                fields:[
                    {
                        name:'id',
                        title:'ID',
                        type:'number'
                    },
                    {
                        name:'imgurl',
                        title:'Img',
                        type:'image'
                    }
                ]
            }
            ]
        },
        {
            name:'sideimage',
            title:'Side Image',
            type:'image',
        },
        {
            name:'newblogimage',
            title:'New Blog Image',
            type:'image',
        },
        {
            title:'Own Blog',
            name:'ownblog',
            type:'string',
        },
        {
            name:'howto',
            title:'How To',
            type:'string'
        },
        {
            name:'clickhere',
            title:'Click Here',
            type:'string'
        },
        {
            name:'noteimg',
            title:'Note Image',
            type:'image',
        },
        {
            name:'infoimg',
            title:'Info Image',
            type:'image',
        },
        {
            name:'infosubheading',
            title:'Info Sub Heading',
            type:'string'
        },
        {
            name:'infoheading',
            title:'Info Heading',
            type:'string'
        },
        {
            name:'infoparagraph',
            title:'Info Paragraph',
            type:'text'
        }

    ]
}
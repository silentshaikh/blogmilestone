export const headerSchema = {
    name:"headercontent",
    title:"Header Content",
    type:'document',
    fields:[
        {
            name:'navlist',
            title:'Navlist',
            type:'array',
            of:[{type:'object',
                fields:[
                    {
                        name:'itemid',
                        title:'Item ID',
                        type:'number'
                    },
                    {
                        name:'listitem',
                        title:'ListItem',
                        type:'string'
                    },
                    {
                        name:'itemlink',
                        title:'Item Link',
                        type:'string',
                    },
                ]
            }]
        },
        {
            name:'logo',
            title:'Logo',
            type:'image'
        }
    ]
}
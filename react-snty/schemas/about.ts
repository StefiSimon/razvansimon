export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'bioTitle',
      type: 'string',
      title: 'Biography Title',
    },
    {
      name: 'bioInfoList',
      type: 'array',
      title: 'Bio Info List',
      of: [
        {
          type: 'string',
          name: 'bioInfo',
          title: 'Bio Info',
        },
      ],
    },
    {
      name: 'soloExhTitle',
      type: 'string',
      title: 'Solo Exhibitions Title',
    },
    {
      name: 'soloExhList',
      type: 'array',
      title: 'Solo Exhibitions List',
      of: [
        {
          type: 'object',
          name: 'soloExh',
          title: 'Solo Exhibition',
          fields: [
            {
              type: 'string',
              name: 'year',
              title: 'Year',
            },
            {
              type: 'string',
              name: 'name',
              title: 'Name',
            },
            {
              type: 'string',
              name: 'location',
              title: 'Location',
            },
          ],
        },
      ],
    },
    {
      name: 'collExhTitle',
      type: 'string',
      title: 'Collective Exhibitions Title',
    },
    {
      name: 'collExhList',
      type: 'array',
      title: 'Collective Exhibitions List',
      of: [
        {
          type: 'object',
          name: 'collExh',
          title: 'Collective Exhibition',
          fields: [
            {
              type: 'number',
              name: 'year',
              title: 'Year',
            },
            {
              type: 'array',
              name: 'exhibitions',
              title: 'Exhibitions',
              of: [
                {
                  type: 'object',
                  name: 'collectiveExh',
                  title: 'Collective Exhibition',
                  fields: [
                    {
                      type: 'string',
                      name: 'name',
                      title: 'Name',
                    },
                    {
                      type: 'string',
                      name: 'location',
                      title: 'Location',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

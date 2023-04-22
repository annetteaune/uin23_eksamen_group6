export default {
  title: 'Game',
  name: 'game',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Gametitle',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      fields: [
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      name: 'slug',
      type: 'string',
      title: 'Slug',
    },
    {
      name: 'apiid',
      type: 'number',
      title: 'Api-id',
    },
    {
      name: 'hoursplayed',
      type: 'number',
      title: 'Hours-played',
    },
    {
      name: 'genre',
      type: 'reference',
      to: {type: 'genre'},
      title: 'Genre',
    },
    {
      name: 'favourited',
      type: 'boolean',
      title: 'Favourited',
    },
  ],
}

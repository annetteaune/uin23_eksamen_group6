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
      type: 'array',
      of: [{type: 'genre'}],
      title: 'Genre',
      type: 'reference',
      to: {type: 'genre'},
    },
    {
      name: 'favourited',
      type: 'boolean',
      title: 'Favourited',
    },
  ],
}
export default {
  title: 'Genre',
  name: 'genre',
  //setter objekt da de ikke trenger sitt eget felt i sanity, men kun velges i selve spillene
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Genre',
      
    },
  ],
}
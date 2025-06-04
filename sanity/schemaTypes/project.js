export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Project Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Project Image',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'link',
      type: 'url',
      title: 'Project Link',
    }
  ]
}


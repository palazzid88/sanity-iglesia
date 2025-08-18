export default {
  name: 'noticia',
  title: 'Noticia',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'imagen',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'enabled',
      title: 'Habilitado',
      type: 'boolean',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'titulo',
      media: 'imagen'
    }
  }
}

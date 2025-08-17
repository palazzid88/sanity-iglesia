// schemaTypes/anuncio.js
export default {
  name: 'anuncio',
  title: 'Anuncio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'link',
      title: 'Enlace',
      type: 'url',
      description: 'Por ejemplo, un enlace a WhatsApp o a un formulario'
    },
    {
      name: 'startDate',
      title: 'Fecha de inicio',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'endDate',
      title: 'Fecha de fin',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'enabled',
      title: 'Habilitado',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'priority',
      title: 'Prioridad',
      type: 'number',
      description: 'Mayor prioridad se muestra primero',
      initialValue: 0
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image'
    }
  }
}

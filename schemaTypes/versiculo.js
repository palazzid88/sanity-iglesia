export default {
  name: 'versiculo',
  title: 'Versículo del día',
  type: 'document',
  fields: [
    {
      name: 'texto',
      title: 'Texto del versículo',
      type: 'text',
      validation: Rule => Rule.required().min(10).max(500)
    },
    {
      name: 'referencia',
      title: 'Referencia bíblica',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'diaSemana',
      title: 'Día de la semana',
      type: 'string',
      options: {
        list: [
          { title: 'Lunes', value: 'lunes' },
          { title: 'Martes', value: 'martes' },
          { title: 'Miércoles', value: 'miercoles' },
          { title: 'Jueves', value: 'jueves' },
          { title: 'Viernes', value: 'viernes' },
          { title: 'Sábado', value: 'sabado' },
          { title: 'Domingo', value: 'domingo' }
        ],
        layout: 'dropdown'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'habilitado',
      title: 'Habilitado',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'orden',
      title: 'Orden',
      type: 'number',
      description: 'Por si querés definir qué versículo mostrar primero si hay más de uno activo.'
    }
  ],

  // Esto hace que en la vista de lista, se muestre el día de la semana como título
  preview: {
    select: {
      dia: 'diaSemana',
      texto: 'texto'
    },
    prepare(selection) {
      const { dia, texto } = selection
      return {
        title: dia ? dia.charAt(0).toUpperCase() + dia.slice(1) : 'Versículo',
        subtitle: texto ? `"${texto.substring(0, 50)}..."` : ''
      }
    }
  }
}

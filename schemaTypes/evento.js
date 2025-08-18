// schemaTypes/evento.js
export default {
  name: 'evento',
  title: 'Evento',
  type: 'document',
  fields: [
    {
      name: 'tipo',
      title: 'Tipo de evento',
      type: 'string',
      description: 'Selecciona el tipo de evento',
      options: {
        list: [
          { title: 'Reunión de adolescentes', value: 'adolescentes' },
          { title: 'Reunión de jóvenes', value: 'jovenes' },
          { title: 'Reunión de oración', value: 'oracion' },
          { title: 'Intercesión', value: 'intercesion' },
          { title: 'Culto general', value: 'culto' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'dia',
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
          { title: 'Domingo', value: 'domingo' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'horaInicio',
      title: 'Hora de inicio',
      type: 'string',
      description: 'Formato 24h, ej: 19:00',
      validation: Rule => Rule.required(),
    },
    {
      name: 'horaFin',
      title: 'Hora de fin',
      type: 'string',
      description: 'Formato 24h, ej: 22:00',
      validation: Rule => Rule.required(),
    },
    {
      name: 'suspendido',
      title: 'Suspendido',
      type: 'boolean',
      description: 'Marcar si el evento está suspendido temporalmente',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      tipo: 'tipo',
      dia: 'dia',
      horaInicio: 'horaInicio',
      horaFin: 'horaFin',
      suspendido: 'suspendido',
    },
    prepare(selection) {
      const { tipo, dia, horaInicio, horaFin, suspendido } = selection
      return {
        title: `${tipo} (${dia})`,
        subtitle: suspendido ? `SUSPENDIDA ${horaInicio} - ${horaFin}` : `${horaInicio} - ${horaFin}`,
      }
    },
  },
}

// schemaTypes/pedidosDeOracion.js
export default {
  name: 'pedidoDeOracion',
  title: 'Pedido de Oración',
  type: 'document',
  fields: [
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      validation: Rule => Rule.required().max(500).warning('No exceder 500 caracteres')
    },
    {
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'telefono',
      title: 'Teléfono de contacto',
      type: 'string',
      validation: Rule => Rule.optional()
    },
    {
      name: 'esMiembro',
      title: '¿Soy miembro de la iglesia?',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'otraIglesia',
      title: '¿Me congrego en otra iglesia?',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'ningunaIglesia',
      title: '¿No concurro a ninguna iglesia?',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'fechaEnvio',
      title: 'Fecha y hora de envío',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true
    },
    {
      name: 'enabled',
      title: 'Habilitado',
      type: 'boolean',
      initialValue: false,
      description: 'Debe ser activado por un moderador antes de mostrar en la web'
    }
  ],
  preview: {
    select: {
      title: 'descripcion',
      subtitle: 'nombre'
    }
  }
}

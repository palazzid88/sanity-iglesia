export default {
  name: "anexo",
  title: "Iglesias Anexas",
  type: "document",
  fields: [
    {
      name: "nombre",
      title: "Nombre del Anexo",
      type: "string",
    },
    {
      name: "direccion",
      title: "Dirección",
      type: "string",
    },
    {
      name: "ciudad",
      title: "Ciudad",
      type: "string",
    },
    {
      name: "telefono",
      title: "Teléfono de contacto",
      type: "string",
    },
    {
      name: "redes",
      title: "Redes Sociales",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "tipo",
              title: "Tipo de Red",
              type: "string",
              options: {
                list: [
                  { title: "Facebook", value: "facebook" },
                  { title: "WhatsApp", value: "whatsapp" },
                  { title: "Instagram", value: "instagram" },
                  { title: "TikTok", value: "tiktok" },
                  { title: "YouTube", value: "youtube" },
                ],
                layout: "dropdown",
              },
            },
            {
              name: "url",
              title: "Enlace / Número",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

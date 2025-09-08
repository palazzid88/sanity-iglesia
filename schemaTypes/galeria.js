// sanity/schemas/galeria.js
export default {
  name: "galeria",
  title: "Galería de Fotos",
  type: "document",
  fields: [
    {
      name: "titulo",
      title: "Título",
      type: "string",
    },
    {
      name: "imagenes",
      title: "Imágenes",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
  ],
};

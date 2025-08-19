// schemas/obrero.js
import { defineField, defineType } from "sanity";

export default defineType({
  name: "obrero",
  title: "Obrero",
  type: "document",
  fields: [
    defineField({
      name: "nombre",
      title: "Nombre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rol",
      title: "Rol / Ministerio",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imagen",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "orden",
      title: "Orden",
      type: "number",
      description: "Sirve para definir el orden de aparición en la lista",
    }),
  ],
  orderings: [
    {
      title: "Orden Ascendente",
      name: "ordenAsc",
      by: [{ field: "orden", direction: "asc" }],
    },
  ],
});

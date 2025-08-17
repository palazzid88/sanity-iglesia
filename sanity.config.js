import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'iglesia-project',

  projectId: 'gn5d09bw',
  dataset: 'iglesia',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'gn5d09bw',
    dataset: 'iglesia'
  },
    studioHost: 'iglesia-project', // 👈 esta línea fija el dominio
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})

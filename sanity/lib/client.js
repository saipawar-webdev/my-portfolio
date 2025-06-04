import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: 'v9evav88',
  dataset: 'production',
  apiVersion: '2023-06-01', // Use a specific date for the API version
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

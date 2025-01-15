import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: "skqQl5LN14NghuuuigSYKmaGDkOMRmj1TtnSOybc30IQSU54b1N8fbEciRAduq0VFsy01cnMHh6yqH42fV7kQwa5dKjJTw71KzMXdfIiPwxuUVAgCYTv2fntOFaLiLRl49g8JjKOlkp53hyV634x7SZJuM5aHAmnHTGqiOUTVErCV28dMril",
  
})

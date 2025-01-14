import { type SchemaTypeDefinition } from 'sanity'
import { headerSchema } from './header'
import { homeContent } from './homesec'
import { blogList } from './blog'
import { blogComment } from './comment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [headerSchema,homeContent,blogList,blogComment],
}

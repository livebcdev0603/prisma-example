import { QueryResolvers } from '../generated/graphqlgen'

export interface QueryParent {}

export const Query: QueryResolvers.Type = {
  feed: (parent, args, ctx) => ctx.db.posts({ where: { isPublished: true } }),
  drafts: (parent, args, ctx) =>
    ctx.db.posts({ where: { isPublished: false } }),
  post: (parent, args, ctx) => ctx.db.post({ id: args.id }),
}

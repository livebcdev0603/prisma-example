/* DO NOT EDIT! */
import { GraphQLResolveInfo } from 'graphql'
import { Context } from '../types'
import { UserNode } from './prisma-client'
import { PostNode } from './prisma-client'

export namespace QueryResolvers {
  export const defaultResolvers = {}

  export interface ArgsPost {
    id: string
  }

  export type FeedResolver = (
    parent: {},
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => PostNode[] | Promise<PostNode[]>

  export type DraftsResolver = (
    parent: {},
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => PostNode[] | Promise<PostNode[]>

  export type PostResolver = (
    parent: {},
    args: ArgsPost,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => PostNode | null | Promise<PostNode | null>

  export interface Type {
    feed: (
      parent: {},
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => PostNode[] | Promise<PostNode[]>

    drafts: (
      parent: {},
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => PostNode[] | Promise<PostNode[]>

    post: (
      parent: {},
      args: ArgsPost,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => PostNode | null | Promise<PostNode | null>
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {}

  export interface ArgsCreateDraft {
    title: string
    content: string
    authorEmail: string
  }

  export interface ArgsDeletePost {
    id: string
  }

  export interface ArgsPublish {
    id: string
  }

  export type CreateDraftResolver = (
    parent: {},
    args: ArgsCreateDraft,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => PostNode | Promise<PostNode>

  export type DeletePostResolver = (
    parent: {},
    args: ArgsDeletePost,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => PostNode | null | Promise<PostNode | null>

  export type PublishResolver = (
    parent: {},
    args: ArgsPublish,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => PostNode | null | Promise<PostNode | null>

  export interface Type {
    createDraft: (
      parent: {},
      args: ArgsCreateDraft,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => PostNode | Promise<PostNode>

    deletePost: (
      parent: {},
      args: ArgsDeletePost,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => PostNode | null | Promise<PostNode | null>

    publish: (
      parent: {},
      args: ArgsPublish,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => PostNode | null | Promise<PostNode | null>
  }
}

export namespace PostResolvers {
  export const defaultResolvers = {
    id: parent => parent.id,
    createdAt: parent => parent.createdAt,
    updatedAt: parent => parent.updatedAt,
    isPublished: parent => parent.isPublished,
    title: parent => parent.title,
    content: parent => parent.content,
  }

  export type IdResolver = (
    parent: PostNode,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type CreatedAtResolver = (
    parent: PostNode,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type UpdatedAtResolver = (
    parent: PostNode,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IsPublishedResolver = (
    parent: PostNode,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type TitleResolver = (
    parent: PostNode,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type ContentResolver = (
    parent: PostNode,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type AuthorResolver = (
    parent: PostNode,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => UserNode | Promise<UserNode>

  export interface Type {
    id: (
      parent: PostNode,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    createdAt: (
      parent: PostNode,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    updatedAt: (
      parent: PostNode,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    isPublished: (
      parent: PostNode,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>

    title: (
      parent: PostNode,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    content: (
      parent: PostNode,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    author: (
      parent: PostNode,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => UserNode | Promise<UserNode>
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: parent => parent.id,
    name: parent => parent.name,
    email: parent => parent.email,
  }

  export type IdResolver = (
    parent: UserNode,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type EmailResolver = (
    parent: UserNode,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type NameResolver = (
    parent: UserNode,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type PostsResolver = (
    parent: UserNode,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => PostNode[] | Promise<PostNode[]>

  export type CreatedAtResolver = (
    parent: UserNode,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type {
    id: (
      parent: UserNode,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    email: (
      parent: UserNode,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    name: (
      parent: UserNode,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    posts: (
      parent: UserNode,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => PostNode[] | Promise<PostNode[]>

    createdAt: (
      parent: UserNode,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type
  Mutation: MutationResolvers.Type
  Post: PostResolvers.Type
  User: UserResolvers.Type
}

<br />

<div align="center">
  <h1>Prisma Examples</h1>
  <p><h3 align="center">Ready-to-run Prisma example projects 🚀</h3></p>
  <a href="https://www.prisma.io/">Website</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://www.prisma.io/docs/">Docs</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://www.prisma.io/blog">Blog</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://pris.ly/discord/">Discord</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://twitter.com/prisma">Twitter</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://www.youtube.com/watch?v=0RhtQgIs-TE&list=PLn2e1F9Rfr6k9PnR_figWOcSHgc_erDr5&index=1">Demo videos</a>
</div>

<hr>

<div align="center">

[![test](https://github.com/prisma/prisma-examples/workflows/test/badge.svg?branch=latest)](https://github.com/prisma/prisma-examples/actions?query=workflow%3Atest+branch%3Alatest)
[![keep-prisma-dependencies-updated](https://github.com/prisma/prisma-examples/workflows/keep-prisma-dependencies-updated/badge.svg)](https://github.com/prisma/prisma-examples/actions?query=workflow%3Akeep-prisma-dependencies-updated)
[![keep-dev-branches-in-sync-with-latest](https://github.com/prisma/prisma-examples/workflows/keep-dev-branches-in-sync-with-latest/badge.svg)](https://github.com/prisma/prisma-examples/actions?query=workflow%3Akeep-dev-branches-in-sync-with-latest)

[View full CI status](#ci-status)

</div>

<hr>

This repository contains a number of ready-to-run example projects demonstrating various use cases of Prisma. Pick an example and follow the instructions in the corresponding README.

You can also find links to [real-world and production ready examples](#real-world--production-ready-example-projects-with-prisma) further below in this README.

Are you missing an example? Please feel free to [open an issue](https://github.com/prisma/prisma-examples/issues/new) (read the [contribution guidelines](./CONTRIBUTING.md) for more info).

<!-- Please keep the absolute URLs so it's easier to copy&paste to prisma/prisma/README.md  -->

## Prisma Accelerate

The [`accelerate`](./accelerate) folder contains examples of projects using [Prisma Accelerate](https://www.prisma.io/data-platform/accelerate) for connection pooling and global caching.

| Demo                                                                   | Description                                                              |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`nextjs-starter`](./accelerate/nextjs-starter) | A Next.js project using Prisma Accelerate's caching and connection pooling |

## Prisma Pulse

The [`pulse`](./pulse) folder contains examples of projects using [Prisma Pulse](https://www.prisma.io/data-platform/pulse) to listen to real-time database change events.

| Demo                                                                   | Description                                                              |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`starter`](./pulse/starter)                     | A Prisma Pulse starter app                                               |
| [`email-with-resend`](./pulse/email-with-resend) | An example app to send emails to new users using Prisma Pulse and Resend |
| [`fullstack-leaderboard`](./pulse/fullstack-leaderboard) | A live leaderboard (built with Next.js)    |
| [`fullstack-simple-chat`](./pulse/fullstack-simple-chat) | A simple chat app (built with Next.js & Express) |
| [`product-search-with-typesense`](./pulse/product-search-with-typesense) | A cron job that syncs data into Typesense (built with Hono.js) |


## Prisma ORM (TypeScript)

### Fullstack

| Demo                                                                   | Description                                                              |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`rest-nextjs-api-routes`](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-nextjs-api-routes)           | [Next.js](https://nextjs.org/) app with a REST API (using [Next.js API routes](https://nextjs.org/docs/api-routes/introduction))                                                                     |
| [`rest-nextjs-api-routes-auth`](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-nextjs-api-routes-auth) | [Next.js](https://nextjs.org/) app with a REST API (using [Next.js API routes](https://nextjs.org/docs/api-routes/introduction)) and authentication (using [NextAuth.js](https://next-auth.js.org/)) |
| [`rest-nextjs-express`](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-nextjs-express)                 | [Next.js](https://nextjs.org/) app with a REST API (using [Express](https://expressjs.com/))                                                                                                         |
| [`rest-nuxtjs`](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-nuxtjs)                                 | [Nuxt.js](https://nuxt.com/) app with a REST API                                                                                                                                                     |
| [`graphql-nextjs`](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-nextjs)                           | [Next.js](https://nextjs.org/) app with a GraphQL API (using [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server) and [Pothos](https://pothos-graphql.dev/))            |
| [`rest-sveltekit`](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-sveltekit)                           | [SvelteKit](https://kit.svelte.dev/) app with a REST API                                                                                                                                             |
| [`sveltekit`](https://github.com/prisma/prisma-examples/tree/latest/typescript/sveltekit)                                     | [SvelteKit](https://kit.svelte.dev/) app using SvelteKit's [actions](https://kit.svelte.dev/docs/form-actions) and [load](https://kit.svelte.dev/docs/form-actions#loading-data) functions           |     | [SvelteKit](https://kit.svelte.dev/) app using SvelteKit's [actions](https://kit.svelte.dev/docs/form-actions) and [load](https://kit.svelte.dev/docs/form-actions#loading-data) functions |
| [`trpc-nextjs`](https://github.com/prisma/prisma-examples/tree/latest/typescript/trpc-nextjs)                                 | [Next.js](https://nextjs.org/) app with [tRPC ](https://trpc.io/)                                                                                                                                    |
| [`remix`](https://github.com/prisma/prisma-examples/tree/latest/typescript/remix)                                             | [Remix](https://remix.run/) app                                                                                                                                                                      |

### Backend only

| Demo                                                                                                                      | Description                                                                                                                                                                                       |
| :------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`graphql-apollo-server`](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-nexus)                 | GraphQL server based on [`@apollo/server`](https://www.apollographql.com/docs/apollo-server/) and [Nexus Schema](https://github.com/graphql-nexus/schema)                                         |
| [`graphql-auth`](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-auth)                           | GraphQL server with email-password authentication & permissions                                                                                                                                   |
| [`graphql-sdl-first`](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-sdl-first)                 | GraphQL server based on [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server)                                                                                                                 |
| [`graphql-subscriptions`](https://github.com/prisma/prisma-examples/tree/latest/typescript/subscriptions-pubsub)          | GraphQL server with realtime subscriptions based on [`apollo-server`](https://www.apollographql.com/docs/apollo-server/) and [Nexus Schema](https://github.com/graphql-nexus/schema)              |
| [`graphql-typegraphql`](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-typegraphql)             | GraphQL server based on [`@apollo/server`](https://www.apollographql.com/docs/apollo-server) and [TypeGraphQL](https://github.com/MichalLytek/type-graphql)                                       |
| [`graphql-typegraphql-crud`](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-typegraphql-crud)   | CRUD GraphQL API based on [`@apollo/server`](https://www.apollographql.com/docs/apollo-server) and [TypeGraphQL](https://github.com/MichalLytek/type-graphql)                                     |
| [`graphql-fastify`](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-fastify)                     | GraphQL server based on [Fastify](https://fastify.io/), [Mercurius](https://mercurius.dev/), and the SDL-first approach of [`graphql-tools`](https://www.graphql-tools.com/docs/generate-schema/) |
| [`graphql-fastify-sdl-first`](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-fastify-sdl-first) | GraphQL server based on [Fastify](https://fastify.io/), [Mercurius](https://mercurius.dev/), and the SDL-first approach of [`graphql-tools`](https://www.graphql-tools.com/docs/generate-schema/) |
| [`graphql-hapi`](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-hapi)                           | GraphQL server based on [Hapi](https://hapi.dev/) and [Nexus Schema](https://github.com/graphql-nexus/schema)                                                                                     |
| [`graphql-hapi-sdl-first`](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-hapi-sdl-first)       | GraphQL server based on [Hapi](https://hapi.dev/) and the SDL-first approach of [Apollo Server Integration for Hapi](https://www.npmjs.com/package/@as-integrations/hapi)                         |
| [`graphql-nestjs`](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-nestjs)                       | GraphQL server based on [NestJS](https://nestjs.com/) (code-first)                                                                                                                                |
| [`graphql-nestjs-sdl-first`](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-nestjs-sdl-first)   | GraphQL server based on [NestJS](https://nestjs.com/) and the SDL-first approach of [`graphql-tools`](https://www.apollographql.com/docs/graphql-tools/)                                          |
| [`graphql`](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql)                                     | GraphQL server based on [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server) and [Pothos](https://pothos-graphql.dev/)                                                                       |
| [`graphql-nexus`](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-nexus)                         | GraphQL server based on [`@apollo/server`](https://www.apollographql.com/docs/apollo-server) and [Nexus Schema](https://github.com/graphql-nexus/schema)                                          |
| [`grpc`](https://github.com/prisma/prisma-examples/tree/latest/typescript/grpc)                                           | gRPC API including runnable client scripts for testing                                                                                                                                            |
| [`postgis-express`](https://github.com/prisma/prisma-examples/tree/latest/typescript/postgis-express)                     | Demo of spatial queries using [Postgis](http://postgis.net/) and [Express](https://expressjs.com/)                                                                                                |
| [`rest-express`](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-express)                           | REST API with [Express](https://expressjs.com/)                                                                                                                                                   |
| [`rest-fastify`](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-fastify)                           | REST API with [Fastify](https://www.fastify.io/)                                                                                                                                                  |
| [`rest-koa`](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-koa)                                   | REST API with [Koa](https://koajs.com/)                                                                                                                                                           |
| [`rest-hapi`](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-hapi)                                 | REST API with [hapi](https://hapi.dev/)                                                                                                                                                           |
| [`rest-nestjs`](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-nestjs)                             | REST API with [NestJS](https://docs.nestjs.com/)                                                                                                                                                  |
| [`script`](https://github.com/prisma/prisma-examples/tree/latest/typescript/script)                                       | Usage of Prisma Client JS in a TypeScript script                                                                                                                                                  |
| [`testing-express`](https://github.com/prisma/prisma-examples/tree/latest/typescript/testing-express)                     | Demo of integration tests with [Jest](https://jestjs.io/), [Supertest](https://github.com/visionmedia/supertest) and [Express](https://expressjs.com/)                                            |

## Prisma ORM (JavaScript / Node.js)

### Fullstack

| Demo                                                                                                | Description                                                                                                                      |
| :-------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| [`rest-nextjs`](https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-nextjs)       | [Next.js](https://nextjs.org/) app with a REST API (using [Next.js API routes](https://nextjs.org/docs/api-routes/introduction)) |
| [`rest-nuxtjs`](https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-nuxtjs)       | [NuxtJS](https://nuxtjs.org/) app with a REST API                                                                                |
| [`rest-sveltekit`](https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-sveltekit) | [SvelteKit](https://kit.svelte.dev/) app with a REST API                                                                         |

### Backend only

| Demo                                                                                                              | Description                                                                                   |
| :---------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| [`graphql-apollo-server`](https://github.com/prisma/prisma-examples/tree/latest/javascript/graphql-apollo-server) | GraphQL server based on [`@apollo/server`](https://www.apollographql.com/docs/apollo-server/) |
| [`graphql-auth`](https://github.com/prisma/prisma-examples/tree/latest/javascript/graphql-auth)                   | GraphQL server with email-password authentication & permissions                               |
| [`graphql-sdl-first`](https://github.com/prisma/prisma-examples/tree/latest/javascript/graphql-sdl-first)         | GraphQL server based on [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server)             |
| [`grpc`](https://github.com/prisma/prisma-examples/tree/latest/javascript/grpc)                                   | gRPC API including runnable client scripts for testing                                        |
| [`rest-express`](https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-express)                   | REST API with [Express](https://expressjs.com/)                                               |
| [`rest-fastify`](https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-fastify)                   | REST API with [Fastify](https://www.fastify.io/)                                              |
| [`rest-koa`](https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-koa)                           | REST API with [Koa](https://koajs.com/)                                                       |
| [`script`](https://github.com/prisma/prisma-examples/tree/latest/javascript/script)                               | Usage of Prisma Client JS in a Node.js script                                                 |


## Deployment platforms

The projects in the [`deployment-platforms`](./deployment-platforms) directory show what "Prisma Client"-based deployment setups look like for various deployment providers. Learn more about [deployment](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/deployment) in the Prisma documentation.

## Real-world & production-ready example projects with Prisma

- [Inbox Zero](https://github.com/pdovhomilja/nextcrm-app): Open source email management tools to reach inbox zero fast
- [NextCRM](https://github.com/pdovhomilja/nextcrm-app): An open-source Customer Relationship Management system (CRM)
- [Papermark](https://github.com/mfts/papermark/): An open-source DocSend alternative with built-in analytics and custom domains
- [Hoppscotch](https://github.com/hoppscotch/hoppscotch): An open-source API development ecosystem
- [FeastQR](https://github.com/jakubczarnowski/FeastQR): An open-source SaaS online menu system for restaurants
- [Formbricks](https://github.com/formbricks/formbricks): An open-source survey and experience management tool
- [OpenformStack](https://github.com/naveennaidu/OpenformStack): An open-source form backend that allows you to collect form submissions without writing any backend code
- [Documenso](https://documenso.com/): An open-source alternative to Docusign
- [abby](https://github.com/tryabby/abby): An open-source feature flag, remote config and A/B testing platform for developers
- [ghostfolio](https://ghostfol.io/en/start): An open-source dashboard for your personal finances
- [revert](https://www.revert.dev/): An open-source unified API to build B2B product integrations
- [Scholarsome](https://scholarsome.com/): An interactive, studying system
- [Dittofeed](https://www.dittofeed.com): An open-source customer engagement; intuitive marketing tools that scale
- [Trigger.dev](https://trigger.dev/): Effortless automation built for developers (Zapier alternative)
- [Webstudio](https://github.com/webstudio-is/webstudio-designer): A NoCode visual design tool for building apps and websites
- [Dyrector](https://github.com/dyrector-io/dyrectorio): A self-hosted container management platform
- [reduced.to](https://github.com/origranot/reduced.to): An open-source link shortener
- [Linen](https://github.com/Linen-dev/linen.dev): An open-source alternative to Slack and Discord with lots of great features
- [Coolify](https://github.com/coollabsio/coolify): An open-source & self-hostable Heroku / Netlify alternative
- [Dub.co](https://dub.co): An open-source link management platform for modern marketing teams
- [Umami](https://github.com/mikecao/umami): A simple, fast, privacy-focused alternative to Google Analytics
- [Rallly](https://github.com/lukevella/rallly): A self-hostable doodle poll alternative (based on Next.js, tRPC, and TailwindCSS)
- [Typebot](https://github.com/baptisteArno/typebot.io): A conversational form builder that you can self-host
- [Cal.com](https://github.com/calcom/cal.com): An open-source alternative to Calendly (calender-based event scheduling service)
- [Beam](https://github.com/planetscale/beam): A simple tool that allows members to write posts to share across your organization (based on Next.js)
- [Dundring](https://github.com/sivertschou/dundring): An in-browser training application created to control and track you training with a smart bike trainer
- [Expense.fyi](https://github.com/gokulkrishh/expense.fyi): A tool for tracking and managing expenses
- [Letterpad](https://github.com/letterpad/letterpad): A publishing platform for creatives
- [Teable](https://github.com/teableio/teable): A no-code real-time database built on Postgres with a simple interface for enterprise-level app development.
<hr>

## Starter kits

- [T3 stack](https://create.t3.gg/): Starter kit based on Next.js, TypeScript, tRPC, Prisma, Tailwind CSS and NextAuth.js
- [Indie Stack](https://github.com/remix-run/indie-stack): Remix Stack for deploying to Fly with SQLite, authentication, testing, linting, formatting
- [Blues Stack](https://github.com/remix-run/blues-stack): Remix Stack for deploying to Fly with PostgreSQL, authentication, testing, linting, formatting

## About this repository

The `latest` branch of this repository contains the examples with the latest stable version of Prisma CLI and Prisma Client (`@latest` on npm). These dependencies are kept up to date with a GitHub Action workflow, which updates them every time a new version of Prisma is released.

There are also the automated branches `dev` and `patch-dev`, which mirror the code from `latest` (synced via a GitHub Action workflow), but they use the respective development channels of Prisma CLI and Prisma Client from npm instead (`@dev` and `@patch-dev`, also updated via a GitHub Action workflow). Thanks to the test coverage of all projects, this can point us to incompatibilities early.

## Security

If you have a security issue to report, please contact us at [security@prisma.io](mailto:security@prisma.io?subject=[GitHub]%20Prisma%202%20Security%20Report%20Examples)

## CI status

| CI Status                                                                                                                                                                                              | Branch      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| [![test latest](https://github.com/prisma/prisma-examples/workflows/test/badge.svg?branch=latest)](https://github.com/prisma/prisma-examples/actions?query=workflow%3Atest+branch%3Alatest)            | `latest`    |
| [![test dev](https://github.com/prisma/prisma-examples/workflows/test/badge.svg?branch=dev)](https://github.com/prisma/prisma-examples/actions?query=workflow%3Atest+-branch%3Apatch-dev+branch%3Adev) | `dev`       |
| [![test patch-dev](https://github.com/prisma/prisma-examples/workflows/test/badge.svg?branch=patch-dev)](https://github.com/prisma/prisma-examples/actions?query=workflow%3Atest+branch%3Apatch-dev)   | `patch-dev` |

| CI Status                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![keep-prisma-dependencies-updated](https://github.com/prisma/prisma-examples/workflows/keep-prisma-dependencies-updated/badge.svg)](https://github.com/prisma/prisma-examples/actions?query=workflow%3Akeep-prisma-dependencies-updated)                |
| [![keep-dev-branches-in-sync-with-latest](https://github.com/prisma/prisma-examples/workflows/keep-dev-branches-in-sync-with-latest/badge.svg)](https://github.com/prisma/prisma-examples/actions?query=workflow%3Akeep-dev-branches-in-sync-with-latest) |

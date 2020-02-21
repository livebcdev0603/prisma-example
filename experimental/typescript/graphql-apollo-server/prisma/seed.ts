import { Photon } from '@prisma/photon'
const photon = new Photon()

async function main() {
  const user1 = await photon.users.create({
    data: {
      email: 'alice@prisma.io',
      name: 'Alice',
      posts: {
        create: {
          title: 'Join us for GraphQL Conf 2019 in Berlin',
          content: 'https://www.graphqlconf.org/',
          published: true,
        },
      },
    },
  })
  const user2 = await photon.users.create({
    data: {
      email: 'bob@prisma.io',
      name: 'Bob',
      posts: {
        create: [
          {
            title: 'Subscribe to GraphQL Weekly for community news',
            content: 'https://graphqlweekly.com/',
            published: true,
          },
          {
            title: 'Follow Prisma on Twitter',
            content: 'https://twitter.com/prisma/',
            published: false,
          },
        ],
      },
    },
  })
  console.log({ user1, user2 })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await photon.disconnect()
  })

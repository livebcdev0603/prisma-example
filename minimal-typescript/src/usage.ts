import { Prisma } from '../generated/prisma'
;(async () => {
  const prisma = new Prisma()

  const result = await prisma.query.cats()

  console.log(result)
})()

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const result = await prisma.blog.upsert({
    where: { id: '1' },
    update: {},
    create: {
      title: "How to Make Your Website Link Look Amazing on Social Media?",
      author: "Mani",
      createdAt: new Date(),
      image_public_id: "next-cloudinary-uploads/q3joxrqyjkbnoxlw1n61",
      content: "https://medium.com/@chandramanigupta2003/how-to-make-your-website-link-look-amazing-on-social-media-800acfa0aec6",
    },
  })
  console.log({ result })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
import { prisma } from "@/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "joao",
        email: "joao@gmail.com"
      },
      {
        name: "flavio",
        email: "flavio@gmail.com"
      },
    ]
  })
}

seed.then(() => {
  console.log("Data injection concluded!")
  prisma.$disconnect()
})
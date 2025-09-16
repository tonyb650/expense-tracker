import { currentUser } from "@clerk/nextjs/server";
import prisma from "./db";


export const checkUser = async () => {
  const user = await currentUser()
  console.log(user)

  //Check for current logged in Clerk user
  if (!user) {
    return null
  }

  // Check if user is already in the DB
  const loggedInUser = await prisma.user.findUnique({where: {clerkUserId: user.id}})

  // If user is in DB, then return user
  if (loggedInUser) {
    return loggedInUser
  }

  const newUser = await prisma.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    }
  })

  return newUser
}
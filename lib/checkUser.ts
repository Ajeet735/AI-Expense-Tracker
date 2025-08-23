import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";
import { users } from "@/configs/schema";
import { eq } from "drizzle-orm";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  // 1. Check if user already exists
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.clerkUserId, user.id));

  if (existingUser.length > 0) {
    return existingUser[0]; // return the first (and only) match
  }

  // 2. Create a new user if not exists
  const newUser = await db
    .insert(users)
    .values({
      id: crypto.randomUUID(), // Drizzle requires an id (since primary key is manual)
      clerkUserId: user.id,
      name: `${user.firstName ?? ""} ${user.lastName ?? ""}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0]?.emailAddress ?? "",
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .returning(); // get inserted row back

  return newUser[0];
};

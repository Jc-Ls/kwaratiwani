"use server";

import { db } from "../db";
import { volunteers, ideas } from "../db/schema";

export async function submitVolunteer(formData: FormData) {
  try {
    await db.insert(volunteers).values({
      fullName: formData.get("fullName") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      emailAddress: formData.get("emailAddress") as string,
      lga: formData.get("lga") as string,
      supportType: formData.get("supportType") as string,
    });
    return { success: true };
  } catch (error) {
    console.error("Database Insert Error:", error);
    return { success: false };
  }
}

export async function submitIdea(formData: FormData) {
  try {
    await db.insert(ideas).values({
      name: (formData.get("name") as string) || "Anonymous",
      lga: formData.get("lga") as string,
      suggestion: formData.get("suggestion") as string,
    });
    return { success: true };
  } catch (error) {
    console.error("Database Insert Error:", error);
    return { success: false };
  }
}

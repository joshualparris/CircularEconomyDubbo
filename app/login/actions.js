"use server";
import { redirect } from "next/navigation";
import { createSession, roleForCode } from "@/lib/auth";

export async function login(formData){
  const code=String(formData.get("code")||"").trim();
  const role=roleForCode(code);
  if(!role) redirect("/login?error=That%20access%20code%20was%20not%20recognised.");
  await createSession(role);
  redirect("/internal");
}

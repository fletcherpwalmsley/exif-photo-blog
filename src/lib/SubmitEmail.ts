"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type State = { error: string } | { data: string };

export async function SubmitEmail(prevState: State, formData: FormData) {
  const email = formData.get("email") as string;

  const { data, error } = await resend.contacts.create({
    email: email,
    unsubscribed: false,
    audienceId: process.env.RESEND_AUDIENCE_ID || "",
  });

  if (error) {
    return { error: error.message };
  }

  console.log(data);

  return { data: "Contact added!" };
}
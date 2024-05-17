"use server";
import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend("re_4BKCu5uX_Lc8VgihresCMVwvBsAED315i");

export default async function sendEmail() {
  console.log("reached");
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["muath.khalifa@yahoo.com"],
    subject: "Hello world",
    text: "Muath but test",
    react: EmailTemplate({ firstName: "Muath" }),
  });

  if (error) {
    return;
  }
}

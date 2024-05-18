"use server";
import { EmailTemplate } from "@/components/EmailTemplate";
import { ReactNode } from "react";
import { Resend } from "resend";

const resend = new Resend("re_4BKCu5uX_Lc8VgihresCMVwvBsAED315i");

interface EmailOptions {
  type: "contact" | "certificate";
  to?: string[];
  from?: string;
  subject?: string;
  fullName?: string;
  email?: string;
  message?: string;
  firstName?: string;
  secondName?: string;
  score?: number;
  imageData?: string;
}

type emailContentType = {
  from: string;
  to: string | string[];
  subject: string;
  text?: string;
  react?: ReactNode;
  html?: string;
};

export default async function sendEmail(options: EmailOptions) {
  let emailContent: emailContentType = {
    from: options.from || "onboarding@resend.dev",
    to: options.to || "muath.khalifa@yahoo.com",
    subject: options.subject || "No Subject",
  };

  // if the type of email we want to send is a certificate, and all information like firstname, second and score are present.
  if (options.type === "certificate" && options.score !== undefined) {
    emailContent = {
      ...emailContent,
      // text: `Congratulations ${options.firstName} ${options.secondName}, you scored ${options.score}!`,
      // react: reactContent,
      html: `<p>Congratulations ${options?.firstName || ""} ${
        options?.secondName || ""
      },</p>
      <p>You have achieved a score of ${
        options?.score
      } in your recent assessment.</p>
      <p>Well done on your achievement!</p>`,
    };

    // this if for the contactUs page, if all information are present.
  } else if (
    options.type === "contact" &&
    options.fullName &&
    options.email &&
    options.message
  ) {
    emailContent = {
      ...emailContent,
      text: `Message from ${options.fullName} (${options.email}): ${options.message}`,
      // react: BellCurve,
    };
  } else {
    throw new Error("Invalid email options provided");
  }

  const { data, error } = await resend.emails.send(emailContent as any); // this is fine, we know what we're getting.

  if (error) {
    console.error("Failed to send email", error);
    return { success: false, error };
  }

  return { success: true, data };
}

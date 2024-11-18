import React from "react";
import { NextResponse } from "next/server";
import { render } from "@react-email/render";

import ContactFormEmail from "@/emails/ContactMeEmail";
import { mailOptions, transporter } from "@/app/config/nodemailer";

interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: Request) {
  const { firstname, lastname, email, phone, message }: ContactFormData =
    await request.json();

  try {
    const emailHtml = await render(
      React.createElement(ContactFormEmail, {
        firstname,
        lastname,
        email,
        phone,
        message,
      })
    );

    await transporter.sendMail({
      ...mailOptions,
      subject: `New Contact Form Submission from ${firstname} ${lastname}`,
      html: emailHtml,
      replyTo: email,
    });

    return NextResponse.json(
      { message: "Contact form email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending contact form email:", error);
    return NextResponse.json(
      { error: "Failed to send contact form email" },
      { status: 500 }
    );
  }
}

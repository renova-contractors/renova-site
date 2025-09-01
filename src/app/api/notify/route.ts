import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "michaelyevt@gmail.com",
      pass: "nlppofcozujretze",
    },
  });

  const { name, number, comments } = data;

  const message = `
📨 New Contact Form Submission
Name: ${name}
Phone: ${number}
Message: ${comments}
  `;

  const htmlMessage = `
    <h3>📨 New Contact Form Submission</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> <a href="tel:${number}">${number}</a></p>
    <p><strong>Message:</strong> ${comments}</p>
  `;

  const mailOptions = {
    from: "michaelyevt@gmail.com",
    to: "michaelyevt@gmail.com",
    subject: "📨 New Form Submission",
    text: message.trim(),
    html: htmlMessage,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

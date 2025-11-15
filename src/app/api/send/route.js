import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return new Response(JSON.stringify({ message: "Missing fields" }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject,
      text: `From: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } 
  catch (error) {
    console.error("send-email error:", error);
    return new Response(JSON.stringify({ message: "Failed to send email", error: String(error) }), { status: 500 });
  }
}

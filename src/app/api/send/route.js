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
        user: process.env.USER,
        pass: process.env.APP_PASSWORD, 
      },
    });
    const mailOptions = {
      from: process.env.USER,      
      to: process.env.USER,        
      subject,
      text: `From: ${email}\n\nMessage:\n${message}`,
      replyTo: email,               
    };
    await transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
      console.error("Error sending email:", err);
      } else {
      console.log("Email sent info:", info);
      }
    });
    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } 
  catch (error) {
    console.error("send-email error:", error);
    return new Response(JSON.stringify({ message: "Failed to send email", error: String(error) }), { status: 500 });
  }
}


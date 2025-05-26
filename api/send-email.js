import { Resend } from "resend";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ message: "Method Not Allowed" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, subject, message } = request.body;

  if (!name || !email || !subject || !message) {
    return response.status(400).json({ message: "All fields are required" });
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["sahrulrmdh3@gmail.com"],
      subject: `Pesan Baru dari ${name}: ${subject}`,
      reply_to: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Pesan Baru dari Portfolio Anda</h2>
          <p><strong>Dari:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subjek:</strong> ${subject}</p>
          <hr>
          <h3>Isi Pesan:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    return response.status(200).json({ message: "Message sent successfully", data });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Failed to send message" });
  }
}

// Gunakan 'require' karena ini adalah lingkungan Node.js
const { Resend } = require("resend");

// Handler default untuk Vercel Serverless Function
export default async function handler(request, response) {
  // Hanya izinkan metode POST
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
        <h1>Pesan Baru dari Website Portfolio</h1>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subjek:</strong> ${subject}</p>
        <hr />
        <p><strong>Pesan:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Kirim respons sukses
    return response.status(200).json({ message: "Message sent successfully", data });
  } catch (error) {
    console.error(error);
    // Kirim respons error
    return response.status(500).json({ message: "Failed to send message" });
  }
}

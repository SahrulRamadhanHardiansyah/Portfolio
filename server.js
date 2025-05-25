// File: server.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { Resend } from "resend";

const app = express();
const port = 3001; // Kita akan gunakan port yang berbeda untuk backend

// Izinkan permintaan dari server frontend Vite Anda
app.use(
  cors({
    origin: "http://localhost:5173", // Sesuaikan port ini jika Vite Anda berjalan di port lain
  })
);

// Middleware untuk membaca JSON dari body request
app.use(express.json());

// Endpoint API kita
// File: server.js

// ... (kode import dan app.use() Anda di atas sini)

app.post("/api/send-email", async (req, res) => {
  console.log("Menerima request di /api/send-email...");

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    console.log("Request gagal: field tidak lengkap");
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["sahrulrmdh3@gmail.com"],
      subject: `Pesan Baru dari ${name}: ${subject}`, // Ini sudah benar menggunakan backtick
      reply_to: email,

      // --- PERBAIKAN DI SINI ---
      // PASTIKAN BARIS INI MENGGUNAKAN BACKTICK ( ` ), BUKAN TANDA KUTIP BIASA ( ' atau " )
      // Saya juga menambahkan sedikit format agar lebih rapi.
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

    console.log("Email berhasil dikirim via Resend");
    return res.status(200).json({ message: "Message sent successfully", data });
  } catch (error) {
    console.error("Error saat mengirim email:", error);
    return res.status(500).json({ message: "Failed to send message" });
  }
});

app.listen(port, () => {
  console.log(`✅ Server backend berjalan di http://localhost:${port}`);
});

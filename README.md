![image](https://github.com/user-attachments/assets/c9a0afe6-88ac-4df8-b4f6-7fe3a2397001)

-----

# ✨ Portfolio

Selamat datang di repositori portofolio pribadi saya\! Website ini dibuat untuk menampilkan proyek, sertifikasi, dan keahlian saya dalam pengembangan web. Didesain dengan estetika modern dan dibangun menggunakan teknologi terkini, dengan fokus pada pengalaman pengguna yang interaktif melalui animasi yang halus.

### [🔗 Lihat Versi Live](https://portfolio-sahrulramadhanhardiansyahs-projects.vercel.app/)

-----

## 🚀 Fitur Utama

  * **Animasi Scroll Halus**: Dibuat dengan GSAP (GreenSock Animation Platform) dan ScrollTrigger untuk menciptakan pengalaman scrolling yang dinamis dan menarik.
  * **Filter Proyek & Sertifikat**: Pengguna dapat dengan mudah memfilter proyek dan sertifikat berdasarkan kategori.
  * **Fungsi "Show All"**: Menampilkan 6 item pertama untuk menjaga kerapian halaman, dengan opsi untuk melihat semua item jika lebih dari 6.
  * **Formulir Kontak Fungsional**: Terhubung dengan Resend untuk mengirim pesan langsung dari website ke email pribadi saya.
  * **Desain Responsif**: Tampilan yang optimal di semua perangkat, dari desktop hingga mobile.
  * **Mode Gelap & Terang**: Dilengkapi dengan toggle untuk mode gelap dan terang, memberikan kenyamanan visual bagi pengunjung.

-----

## 🛠️ Teknologi yang Digunakan

  * **Frontend**:

      * [Vite](https://vitejs.dev/) - Build tool generasi baru.
      * [React](https://reactjs.org/) - Library JavaScript untuk membangun antarmuka pengguna.
      * [TypeScript](https://www.typescriptlang.org/) - Menambahkan tipe statis pada JavaScript.
      * [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first untuk desain yang cepat.
      * [Shadcn/ui](https://ui.shadcn.com/) - Komponen UI yang dapat digunakan kembali.

  * **Animasi**:

      * [GSAP (GreenSock)](https://gsap.com/) - Pustaka animasi JavaScript profesional.

  * **Backend & API**:

      * [Vercel Serverless Functions](https://vercel.com/docs/functions) - Untuk menangani logika backend tanpa server.
      * [Resend](https://resend.com/) - Platform API untuk mengirim email transaksional.

  * **Deployment**:

      * [Vercel](https://vercel.com/) - Platform untuk hosting frontend dan deployment CI/CD.

-----

## ⚙️ Menjalankan Secara Lokal

Untuk menjalankan proyek ini di komputer lokal Anda, ikuti langkah-langkah berikut:

**1. Prasyarat**
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) (disarankan versi LTS) dan npm.

**2. Kloning Repositori**

```bash
git clone https://github.com/SahrulRamadhanHardiansyah/Portfolio.git
cd Portfolio
```

**3. Instalasi Dependensi**

```bash
npm install
```

**4. Konfigurasi Environment Variable**
Buat file bernama `.env` di direktori utama proyek dan tambahkan API Key Resend Anda.

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxx
```

**5. Jalankan Server Development**

  * **Cara Rekomendasi (jika berfungsi di sistem Anda):**

    ```bash
    vercel dev
    ```

    Perintah ini akan menjalankan server Vite dan fungsi API secara bersamaan.

  * **Cara Alternatif "Dua Terminal" (jika `vercel dev` bermasalah):**

      - Buka Terminal 1, jalankan backend: `node server.js`
      - Buka Terminal 2, jalankan frontend: `npm run dev`
        *(Catatan: Cara ini memerlukan file `server.js` dan modifikasi pada URL `Workspace`)*.

-----

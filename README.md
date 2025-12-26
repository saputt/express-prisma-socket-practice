# 🚀 Express Socket.io Practice - Vol. 2

Repository ini adalah bentuk latihan intensif (pengulangan) untuk memperdalam pemahaman tentang arsitektur Backend menggunakan Node.js. Fokus utama pada iterasi kali ini adalah penggabungan sistem **CRUD Database** dengan **Real-time Communication**.

## 🎯 Fokus Latihan
- **Logic Reinforcement**: Menulis ulang sistem CRUD dan Authentication dari nol tanpa bantuan tutorial untuk memastikan pemahaman fundamental.
- **Real-time Integration**: Mengintegrasikan **Socket.io** ke dalam Controller agar setiap perubahan data di database (Neon/PostgreSQL) langsung ter-update di sisi client.
- **Cleaner Architecture**: Pemisahan tanggung jawab yang lebih tegas antara `Controller`, `Service`, dan `Repository`.

## 🛠️ Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **ORM**: Prisma
- **Database**: PostgreSQL (Neon.tech)
- **Real-time**: Socket.io
- **Auth**: JSON Web Token (JWT)

## 📂 Folder Structure
```text
src/
 ├── controllers/    # Handle req/res logic
 ├── services/       # Business logic
 ├── repositories/   # Database access (Prisma)
 ├── middlewares/    # Auth & Error handling
 ├── routes/         # API Endpoints
 └── socket/         # Socket.io event configuration

```

## 📝 Key Learnings (Apa yang dipelajari)

1. Cara menangani instance `io` agar bisa diakses di dalam file Controller.
2. Mekanisme pengecekan data ganda (double-check) sebelum melakukan broadcast socket.
3. Sinkronisasi antara database state dan UI state secara real-time.

```

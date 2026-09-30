# Portofolio Web — Oliver Glen Melvin Suwandi

Web portofolio pribadi satu halaman (single-page) untuk keperluan mendaftar magang.
Dibangun dengan HTML, CSS, dan JavaScript murni — tanpa framework, jadi mudah diedit
dan langsung bisa dipublish ke GitHub Pages secara gratis.

## Struktur File

```
PortofolioWeb/
├── index.html      # Struktur halaman & semua konten teks
├── style.css       # Tampilan & warna (tema gelap, responsif)
├── script.js       # Interaksi: menu mobile, animasi, highlight menu
├── assets/         # Simpan foto & gambar proyek di sini
│   └── profile.jpg # Foto profil (opsional — lihat catatan di bawah)
└── README.md
```

## Cara Menjalankan di Komputer

Cukup buka `index.html` dengan klik dua kali, atau untuk hasil terbaik gunakan
ekstensi **Live Server** di VS Code / Kiro (klik kanan `index.html` → "Open with Live Server").

## Bagian yang Perlu Kamu Ubah (semua di `index.html`)

Ganti teks placeholder berikut dengan datamu sendiri:

1. **Beranda / Hero** — nama, peran, dan deskripsi singkat.
2. **Tentang Saya** — paragraf perkenalan, daftar skill di `skill-tags`, dan angka statistik di `about-card`.
3. **Portfolio** — untuk tiap `project-card`: ganti judul, deskripsi, tag teknologi, dan `href` pada tombol "Lihat Disini". Tambah atau hapus kartu sesuai jumlah proyekmu.
4. **Pendidikan** & **Pengalaman** — ubah tanggal, nama institusi, dan deskripsi pada tiap `timeline-item`.
5. **Kontak** — ganti email, nomor telepon, LinkedIn, dan GitHub. Pastikan `href` juga diubah:
   - Email: `href="mailto:emailasli@example.com"`
   - Telepon: `href="tel:+62..."`
   - LinkedIn / GitHub: `href="https://..."`

### Menambahkan Foto Profil

Simpan foto kamu di folder `assets/` dengan nama `profile.jpg`.
Jika file foto tidak ada, halaman otomatis menampilkan inisial "OG" sebagai gantinya —
jadi web tetap tampil rapi walau kamu belum sempat menambahkan foto.

Untuk mengubah inisial, edit di `index.html`:
```html
<span class="hero-photo-initials">OG</span>
```

## Mengganti Warna Tema (opsional)

Semua warna diatur di bagian atas `style.css` pada blok `:root`. Contoh:
```css
--primary: #6c8cff;   /* warna aksen utama */
--accent:  #38e0b8;   /* warna aksen kedua */
--bg:      #0f1117;   /* warna latar */
```
Ubah nilai hex-nya untuk mengganti nuansa keseluruhan situs.

## Publish Gratis ke GitHub Pages

1. Buat akun di [github.com](https://github.com) jika belum punya.
2. Buat repository baru, misalnya beri nama `portofolio` (atur ke **Public**).
3. Upload semua file di folder ini ke repository tersebut. Bisa lewat tombol
   "Add file → Upload files" di web GitHub, atau lewat Git:
   ```bash
   git init
   git add .
   git commit -m "Portofolio pertama"
   git branch -M main
   git remote add origin https://github.com/USERNAME/portofolio.git
   git push -u origin main
   ```
4. Di repository, buka **Settings → Pages**.
5. Pada bagian "Build and deployment", pilih **Source: Deploy from a branch**,
   pilih branch **main** dan folder **/ (root)**, lalu klik **Save**.
6. Tunggu 1–2 menit. Situsmu akan tersedia di:
   `https://USERNAME.github.io/portofolio/`

Ganti `USERNAME` dengan nama pengguna GitHub kamu.

> Tips: kalau ingin URL berupa `https://USERNAME.github.io/` (tanpa nama repo di belakang),
> beri nama repository persis `USERNAME.github.io`.

## Checklist Sebelum Kirim ke Perekrut

- [ ] Semua teks placeholder sudah diganti dengan data asli
- [ ] Link email, telepon, LinkedIn, GitHub sudah benar dan bisa diklik
- [ ] Minimal 3–4 proyek terisi dengan link demo atau repository
- [ ] Foto profil sudah ditambahkan (opsional tapi disarankan)
- [ ] Sudah dites tampilannya di layar HP (buka lewat browser ponsel)
- [ ] Sudah dipublish dan URL-nya bisa dibuka dari perangkat lain

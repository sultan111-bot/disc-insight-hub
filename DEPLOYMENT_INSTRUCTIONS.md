# Cara Deploy DISC Test ke Server PHP (Subfolder)

## 1. Konfigurasi Base Path

Sebelum build, pastikan sudah mengubah base path di 2 file:

### File: `vite.config.ts`
```typescript
base: mode === 'production' ? '/disc/' : '/',
// Ganti 'disc' dengan nama subfolder Anda
```

### File: `src/App.tsx`
```typescript
<BrowserRouter basename="/disc">
// Ganti '/disc' dengan nama subfolder Anda
```

**CONTOH:** 
- Jika URL Anda: `careercenter.darmajaya.ac.id/disc-test/`
- Maka ubah menjadi: `base: '/disc-test/'` dan `basename="/disc-test"`

---

## 2. Build Aplikasi

Di terminal, jalankan:
```bash
npm run build
```

Folder `dist/` akan dibuat dengan semua file production.

---

## 3. Upload ke Server PHP

1. **Buat subfolder** di server PHP Anda (contoh: `/public_html/disc/`)

2. **Upload semua isi folder `dist/`** ke subfolder tersebut:
   ```
   /public_html/disc/
   ├── index.html
   ├── assets/
   ├── .htaccess  (PENTING!)
   └── ... file lainnya
   ```

3. **Pastikan file `.htaccess`** ikut terupload (kadang file hidden tidak terupload)

---

## 4. File .htaccess (PENTING!)

File `.htaccess` sudah dibuat di `public/.htaccess`. 

**Isi file ini:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /disc/
  
  # Redirect all requests to index.html jika file tidak ada
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /disc/index.html [L]
</IfModule>
```

**⚠️ JANGAN LUPA:** Ubah `/disc/` menjadi nama subfolder Anda!

---

## 5. Test Aplikasi

Buka browser dan akses:
```
https://careercenter.darmajaya.ac.id/disc/
```

Jika masih error 404:
1. Cek apakah file `.htaccess` ada
2. Cek apakah `mod_rewrite` aktif di server (tanya hosting)
3. Pastikan base path di `vite.config.ts` dan `basename` di `App.tsx` sama dengan nama subfolder

---

## Troubleshooting

### Error 404 saat refresh atau direct URL
- **Penyebab:** File `.htaccess` tidak ada atau `mod_rewrite` tidak aktif
- **Solusi:** Upload `.htaccess` dan minta hosting aktifkan `mod_rewrite`

### CSS/JS tidak load (Error 404)
- **Penyebab:** Base path salah
- **Solusi:** Cek kembali `base` di `vite.config.ts` harus sama dengan subfolder

### Halaman blank putih
- **Penyebab:** JavaScript error
- **Solusi:** Buka Console di browser (F12) dan lihat error messagenya

---

## Alternatif: Deploy Langsung (Bukan Subfolder)

Jika ingin deploy di root domain (contoh: `disc.darmajaya.ac.id`):

1. **Hapus** konfigurasi base path:
   ```typescript
   // vite.config.ts
   base: '/',  // atau hapus baris ini
   
   // App.tsx
   <BrowserRouter>  // tanpa basename
   ```

2. Build ulang: `npm run build`

3. Upload ke root folder server

---

## Contact

Jika masih ada masalah, hubungi tim teknis IT Darmajaya.

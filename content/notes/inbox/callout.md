---
title: Panduan Penggunaan Callout
image: https://placehold.co/1080x520
description: Panduan lengkap tentang cara menggunakan callout dalam tema ini, terinspirasi dari Obsidian.
date: 2025-04-02T01:19:10+07:00
lastModified: 2025-04-02T01:19:10+07:00
tags:
  - dokumentasi
  - callout
  - markdown
  - panduan
categories:
  - Dokumentasi
series:
  - Panduan
pinned: true
mathjax: false
draft: false
---

## 📌 Panduan Penggunaan Callout

Callout digunakan untuk memberikan keterangan atau sorotan penting dalam catatan tanpa mengganggu alur utama teks. Fitur ini terinspirasi dari [Obsidian](https://obsidian.md/) dan dapat digunakan untuk berbagai keperluan seperti info, peringatan, tips, dan contoh kode.

### ✨ Cara Menggunakan Callout
Untuk membuat callout, tambahkan `[!tipe]` di awal blok kutipan (`>`). Tipe callout akan menentukan tampilan dan ikonnya.

#### 📖 Contoh Dasar
```markdown
> [!info] Ini adalah contoh callout informasi
> Callout ini memberikan informasi tambahan.
```
> [!info] Ini adalah contoh callout informasi
> Callout ini memberikan informasi tambahan.

---
> Some text
> Excepteur minim mollit adipisicing id minim ea aute nisi ea minim enim aliqua cillum.

> Some text
> Excepteur minim mollit adipisicing id minim ea aute nisi ea minim enim aliqua cillum.
> ![[https://picsum.photos/150/200]]
> Minim nulla quis nostrud aute. In id tempor velit fugiat dolore voluptate ullamco ad commodo. Ex proident velit proident magna sint sint ad. Sit nulla fugiat incididunt mollit exercitation veniam magna ad in ad. Tempor nulla exercitation nostrud elit qui magna sit.
{cite="https://gohugo.io" source="Hugo Docs" caption="Some caption"}

---

### 🔥 Jenis Callout yang Didukung
Berikut adalah beberapa jenis callout yang dapat digunakan:

>[!note] With Image
> Nostrud ea velit incididunt nulla voluptate.
> ![[https://picsum.photos/120/200]]
> Minim nulla quis nostrud aute. In id tempor velit fugiat dolore voluptate ullamco ad commodo. Ex proident velit proident magna sint sint ad. Sit nulla fugiat incididunt mollit exercitation veniam magna ad in ad. Tempor nulla exercitation nostrud elit qui magna sit.

>[!note]
> Testing

>[!abstract]
> Testing

>[!info]
> Testing

>[!todo]
> Testing

>[!tip]
> Testing

>[!success]
> Testing

>[!check]
> Testing

>[!done]
> Testing

>[!question]
> Testing

>[!help]
> Testing

>[!faq]
> Testing

>[!warning]
> Testing

>[!caution]
> Testing

>[!attention]
> Testing

>[!failure]
> Testing

>[!fall]
> Testing

>[!missing]
> Testing

>[!danger]
> Testing

>[!error]
> Testing

>[!bug]
> Testing

>[!example]
> Testing

>[!quote]
> Testing

>[!cite]
> Testing

---

### 📂 Callout Bertingkat (Nested)
Anda juga dapat menumpuk beberapa callout di dalam satu sama lain untuk menyusun informasi lebih rapi.
```markdown
> [!question] Bisakah callout dirantai?
> > [!todo] Ya! Ini adalah contoh callout bertingkat.
> > > [!example] Anda bahkan bisa memiliki beberapa lapisan callout!
```
> [!question] Bisakah callout dirantai?
> > [!todo] Ya! Ini adalah contoh callout bertingkat.
> > > [!example] Anda bahkan bisa memiliki beberapa lapisan callout!

---

### 🔄 Fitur Melipat (Collapsed)
Saat ini, fitur melipat belum tersedia. Namun, kemungkinan akan ditambahkan di pembaruan mendatang.
```markdown
> [!note] Fitur Melipat (Collapsed)
> Maaf, fitur ini belum tersedia. Akan ditambahkan di masa depan.
```
> [!note] Fitur Melipat (Collapsed)
> Maaf, fitur ini belum tersedia. Akan ditambahkan di masa depan.

---

### 🔗 Sumber Referensi
Untuk informasi lebih lanjut tentang callout, Anda bisa mengunjungi dokumentasi Obsidian: [Obsidian Callouts](https://help.obsidian.md/callouts).
Selamat menggunakan callout! 🚀
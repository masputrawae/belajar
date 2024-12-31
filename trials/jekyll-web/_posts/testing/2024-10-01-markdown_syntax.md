---
title: Markdown Syntax
description: Panduan Cepat Sintaks Markdown
image: 
date: 2024-10-01
last_modified: 2024-10-01
tags:
  - markdown
  - syntax
  - writer
  - documentation
  - text_format
categories:
  - Writing Guide
group: Testing
related:
---
# Judul Utama (Heading 1)
## Sub-Judul (Heading 2)
### Sub-Sub-Judul (Heading 3)
#### Heading 4
##### Heading 5
###### Heading 6

## Heading 
```markdown
# Judul Utama (Heading 1)
## Sub-Judul (Heading 2)
### Sub-Sub-Judul (Heading 3)
#### Heading 4
##### Heading 5
###### Heading 6
```
---

## **Teks**

Ini adalah teks **tebal** (bold), *miring* (italic), dan ***tebal dan miring***.  
**Teks dengan garis tengah**: ~~Contoh teks dicoret~~.  
Teks dengan **`inline code`** di tengah kalimat.

- Cara penulisan:
```markdown
Ini adalah teks **tebal** (bold), *miring* (italic), dan ***tebal dan miring***.  
**Teks dengan garis tengah**: ~~Contoh teks dicoret~~.  
Teks dengan **`inline code`** di tengah kalimat.
```

---

## **Daftar**

### Daftar Tak Berurut (Unordered List)
- Item pertama
- Item kedua
  - Sub-item pertama
  - Sub-item kedua
    - Sub-sub-item pertama

### Daftar Berurut (Ordered List)
1. Item pertama
2. Item kedua
   1. Sub-item pertama
   2. Sub-item kedua

---

## **Tautan**

Tautan ke situs lain: [Klik di sini untuk mengunjungi Example](https://example.com).  
Tautan tanpa teks: <https://example.com>

Tautan dengan referer dan anchor:  
[Example dengan anchor](https://example.com#section)  

---

## **Gambar**

```markdown
![Alt Text](https://picsum.photos/150 "Tooltip Gambar")
```

Hasilnya:  
![Alt Text](https://picsum.photos/150/150?1 "Tooltip Gambar")

Gambar tanpa teks:  
![No Text](https://picsum.photos/150/150)

---

## **Kutipan**

> "Ini adalah kutipan sederhana."

> Kutipan bersarang:  
>> Ini adalah kutipan bersarang pertama.  
>>> Ini adalah kutipan lebih dalam lagi.

---

## **Kode**

### Kode Inline
Gunakan `console.log('Hello, World!');` untuk mencetak ke konsol.

### Blok Kode
```javascript
function sayHello() {
    console.log('Hello, World!');
}
sayHello();
```

```python
def greet():
    print("Hello, World!")
greet()
```

---

## **Tabel**

```markdown
| Header 1    | Header 2    | Header 3    |
|-------------|-------------|-------------|
| Baris 1 Kol 1 | Baris 1 Kol 2 | Baris 1 Kol 3 |
| Baris 2 Kol 1 | Baris 2 Kol 2 | Baris 2 Kol 3 |
```

Hasilnya:

| Header 1    | Header 2    | Header 3    |
|-------------|-------------|-------------|
| Baris 1 Kol 1 | Baris 1 Kol 2 | Baris 1 Kol 3 |
| Baris 2 Kol 1 | Baris 2 Kol 2 | Baris 2 Kol 3 |

### Tabel dengan Alignment

```markdown
| Kiri        | Tengah       | Kanan        |
|:------------|:------------:|-------------:|
| Baris 1     | Baris 1      | Baris 1      |
| Baris 2     | Baris 2      | Baris 2      |
```

Hasilnya:

| Kiri        | Tengah       | Kanan        |
|:------------|:------------:|-------------:|
| Baris 1     | Baris 1      | Baris 1      |
| Baris 2     | Baris 2      | Baris 2      |

---

## **Matematika**

### Inline Math
Rumus sederhana: $E = mc^2$

### Blok Math
$$
\int_0^1 x^2 \, dx = rac{1}{3}
$$

---

## **Horizontal Rule**

---
Atau bisa juga menggunakan tiga tanda asterisk:

***  

---

## **Escape Characters**

Untuk menampilkan karakter khusus seperti `*`, `_`, atau `#` tanpa memformatnya, kamu bisa menggunakan **backslash (\)** di depan karakter tersebut.

Misalnya:  
\*Ini bukan teks tebal\* → *Ini bukan teks tebal*

---

## **HTML dalam Markdown**

Markdown memungkinkan kamu untuk menyisipkan HTML. Misalnya:

```html
<p>Ini adalah paragraf HTML yang disisipkan di dalam Markdown.</p>
```

Hasilnya:  
<p>Ini adalah paragraf HTML yang disisipkan di dalam Markdown.</p>

---

## **Blok Gambar dengan Link**

Kamu juga bisa menambahkan gambar yang mengarah ke sebuah tautan.

```markdown
[![Gambar](https://via.placeholder.com/150)](https://example.com)
```

Hasilnya:  
[![Gambar](https://via.placeholder.com/150)](https://example.com)

---

## **Penyisipan Video**

Markdown juga mendukung penyisipan video menggunakan HTML:

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
```

Hasilnya:  
<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>

---

## **Backticks untuk Menampilkan Teks Lain**

Teks di dalam satu backtick:  
`console.log("Hello")`

---

## **Comments**

Markdown juga mendukung komentar, meskipun ini hanya terlihat di kode sumber dan tidak dirender:

```markdown
<!-- Ini adalah komentar yang tidak akan terlihat di tampilan akhir -->
```

---

## **Perpaduan antara Markdown dan HTML**

Kamu juga bisa mencampurkan HTML dan Markdown dalam dokumen yang sama:

```html
<h2>This is a header in HTML</h2>
```

**Markdown:**  
## This is a header in Markdown

---

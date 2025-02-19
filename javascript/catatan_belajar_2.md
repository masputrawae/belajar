# Fungsi
```javascript
function jumlah(a, b){
    return a + b;
}
function kurang(a, b){
    return a - b;
}
function kali(a, b){
    return a * b;
}
function bagi(a, b){
    return a / b;
}
function modulus(a, b){
    return a % b;
}
let angkaPertama = Number(prompt("Masukkan Angka Pertama: "))
let angkaKedua = Number(prompt("Masukkan Angka Kedua: "))
let operasi = prompt("Masukkan Operasi: [+] [-] [*] [/] [%]")

if(operasi == "+"){
    alert("Hasil Penjumlahan: " + jumlah(angkaPertama, angkaKedua))
} else if (operasi == "-"){
    alert("Hasil Pengurangan: " + kurang(angkaPertama, angkaKedua))
}else if (operasi == "*"){
    alert("Hasil Perkalian: " + kali(angkaPertama, angkaKedua))
}else if (operasi == "/"){
    alert("Hasil Pembagian: " + bagi(angkaPertama, angkaKedua))
}else if (operasi == "%"){
    alert("Hasil Modulus: " + modulus(angkaPertama, angkaKedua))
} else {
    alert("Operasi Tidak Ditemukan, Menampilkan semua operasi")
    alert("Hasil Penjumlahan: " + jumlah(angkaPertama, angkaKedua))
    alert("Hasil Pengurangan: " + kurang(angkaPertama, angkaKedua))
    alert("Hasil Perkalian: " + kali(angkaPertama, angkaKedua))
    alert("Hasil Pembagian: " + bagi(angkaPertama, angkaKedua))
    alert("Hasil Modulus: " + modulus(angkaPertama, angkaKedua))
}
```
perbaikan: 
```javascript
function jumlah(a, b) {
    return a + b;
}
function kurang(a, b) {
    return a - b;
}
function kali(a, b) {
    return a * b;
}
function bagi(a, b) {
    return a / b;
}
function modulus(a, b) {
    return a % b;
}

let angkaPertama = Number(prompt("Masukkan Angka Pertama: "));
let angkaKedua = Number(prompt("Masukkan Angka Kedua: "));
let operasi = prompt("Masukkan Operasi: [+] [-] [*] [/] [%]");

switch (operasi) {
    case "+":
        alert("Hasil Penjumlahan: " + jumlah(angkaPertama, angkaKedua));
        break;
    case "-":
        alert("Hasil Pengurangan: " + kurang(angkaPertama, angkaKedua));
        break;
    case "*":
        alert("Hasil Perkalian: " + kali(angkaPertama, angkaKedua));
        break;
    case "/":
        alert("Hasil Pembagian: " + bagi(angkaPertama, angkaKedua));
        break;
    case "%":
        alert("Hasil Modulus: " + modulus(angkaPertama, angkaKedua));
        break;
    default:
        alert("Operasi Tidak Ditemukan, Menampilkan semua operasi:");
        let hasil = `
        Penjumlahan: ${jumlah(angkaPertama, angkaKedua)}
        Pengurangan: ${kurang(angkaPertama, angkaKedua)}
        Perkalian: ${kali(angkaPertama, angkaKedua)}
        Pembagian: ${bagi(angkaPertama, angkaKedua)}
        Modulus: ${modulus(angkaPertama, angkaKedua)}
        `;
        alert(hasil);
}
```

# MENGHITUNG DISKON
```javascript
const namaToko = "Toko Murah";

function hitungDiskon(harga, diskon = 10) {
    console.log(`Selamat datang di ${namaToko}`);

    let hasil = harga - (harga * diskon / 100);

    return `Harga setelah diskon: Rp ${hasil.toLocaleString("id-ID")}`;
}

console.log(hitungDiskon(150000));
console.log(hitungDiskon(200000, 20));

```

perbaikan dan peningkatan
```javascript
const namaToko = "Toko Murah";

function hitungDiskon(harga, diskon = 10) {
    console.log(`Selamat datang di ${namaToko}`);
    let hasil = harga - (harga * diskon / 100);
    return `Harga setelah diskon: Rp ${hasil.toLocaleString("id-ID")}`;
}

function cekPromo(harga, kodePromo) {
    let diskon;
    
    if (kodePromo == "HEMAT50") {
        diskon = 50;
    } else if (kodePromo == "DISKON25") {
        diskon = 25;
    } else {
        console.log("Kode Diskon Tidak Berlaku / Tidak ada");
        return `Harga tanpa diskon: Rp ${harga.toLocaleString("id-ID")}`;
    }
    
    return hitungDiskon(harga, diskon);
}

// Contoh penggunaan
let hargaSekarang = 100000;
let kodeDiskon = "HEMAT50"; // Bisa diubah

console.log(cekPromo(hargaSekarang, kodeDiskon));

```
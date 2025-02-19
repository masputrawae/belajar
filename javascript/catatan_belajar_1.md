# 1
```javascript
let nama = "Humman"
let umur = 23
let sudahMakan = true
let alamat;

console.log("Nama: " + nama)
console.log("Umur: " + umur)
console.log("Sudah Makan: " + sudahMakan)
console.log("Alamat: " + alamat)
```
Hasil :
```bash
Nama: Humman
Umur: 23
Sudah Makan: true
Alamat: undefined
```

# 2
```javascript
let angkaPertama = Number(prompt("Masukkan Angka Pertama: "));
let angkaKedua = Number(prompt("Masukkan Angka Kedua: "));
let operasi = prompt("Masukkan Operasi [+] [-] [/] [*] [%]: ")

if (operasi == "+" ){
    let hasil = angkaPertama + angkaKedua
    alert(hasil)
} else if (operasi == "-") {
    let hasil = angkaPertama - angkaKedua
    alert(hasil)
} else if (operasi == "/"){
    let hasil = angkaPertama / angkaKedua
    alert(hasil)
} else if (operasi == "*") {
    let hasil = angkaPertama * angkaKedua
    alert(hasil)
} else if (operasi == "%") {
    let hasil = angkaPertama % angkaKedua
    alert(hasil)
} else {
    let penjumlahan = angkaPertama + angkaKedua
    let pengurangan = angkaPertama - angkaKedua
    let perkalian = angkaPertama * angkaKedua
    let pembagian = angkaPertama / angkaKedua
    let modulus = angkaPertama % angkaKedua
    alert("Penjumlahan : " + penjumlahan)
    alert("Pengurangan : " + pengurangan)
    alert("Perkalian : " + perkalian)
    alert("Pembagian : " + pembagian)
    alert("Modulus : " + modulus)
}
```

# 3
sudah sekalian dengan tugas ke 2

# 4
```javascript
for (let i = 1; i <= 10; i++){
    console.log("loop ke-" + i)
}

let a = 1;
while (a <= 10){
    console.log("loop a ke-"+ a);
    a++;
}
```

# 5
```javascript
let buah = ["apel", "jeruk", "mangga"]

for(item of buah){
    console.log(item)
}

buah.forEach(function(item){
    console.log(item)
})
```

# Akhir
```javascript
let nama = prompt("Masukkan Nama: ")
let umur = Number(prompt("Masukkan Umur: "))

if (umur <= 18){
    alert("Hai : " + nama + " Kamu Masih Anak Anak")
} else {
    alert("Hai : " + nama + " Kamu Sudah Dewasa")
}

for (let i = 1; i <= 5; i++){
    console.log(i)
}
```

# Cek Angka Ganjil Genap
```javascript
let cekAngka = Number(prompt("Cek Angka Ganjil Genap: "))

if (cekAngka % 2 == 0){
    alert("angka genap")
} else {
    alert("angka ganjil")
}
```

# Cek Bilangan Prima
```javascript
let angka = Number(prompt("Masukkan Angka Untuk di cek: "))
let prima = true;

if(angka <= 1){
    prima = false;
} else {
    for(let i = 2; i < angka; i++){
        if(angka % i === 0){
            prima = false;
            break;
        }
    }
}

if (prima){
    alert("Angka " + angka + " Adalah Prima")
} else {
    alert("Angka " + angka + " Bukan Prima")
}
```
Perbaikan Bilangan prima
```javascript
let angka = Number(prompt("Masukkan Angka Untuk Dicek: "))
let prima = angka > 1; // Angka 0 dan 1 bukan prima

for(let i = 2; i < angka; i++){
    if(angka % i === 0){
        prima = false;
        break;
    }
}

alert("Angka " + angka + (prima ? " Adalah PRIMA" : " Bukan PRIMA"));
```
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

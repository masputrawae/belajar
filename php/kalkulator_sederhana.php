<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Input Pengguna</title>
</head>
<body>
    <h1>Kalkulator sederhana</h1>

    <form method="POST">
        <input type="number" name="inputPertama" placeholder="Masukkan Angka Pertama..">
        <input type="number" name="inputKedua" placeholder="Masukkan Angka Kedua..">
        <button type="submit" name="tambah"> + Tambah</button>
        <button type="submit" name="kurang"> - Kurang</button>
        <button type="submit" name="kali"> * Kali</button>
        <button type="submit" name="bagi"> / Bagi</button>
    </form>
    <?php 
    if (isset($_POST["tambah"])) {
        $angkaPertama = $_POST["inputPertama"];
        $angkaKedua = $_POST["inputKedua"];
        $hasil = $angkaPertama + $angkaKedua;

        echo "Hasil: $hasil";
    } elseif (isset($_POST["kurang"])) {
        $angkaPertama = $_POST["inputPertama"];
        $angkaKedua = $_POST["inputKedua"];
        $hasil = $angkaPertama - $angkaKedua;

        echo "Hasil: $hasil";
    } elseif (isset($_POST["kali"])) {
        $angkaPertama = $_POST["inputPertama"];
        $angkaKedua = $_POST["inputKedua"];
        $hasil = $angkaPertama * $angkaKedua;

        echo "Hasil: $hasil";
    } elseif (isset($_POST["bagi"])) {
        $angkaPertama = $_POST["inputPertama"];
        $angkaKedua = $_POST["inputKedua"];
        $hasil = $angkaPertama / $angkaKedua;

        echo "Hasil: $hasil";
    }
    ?>
</body>
</html>

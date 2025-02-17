def tambah(a, b):
    return a + b

def kurang(a, b):
    return a - b

def kali(a, b):
    return a * b

def bagi(a, b):
    if b == 0:
        return "Tidak bisa dibagi dengan nol!"
    return a / b

def opsi():
    opsi_input = int(input("Lanjut? masukkan 1 untuk lanjut, berhenti masukkan apapun: "))
    if opsi_input != 1:
        print("Kalkulator berhenti..!")
        return False
    return True

while True:
    num_1 = float(input("Masukkan Angka Pertama: "))
    num_2 = float(input("Masukkan Angka Kedua: "))
    operasi = int(input(f'''
[1] Penjumlahan
[2] Pengurangan
[3] Perkalian
[4] Pembagian
[5] Matikan Kalkulator
================
Pilih 1-5: '''))

    if operasi == 1:
        print("Hasil: ", tambah(num_1, num_2))
        if not opsi():
            break
    elif operasi == 2:
        print("Hasil: ", kurang(num_1, num_2))
        if not opsi():
            break
    elif operasi == 3:
        print("Hasil: ", kali(num_1, num_2))
        if not opsi():
            break
    elif operasi == 4:
        print("Hasil :", bagi(num_1, num_2))
        if not opsi():
            break
    elif operasi == 5:
        print("Good Bye...!! Kalkulator dimatikan.")
        break
    else:
        print("Error! Pilih angka antara 1-5.")


try:
    angka = int(input("Masukkan angka: "))  
    hasil = 10 / angka  
    print("Hasil:", hasil)  
except ZeroDivisionError:
    print("Error: Tidak bisa membagi dengan nol!")
except ValueError:
    print("Error: Input harus angka!")
finally:
    print("Terima kasih sudah menggunakan program ini!")


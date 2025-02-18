def lihat_daftar(daftar):
    if not daftar:
        print("Daftar Kosong!")
    else:
        print("Daftar: ")
        for i, item in enumerate(daftar, 1):
            print(f"{i}. {item}")

def hapus_daftar(daftar):
    if not daftar:
        print("Daftar Tidak Ada!")
        return

    item = input("Hapus Daftar: ")
    if item in daftar:
        daftar.remove(item)
        print(f"{item} Dihapus!")
    else:
        print("Item tidak ditemukan!")

def tambah_daftar(daftar):
    item = input("Tambahkan Daftar: ")
    daftar.append(item)
    print(f"{item} Ditambahkan")

def edit_daftar(daftar):
    if not daftar:
        print("Daftar Tidak Ada!")
        return

    old = input("Edit Daftar: ")
    if old in daftar:
        new = input("Masukkan Pengganti: ")
        index = daftar.index(old)
        daftar[index] = new  # Ganti langsung di indeks
        print(f"{old} diganti dengan {new}")
    else:
        print("Item tidak ditemukan!")

def main():
    daftar_buah = []

    while True:
        try:
            menu = int(input('''
1. Lihat Daftar
2. Hapus Daftar
3. Tambah Daftar
4. Edit Daftar
5. Keluar
Pilih menu: '''))
        except ValueError:
            print("Masukkan angka yang benar!")
            continue

        if menu == 1:
            lihat_daftar(daftar_buah)
        elif menu == 2:
            hapus_daftar(daftar_buah)
        elif menu == 3:
            tambah_daftar(daftar_buah)
        elif menu == 4:
            edit_daftar(daftar_buah)
        elif menu == 5:
            print("Goodbye 👋")
            break
        else:
            print("Pilihan Tidak ada di menu!")

if __name__ == "__main__":
    main()


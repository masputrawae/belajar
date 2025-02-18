user_data = {}

while True:
    num = max(user_data.keys(), default=0) + 1

    nama = input("Isi Nama: ")
    umur = int(input("Isi Umur: "))
    jurusan = input("Isi Jurusan: ")

    user_data[num] = {
        "nama": nama,
        "umur": umur,
        "jurusan": jurusan
    }

    lanjut = input("Tambah data lagi? (y/n): ").lower()
    if lanjut != "y":
        break

print("\n=== Data Mahasiswa ===")
for id, data in user_data.items():
    print(f"ID: {id}")
    print(f"Nama    : {data['nama']}")
    print(f"Umur    : {data['umur']} tahun")
    print(f"Jurusan : {data['jurusan']}")
    print("-" * 20)

def kalkulator(a, b, operator):
    operasi = {
        '+': a + b,
        '-': a - b,
        '*': a * b,
        '/': a / b if b != 0 else 'Error: Pembagian dengan nol',
        '//': a // b if b != 0 else 'Error: Pembagian dengan nol'
    }
    return operasi.get(operator, 'Operator tidak dikenal')

def main():
    a = int(input('Masukkan nilai a: '))
    b = int(input('Masukkan nilai b: '))
    operator = input('Masukkan operator (+, -, *, /): ')
    hasil = kalkulator(a, b, operator)
    print(f'Hasil {a} {operator} {b} = {hasil}')

if __name__ == '__main__':
    main()
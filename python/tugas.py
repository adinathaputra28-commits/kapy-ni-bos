a = b = c = 0
a = int(input("Masukkan durasi parkir (jam): "))
b = int(input("Jenis kendaraan (1 untuk mobil, 2 untuk motor): "))
if b == 1:
    c = 5000 + (a * 2000)
elif b == 2:
    c = 2000 + (a * 1000)
else:
    print("kode tidak valid.")
print("Total biaya parkir: " + str(c) + " rupiah.")
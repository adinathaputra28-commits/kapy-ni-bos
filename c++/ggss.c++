// Online C++ compiler to run C++ program online

#include <iostream>
#include <iomanip>
#include <string>

int main() {
    double tugas, uts, uas, d;
    std::string nama;

    std::cout << "Masukkan nama siswa: ";
    std::getline(std::cin, nama);

    std::cout << "Masukkan nilai tugas: ";
    std::cin >> tugas;
    std::cout << "Masukkan nilai UTS: ";
    std::cin >> uts;
    std::cout << "Masukkan nilai UAS: ";
    std::cin >> uas;

    if (tugas < 0 || tugas > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100) {
        std::cout << "Nilai tidak valid\n";
        return 0;
    }

    d = tugas * 0.3 + uts * 0.3 + uas * 0.4;

    std::cout << "Nama siswa: " << nama << "\n";
    std::cout << std::fixed << std::setprecision(1);
    std::cout << "Nilai akhir: " << d << "\n";

    if (d > 100 || d < 0) {
        std::cout << "Nilai tidak valid\n";
        return 0;
    }

    if (d >= 90) {
        std::cout << "Nilai Huruf: A\nStatus: Lulus\n";
        std::cout << "Mahasiswa mendapatkan predikat Sangat Memuaskan\n";
    } else if (d >= 85) {
        std::cout << "Nilai Huruf: A\nStatus: Lulus\n";
    } else if (d >= 70) {
        std::cout << "Nilai Huruf: B\nStatus: Lulus\n";
    } else if (d >= 60) {
        std::cout << "Nilai Huruf: C\nStatus: Lulus\n";
    } else if (d >= 50) {
        std::cout << "Nilai Huruf: D\nStatus: Tidak Lulus\n";
    } else {
        std::cout << "Nilai Huruf: E\nStatus: Tidak Lulus\n";
    }

    return 0;
}
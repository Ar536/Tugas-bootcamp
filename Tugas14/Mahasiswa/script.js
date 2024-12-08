// Class Mahasiswa
class Mahasiswa {
    constructor(nim, nama, jenisKelamin, ipk) {
        this.nim = nim;
        this.nama = nama;
        this.jenisKelamin = jenisKelamin;
        this.ipk = ipk;
    }

    // Method untuk menentukan predikat IPK
    predikat() {
        if (this.ipk > 0 && this.ipk < 2.0) return "Cukup";
        else if (this.ipk >= 2.0 && this.ipk < 3.0) return "Baik";
        else if (this.ipk >= 3.0 && this.ipk < 3.75) return "Memuaskan";
        else if (this.ipk >= 3.75 && this.ipk <= 4) return "Cum Laude";
        else return "Tidak valid!";
    }
}

// Class Nilai
class Nilai {
    constructor(mataKuliah, nilai) {
        this.mataKuliah = mataKuliah;
        this.nilai = nilai;
    }

    // Method untuk menentukan grade
    grade() {
        if (this.nilai >= 0 && this.nilai <= 35) return "E";
        else if (this.nilai >= 36 && this.nilai <= 55) return "D";
        else if (this.nilai >= 56 && this.nilai <= 69) return "C";
        else if (this.nilai >= 70 && this.nilai <= 84) return "B";
        else if (this.nilai >= 85 && this.nilai <= 100) return "A";
        else return "Tidak valid!";
    }

    // Method untuk menentukan hasil
    getHasil() {
        return this.nilai > 60 ? "Lulus!" : "Tidak Lulus!";
    }
}

// Class NilaiMahasiswa
class NilaiMahasiswa {
    constructor(mahasiswa, nilai) {
        this.mahasiswa = mahasiswa;
        this.nilai = nilai;
    }
}

// Contoh data mahasiswa
const dataMahasiswa = [
    new NilaiMahasiswa(
        new Mahasiswa("0110221231", "John Doe", "Laki-laki", 3.5),
        new Nilai("Matematika", 85)
    ),
    new NilaiMahasiswa(
        new Mahasiswa("0221002441", "Jane Smith", "Perempuan", 3.2),
        new Nilai("Fisika", 51)
    ),
    new NilaiMahasiswa(
        new Mahasiswa("0120340611", "Michael Johnson", "Laki-laki", 2.8),
        new Nilai("Kimia", 68)
    ),
    new NilaiMahasiswa(
        new Mahasiswa("0212230546", "Emily Davis", "Perempuan", 3.9),
        new Nilai("Biologi", 53)
    ),
    new NilaiMahasiswa(
        new Mahasiswa("0112033659", "David Lee", "Laki-laki", 3.0),
        new Nilai("Sejarah", 75)
    )
];

// Tampilkan data mahasiswa ke dalam tabel
const tableBody = document.getElementById("data-mahasiswa");

dataMahasiswa.forEach((item, index) => {
    const row = `
        <tr>
            <td>${index + 1}</td>
            <td>${item.mahasiswa.nama}</td>
            <td>${item.mahasiswa.nim}</td>
            <td>${item.mahasiswa.ipk} (${item.mahasiswa.predikat()})</td>
            <td>${item.nilai.mataKuliah}</td>
            <td>${item.nilai.nilai}</td>
            <td>${item.nilai.grade()}</td>
            <td>${item.nilai.getHasil()}</td>
        </tr>
    `;
    tableBody.innerHTML += row;
});
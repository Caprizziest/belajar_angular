export interface buku {
    judul: string;
    pengarang: string;
    tahun: number;
    genre: string;  
    sampulURL: string;
}

export interface user {
    nim: string;
    nama: string;
    kelas: string;
    telepon: string;
}

export interface peminjaman {
    id: number;
    buku: buku;
    peminjam: user;
    tanggal_pinjam: Date;
    tanggal_kembali: Date;
}
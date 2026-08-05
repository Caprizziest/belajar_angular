import { buku, user, peminjaman } from "../models/model";

export const Buku: buku[] = [
    { judul: "Buku 1", pengarang: "Pengarang 1", tahun: 2022, genre: "Genre 1", sampulURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWt3XzFvBIJQembE0ZZ48r-pXPZC9Usyo29nTfTQ6Ww&s=10", tersedia: true },
    { judul: "Buku 2", pengarang: "Pengarang 2", tahun: 2023, genre: "Genre 2", sampulURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWt3XzFvBIJQembE0ZZ48r-pXPZC9Usyo29nTfTQ6Ww&s=10", tersedia: false },
    { judul: "Buku 3", pengarang: "Pengarang 3", tahun: 2024, genre: "Genre 3", sampulURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWt3XzFvBIJQembE0ZZ48r-pXPZC9Usyo29nTfTQ6Ww&s=10", tersedia: false },
    { judul: "Buku 4", pengarang: "Pengarang 4", tahun: 2025, genre: "Genre 4", sampulURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3i-FfaIGDSWv1AB2umT_coNimifHZUpMkJL7HAzEKQA&s=10", tersedia: true },
    { judul: "Buku 5", pengarang: "Pengarang 5", tahun: 2026, genre: "Genre 5", sampulURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3i-FfaIGDSWv1AB2umT_coNimifHZUpMkJL7HAzEKQA&s=10", tersedia: true },
];  

export const User: user[] = [   
    {nim:"1", nama:"nama1", kelas:"X", telepon:"123"},
    {nim:"2", nama:"nama2", kelas:"XII", telepon:"234"},
    {nim:"3", nama:"nama3", kelas:"XI", telepon:"456"},
    {nim:"4", nama:"nama4", kelas:"X", telepon:"678"},
    {nim:"5", nama:"nama5", kelas:"XI", telepon:"890"},
]

export const Peminjaman: peminjaman[] = [
    {id:1, buku:Buku[0], peminjam:User[0], tanggal_pinjam:new Date(), tanggal_kembali:new Date()},
    {id:2, buku:Buku[1], peminjam:User[1], tanggal_pinjam:new Date(), tanggal_kembali:new Date()},
    {id:3, buku:Buku[2], peminjam:User[2], tanggal_pinjam:new Date(), tanggal_kembali:new Date()},
    {id:4, buku:Buku[3], peminjam:User[3], tanggal_pinjam:new Date(), tanggal_kembali:new Date()},
    {id:5, buku:Buku[4], peminjam:User[4], tanggal_pinjam:new Date(), tanggal_kembali:new Date()},
]
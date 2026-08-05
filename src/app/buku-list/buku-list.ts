import { Component, signal, computed } from '@angular/core';
import { Buku, User, Peminjaman } from '../../mock/mock-buku'; 

@Component({
  selector: 'app-buku-list',
  imports: [],
  templateUrl: './buku-list.html',
  styleUrl: './buku-list.css',
})
export class BukuList {
  Buku = Buku;
  User = User;
  Peminjaman = Peminjaman 


  currentBuku = signal(Buku[1]);
  currentUser = signal(User[0]);
  currentPeminjam = signal(Peminjaman[0])

  keteranganPinjam = computed(() => {
    return `Buku ${this.currentBuku().judul} ditulis oleh ${this.currentBuku().pengarang} dipinjam oleh ${this.currentUser().nama} pada tanggal ${this.currentPeminjam().tanggal_pinjam} kembali pada tanggal ${this.currentPeminjam().tanggal_kembali}`;
  })
}

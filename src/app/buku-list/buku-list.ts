import { Component, signal, computed } from '@angular/core';
import { Buku, User, Peminjaman } from '../../mock/mock-buku'; 
import { BukuDetail } from '../buku-detail/buku-detail';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buku-list',
  imports: [BukuDetail, FormsModule],
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

  searchTerm = signal("")

  filteredBook = computed(() => {
    const query = this.searchTerm().toLocaleLowerCase();
    return this.Buku.filter(buku => {
      return buku.judul.toLocaleLowerCase().includes(query);
    })
  })
}

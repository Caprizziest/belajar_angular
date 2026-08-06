import { Component, signal, computed, inject } from '@angular/core';
import { Buku, User, Peminjaman } from '../../mock/mock-buku';
import { BukuDetail } from '../buku-detail/buku-detail';
import { FormsModule } from '@angular/forms';

import { bukuService } from '../service/buku';

@Component({
  selector: 'app-buku-list',
  imports: [BukuDetail, FormsModule],
  templateUrl: './buku-list.html',
  styleUrl: './buku-list.css',
})

export class BukuList {

  protected readonly bukuService = inject(bukuService);

  // Buku = Buku;
  User = User;
  Peminjaman = Peminjaman


  currentBuku = signal(this.bukuService.allBooks()[1]);

  // currentBuku = signal(Buku[1]);

  currentUser = signal(User[0]);
  currentPeminjam = signal(Peminjaman[0])

  keteranganPinjam = computed(() => {
    return `Buku ${this.currentBuku().judul} ditulis oleh ${this.currentBuku().pengarang} dipinjam oleh ${this.currentUser().nama} pada tanggal ${this.currentPeminjam().tanggal_pinjam} kembali pada tanggal ${this.currentPeminjam().tanggal_kembali}`;
  })

  searchTerm = signal("")

  filteredBook = computed(() => {
    const query = this.searchTerm().toLocaleLowerCase();
    return this.bukuService.allBooks().filter((buku) => {
      return buku.judul.toLocaleLowerCase().includes(query); 
    })
  })
}

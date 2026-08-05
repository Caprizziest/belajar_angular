import { Component, signal, input } from '@angular/core';
import { Buku } from '../../mock/mock-buku'; 
import { buku } from '../../models/model';

@Component({
  selector: 'app-buku-detail',
  imports: [],
  templateUrl: './buku-detail.html',
  styleUrl: './buku-detail.css',
})
export class BukuDetail {
  readonly buku = input.required<buku>();
}

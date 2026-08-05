import { Injectable, signal } from '@angular/core';
import { Buku as MockBuku } from '../../mock/mock-buku';


@Injectable()
export class Buku {
    public readonly allBooks = signal(Buku);
}

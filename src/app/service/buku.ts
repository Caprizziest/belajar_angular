import { Injectable, signal } from '@angular/core';
import { Buku as MockBuku } from '../../mock/mock-buku';


@Injectable ({ providedIn: "root"})
export class bukuService {
    public readonly allBooks = signal(MockBuku)

    constructor() {
        console.log("Book service");
    }
        
}
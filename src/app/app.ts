import { Component, signal, computed} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BukuList } from './buku-list/buku-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BukuList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('apalah ini coba');

  counter = signal(1);

  resetCounter() {
    this.counter.set(1);
  }

  incrementCounter() {
    this.counter.update((value) => value + 1);
  }
}

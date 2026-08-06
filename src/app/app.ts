import { Component, signal, computed} from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { BukuList } from './buku-list/buku-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatDividerModule, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('ini');

  counter = signal(1);

  resetCounter() {
    this.counter.set(1);
  }

  incrementCounter() {
    this.counter.update((value) => value + 1);
  }
}

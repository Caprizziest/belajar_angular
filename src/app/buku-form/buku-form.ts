import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';




@Component({
  selector: 'app-buku-form',
  imports: [FormsModule, ReactiveFormsModule, MatIconModule, MatDividerModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './buku-form.html',
  styleUrl: './buku-form.css',
})
export class BukuForm {
  bukuForm = new FormGroup({
    judul: new FormControl(''),
    pengarang: new FormControl(''),
  })

  onSubmit() {
    console.log("buku baru", this.bukuForm.value);
  }
}

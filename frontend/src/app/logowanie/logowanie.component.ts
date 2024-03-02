import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrl: './logowanie.component.css',
  standalone: true,
  imports: [FormsModule]
})

export class LogowanieComponent {
  formData = {
    username: '',
    password: ''
  };

  logowanie() {
    if (this.formData.username === "testuser" && this.formData.password === "password") {
      console.log('Zalogowano');
    } else {
      console.log('Błąd logowania');
    }
  }
}

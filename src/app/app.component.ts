import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Kostas";
  lastName = "Bakalis";

  person = {
    givenName: 'Kostas',
    surName: 'Bakalis',
    age: 26,
    email: 'kostasbakalis@gmail.com'
  }
}

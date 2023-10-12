import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Kostas";
  lastName = "Bakalis";

    person: Person = {
      givenName: 'Kostas',
      surName: 'Bakalis',
      age: 26,
      email: 'kostasbakalis@gmail.com',
      address: "Sarafi 1"
    }

    person2: Person = {
      givenName: 'Dimitris',
      surName: 'Lypiridis',
      age: 24,
      email: 'dimitrislyp@gmail.com',
      address: "Vazelonos 9"
    }
}

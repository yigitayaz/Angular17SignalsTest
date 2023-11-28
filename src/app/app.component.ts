import {Component, computed, effect, Signal, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {getRandomUser, User} from './user';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public users: User[] = [];

  public count = signal(1)
  public selectedUser: Signal<User>;
  constructor() {
    for (let i = 1; i <= 10; i++) {
      this.users.push(getRandomUser(i));

    }
    this.selectedUser = computed(() => this.users[this.count()-1])
    effect(() => console.log(`Selected User has changed: ${this.selectedUser().name}`))
  }

  updateCount(event: Event){
    const input = event.target as HTMLInputElement;
    this.count.update(value =>  parseInt(input.value))
  }
}

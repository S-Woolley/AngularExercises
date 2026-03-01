import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;
  onSelectUser(userId: string) {
    console.log('Selected user: ' + userId);
    this.selectedUserId = this.users.find(u => u.id === userId)?.id;
  }

  get SelectedUser() {
    return this.users.find(u => u.id === this.selectedUserId);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users: string[] = ["John", "Maya", "Neethu"];

  addUser() {
    this.users.push("David");
  }

  removeFirstUser() {
    if (this.users.length > 0) {
      this.users.shift();
    }
  }

}
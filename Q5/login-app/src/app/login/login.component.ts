import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";
  errorMessage: string = "";

  onSubmit() {

    if (!this.username || !this.password) {
      this.errorMessage = "Both fields are required!";
    } 
    else {
      this.errorMessage = "";
      console.log("Form Submitted");
    }

  }

}
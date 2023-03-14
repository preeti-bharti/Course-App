import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ButtonText="Login";
  User:string="Dave";
  loginForm: FormGroup;
  faeye=faEye;
  faeyeslash=faEyeSlash;
  condition = false;
  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    }); 
  }

  ngOnInit(): void {
  }
 
  login() {
   this.loginForm.markAllAsTouched();
   console.log("loggedin");
  }
}

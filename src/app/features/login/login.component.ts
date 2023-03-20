import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AuthStateFacade } from 'src/app/auth/store/auth.facade';
import { AuthState } from 'src/app/auth/store/auth.reducer';
import { UserStoreService } from 'src/app/user/services/user-store.service';
import { UserService } from 'src/app/user/services/user.service';
import { UserFacade } from 'src/app/user/store/user.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //ButtonText="Login";
  User:string="Dave";
  loginForm: FormGroup;
  faeye=faEye;
  faeyeslash=faEyeSlash;
  condition = false;
  isAuthorized: boolean = false;
  loginErrorMessage: string = "";
  constructor(private authService: AuthStateFacade, private router: Router,
    private userService: UserFacade) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    }); 
  }

  ngOnInit(): void {
  }
 
  login() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.errors == null) {
      this.authService.login(this.loginForm.value);

      this.authService.isAuthorized$.subscribe(isAuthorized => {
        if (isAuthorized) {
          alert('login successfully!');
          this.userService.RequestCurrentUser();
          this.router.navigate(['/courses']);
        }
      });
      this.authService.getLoginErrorMessage$.subscribe(error => {
        if (error != "") {
          alert(this.loginErrorMessage);
        }
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AuthStateFacade } from 'src/app/auth/store/auth.facade';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  RegButtonText="Register"
  registrationForm: FormGroup;
  constructor(private authService: AuthStateFacade,
    private router: Router) {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }
  register() {
    this.registrationForm.markAllAsTouched();
    console.log(this.registrationForm.errors != null);
    if (this.registrationForm.errors == null) {
      this.authService.register(this.registrationForm.value);

      this.authService.getLoginErrorMessage$.subscribe(error => {
        if (error == "") {
          alert("data inserted successfully!");
          this.router.navigate(['login']);
        }
        else {
          alert(error);
        }
      });
    }
  }
}



import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signupForm: FormGroup;
  /* dataForm: FormGroup; */

  constructor(public fb: FormBuilder, public auth: AuthService) { }

  ngOnInit() {

    this.signupForm = this.fb.group({
     /*  'username': ['', [
        Validators.required,
        ]
      ], */
      'email': ['', [
        Validators.required,
        Validators.email
        ]
      ],
      'password': ['', [
        Validators.minLength(6),
        Validators.maxLength(25)
        ]
      ]
    });

    /* this.dataForm = this.fb.group({
    'username': ['', [
      Validators.required,
      ]
    ],
    }); */
  }

  /* get username() { return this.signupForm.get('username')} */
  get email() { return this.signupForm.get('email')}
  get password() { return this.signupForm.get('password')}

  signup() {
    this.auth.signUp({email: this.email.value, password: this.password.value});
  }

 /*  setUserData(user) {
    return this.auth.updateUser(user, { username: this.username.value });
  } */



}

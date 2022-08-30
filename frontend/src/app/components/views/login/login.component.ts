import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginDto } from 'src/app/swagger-api/models';
import { AccountService } from 'src/app/swagger-api/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {}

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(4)]),
    ],
  });

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login = () => {
    this.accountService
      .apiAccountLoginPost$Json({
        body: {
          username: this.loginForm.value['username']!,
          password: this.loginForm.value['password']!,
        },
      })
      .subscribe(
        (response) => console.log(response),
        (err) => console.log(err)
      );
  }
}

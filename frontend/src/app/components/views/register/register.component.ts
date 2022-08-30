import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  registerForm = this.fb.group({
    username: [''],
    password: [''],
    gender: [''],
    dateOfBirth: [''],
    country: [''],
    city: [''],
    knownAs: [''],

  })

  ngOnInit(): void {
  }

}

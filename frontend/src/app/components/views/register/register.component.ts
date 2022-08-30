import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { using } from 'rxjs';
import { tap } from 'rxjs';
import { formValueChange } from './form-state/actions/form.actions';
import { Store } from '@ngrx/store';
import { FormState } from './form-state/form-state.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // registerFormValues$ = using(
  //   () =>
  //     this.registerForm.valueChanges
  //       .pipe(tap(values => this.store.dispatch(formValueChange(values))))
  //       .subscribe(),
  //   () => this.store.select(state => console.log(state))
  // );

  constructor(private fb: FormBuilder, private store: Store) {}

  registerForm = this.fb.group({
    username: '',
    password: '',
    gender: '',
    dateOfBirth: '',
    country: '',
    city: '',
    knownAs: '',
  });

  ngOnInit(): void {}
}

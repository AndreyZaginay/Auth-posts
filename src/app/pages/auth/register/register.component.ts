import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Store } from '@ngrx/store';

import { AuthActions } from '@shomas/state'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule ]
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;

  constructor(
    private readonly store: Store,
    ) {}

  ngOnInit(): void {
    this.initRegisterForm();
  }

  submitRegisterForm(): void {
    if (this.registerForm.invalid) {
      return
    }
    const newUser = this.registerForm.getRawValue();    
    this.store.dispatch(AuthActions.register(newUser));
  }

  initRegisterForm(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      secondName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
}

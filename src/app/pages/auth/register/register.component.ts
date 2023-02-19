import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Store } from '@ngrx/store';
import { Observable, tap } from "rxjs";
import { CommonModule } from "@angular/common";

import { AuthActions, selectError } from '@shomas/state'
import { RegisterCredentials } from "@shomas/entities";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, CommonModule ]
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;

  readonly error$: Observable<string | undefined> = this.store.select(selectError).pipe(
    tap(() => this.registerForm.reset())
  );

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
    const registerCredentials: RegisterCredentials = this.registerForm.getRawValue();
    this.store.dispatch(AuthActions.register({ registerCredentials }));
  }

  initRegisterForm(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
}

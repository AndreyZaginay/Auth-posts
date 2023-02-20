import { Observable, tap } from 'rxjs';
import { Component } from '@angular/core';
import { FormControl, FormGroup,  Validators } from "@angular/forms";
import { Store } from '@ngrx/store';

import { AuthActions, selectError } from '@shomas/state';
import { LoginCredentials } from "@shomas/entities";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ],
})
export class LoginComponent {
  loginForm!: FormGroup;
  readonly error$: Observable<string | undefined> = this.store.select(selectError).pipe(
    tap(() => this.loginForm.reset())
  );

  constructor(
    private readonly store: Store,
  ) {
  }

  ngOnInit(): void {
    this.initLoginForm();
  }

  submitLoginForm(): void {
    if (this.loginForm.invalid) {
      return
    }
    const loginCredentials: LoginCredentials = { ...this.loginForm.getRawValue() };
    this.store.dispatch(AuthActions.login({ loginCredentials }));
  }

  initLoginForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [ Validators.required ]),
      password: new FormControl('', [ Validators.required ])
    })
  }
}

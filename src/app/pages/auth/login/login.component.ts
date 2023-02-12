import { Observable, tap } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

import { UserService } from './../../../core/services/user.service';
import * as AuthActions from '../../../core/state/actions/auth.actions';
import { selectError, selectLoggedIn, selectUser } from 'src/app/core/state/selectors/auth.selectors';
import { LoginCredentials } from "../../../core/entities/login-credentials";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ],
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, RouterModule, CommonModule, RouterModule ]
})
export class LoginComponent {
  loginForm!: FormGroup;
  readonly error$: Observable<string | undefined> = this.store.select(selectError).pipe(
    tap(() => this.loginForm.reset())
  );

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly userService: UserService,
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

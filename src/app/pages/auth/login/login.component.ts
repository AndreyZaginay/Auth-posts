import { UserService } from './../../../core/services/user.service';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

import * as AuthActions from '../../../core/state/actions/auth.actions';
import { selectError } from 'src/app/core/state/selectors/auth.selectors';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, RouterModule, CommonModule ]
})
export class LoginComponent {
  loginForm!: FormGroup;
  error$: Observable<string | null> = this.store.select(selectError);
  constructor(private readonly store: Store,
    private readonly userService: UserService
    ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  submitLoginForm(): void {
    if (this.loginForm.invalid) {
      return
    }
    const credentials = {...this.loginForm.getRawValue()};
    console.log(credentials);
    
    this.store.dispatch(AuthActions.login(credentials));
    // console.log(credentials);
    
    // this.userService.findOneByEmail(credentials.email).subscribe(console.log)
    
  }

  initLoginForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
}

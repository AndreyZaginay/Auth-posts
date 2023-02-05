import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule ]
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  submitLoginForm(): void {
    if (this.loginForm.invalid) {
      return
    }
    const creditionals = this.loginForm.getRawValue();
    console.log(creditionals);
  }

  initLoginForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
}

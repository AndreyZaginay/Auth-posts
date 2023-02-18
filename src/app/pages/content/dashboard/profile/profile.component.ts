import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { SystemUser } from "@shomas/core";
import { selectUser, AuthActions } from "@shomas/state";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  user$: Observable<SystemUser | undefined> = this.store.select(selectUser);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }
}

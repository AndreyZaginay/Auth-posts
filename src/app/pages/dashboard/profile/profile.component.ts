import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

import { SystemUser } from "@shomas/core";
import { AddPostComponent } from './add-post/add-post.component';
import { selectUser, AuthActions } from "@shomas/state";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  user$: Observable<SystemUser | undefined> = this.store.select(selectUser);

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly dialog: MatDialog

    ) {}

  ngOnInit(): void {
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
    this.router.navigate(['']);
  }

  openDialog(): void {
    this.dialog.open(AddPostComponent);
  }

}

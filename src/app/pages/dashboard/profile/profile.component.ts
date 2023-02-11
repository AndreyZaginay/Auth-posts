import { selectUser } from './../../../core/state/selectors/auth.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/core/state/interfaces/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  user: Observable<User> = this.store.select(selectUser);

  constructor(private readonly store: Store) {}
  
  ngOnInit(): void {

  }
}

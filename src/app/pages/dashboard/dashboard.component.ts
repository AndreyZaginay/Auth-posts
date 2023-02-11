import { Component, OnInit } from '@angular/core';

import { UserService } from './../../core/services/user.service';

const obj = {
  email: 'first',
  password: 'first'
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  constructor (private readonly userService: UserService) {}

  ngOnInit(): void {
    this.userService.findOneByEmail(obj.email).subscribe(console.log)
 }
}

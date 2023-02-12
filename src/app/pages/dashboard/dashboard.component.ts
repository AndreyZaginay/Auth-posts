import { Component, OnInit } from '@angular/core';

import { UserService } from './../../core/services/user.service';

const obj = {
  email: 'first',
  password: 'first',
  firstname: 'шомас',
  lastname: 'телби'
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  constructor (private readonly userService: UserService) {}

  ngOnInit(): void {
    // this.userService.findOneByEmail(obj.email).subscribe(console.log)
    // this.userService.post(obj).subscribe(data => console.log(data.id));
    // 4yuvKolSehe5MOjj8gT1 - Agent 47 2 Shomas Telby
    // this.userService.findOneById('4yuvKolSehe5MOjj8gT1').subscribe(console.log);
 }
}

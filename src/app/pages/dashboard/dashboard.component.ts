import { UserService } from './../../core/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  constructor (private readonly userService: UserService) {}

  ngOnInit(): void {
   this.userService.findOneByEmail('first').subscribe(console.log);
    
  }
}

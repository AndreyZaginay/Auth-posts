import { UserService } from './../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import * as bcrypt from 'bcrypt';


const saltRounds = 10;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  constructor (private readonly userService: UserService) {}

  ngOnInit(): void {
  //   this.userService.userCollection().snapshotChanges().pipe(
  //     map(actions => {
  //       return actions.map(a => {
  //         const data = a.payload.doc.data();
  //         const id = a.payload.doc.id;
  //         return console.log({id, ...data});
  //         ;
  //       })})
  // ).subscribe()
  this.userService.findOneByEmail('first').subscribe(console.log)
 }
}

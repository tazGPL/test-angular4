import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/services/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isUserLoggedIn: Boolean = false;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.$user.subscribe({
      next: (value) => {
        console.log('user status: ', value)
        this.isUserLoggedIn = (value !== null) && value.status;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    })
  }

}

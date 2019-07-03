import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.scss']
})
export class LogoutPageComponent implements OnInit {

  constructor(
    private usersService: UsersService, private router: Router
  ) { }

  ngOnInit() {
    this.usersService.logout();
    this.router.navigate(['/']);
  }

  logout() {

  }
}

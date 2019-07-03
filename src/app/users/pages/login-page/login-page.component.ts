import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginLoading = false;
  loginError = null;
  loginSuccess = false;

  user = {
    email: null,
    password: null
  }

  constructor(
    private usersService: UsersService,
    private router: Router,
    private storage: StorageService
  ) { }

  ngOnInit() {
  }

  async onSubmit() {

    this.loginLoading = true;
    
    try {
      const authResponse = await this.usersService.login(this.user);

      if (authResponse.status) {
        this.usersService.auth(authResponse);
        this.router.navigate(['users', 'profile']);
      } else {
        this.loginError  = 'Wpisz poprawne dane do logowania';
      }
      
    } catch (err) {
      this.loginError = err.message;
    } finally {
      this.loginLoading = false;
    }

    console.log('onSubmit', this.user);

  }

}

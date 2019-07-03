import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  name = new FormControl();
  email = new FormControl();
  password = new FormControl();
  confirmPassword = new FormControl();
  avatarUrl = new FormControl();
  
  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password,
    confirmPassword: this.confirmPassword,
    avatarUrl: this.avatarUrl
  });

  registrationLoading = false;
  registrationError = null;
  registrationSuccess = false;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    const form = this.registerForm.getRawValue();
    console.log('onSubmit', form);

    this.registrationLoading = true;
    
    try {
      await this.usersService.register(form);
      this.registrationSuccess = true;
    } catch (err) {
      this.registrationError = err;      
    } finally {
      this.registrationLoading = false;
    }
  }
}

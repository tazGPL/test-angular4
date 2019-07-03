import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/user.interface';
import { UsersRoutingModule } from '../../users-routing.module';

import uuid from 'uuid';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  static parseUserForm(form): IUser {
    return {
      id: uuid(),
      name: form.name,
      email: form.email,
      password: form.password,
      avatar_url: form.avatarUrl,
    }
  }

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);
  avatarUrl = new FormControl('', [Validators.required]);
  
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
      const user = RegisterPageComponent.parseUserForm(form);
      await this.usersService.register(user);
      this.registrationSuccess = true;
    } catch (err) {
      this.registrationError = err.message;      
    } finally {
      this.registrationLoading = false;
    }
  }
}

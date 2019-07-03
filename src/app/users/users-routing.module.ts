import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterPageComponent
   },
   {
    path: 'login',
    component: LoginPageComponent
   },
   {
    path: 'profile',
    component: UserProfilePageComponent
   },
   {
    path: 'logout',
    component: LogoutPageComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

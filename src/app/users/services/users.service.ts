import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { IUserCredentials } from '../interfaces/user-credentials';
import { IUserList } from '../interfaces/user-list';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  register(user: IUser) {
    return this.http.post(environment.usersUrl, user).toPromise();
  }

  async login(credentials: IUserCredentials) {
    const users = await this.http.get<IUserList>(environment.usersUrl).toPromise();
    const authUser = users.find((user) => {
      return user.email === credentials.email
        && user.password === credentials.password
    })

    return {
      status: Boolean(authUser),
      ...authUser
    }
  }
}
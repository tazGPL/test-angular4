import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPostList } from '../interfaces/post-list.interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    return this.http.get<IPostList>(environment.postsUrl).toPromise();
  }
}

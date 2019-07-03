import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPostList } from '../interfaces/post-list.interface';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    return this.http.get<{ posts: IPostList }>(environment.postsUrl)
    .pipe(
      map(response => response.posts)
    )
    .toPromise();
  }

  async getPostById(postId: string) {
    const posts = await this.getPosts();
    return posts.find((post) => {
        return post.id === postId;
    });
  }
}
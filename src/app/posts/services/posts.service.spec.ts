import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostsService } from './posts.service';
import { environment } from 'src/environments/environment.prod';

describe('PostsService', () => {

  let service: PostsService = null;
  let httpMock: HttpTestingController = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.get(PostsService);
    httpMock = TestBed.get(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

describe('getPosts', () => {

  
  it('should be defined', () => {
    expect(service.getPosts).toEqual(jasmine.any(Function));
  });
  
  it('should make HTTP request', async () => {
     const response = service.getPosts();

     const server = httpMock.expectOne(environment.postsUrl);
     server.flush([
       { id: 'fake-id', body: 'fake-body'}
     ]);

    const posts = await response;
    expect(posts.length).toEqual(1);

  });
  
})

});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProfilePageComponent } from './post-profile-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostsModule } from '../../posts.module';

describe('PostProfilePageComponent', () => {
  let component: PostProfilePageComponent;
  let fixture: ComponentFixture<PostProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        // PostProfilePageComponent
      ],
      imports: [ SharedModule, HttpClientTestingModule, RouterTestingModule, PostsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

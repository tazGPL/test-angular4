import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListItemComponent } from './post-list-item.component';

describe('PostListItemComponent', () => {
  let component: PostListItemComponent;
  let fixture: ComponentFixture<PostListItemComponent>;
  let $component: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListItemComponent);
    component = fixture.componentInstance;
    $component = fixture.nativeElement;
  });

  afterEach(() => {
    $component.remove();
  })

  it('should create', () => {
    component.post = {
      id: 'fake-id',
      body: 'fake-body',
      author: {
        id: 'fake-author-id',
        name: 'fake-author-name'
      }
    }
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
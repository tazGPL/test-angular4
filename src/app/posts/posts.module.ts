import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PostProfilePageComponent } from './pages/post-profile-page/post-profile-page.component';
import { CommentsModule } from '../comments/comments.module';
import { PostAddFormComponent } from './components/post-add-form/post-add-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostListComponent, PostListItemComponent, PostProfilePageComponent, PostAddFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    PostsRoutingModule,
    CommentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PostListComponent,
    PostListItemComponent,
    PostAddFormComponent
  ],
})
export class PostsModule { }

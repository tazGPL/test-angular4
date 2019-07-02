import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PostProfilePageComponent } from './pages/post-profile-page/post-profile-page.component';

@NgModule({
  declarations: [PostListComponent, PostListItemComponent, PostProfilePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    PostsRoutingModule
  ],
  exports: [
    PostListComponent,
    PostListItemComponent
  ],
})
export class PostsModule { }

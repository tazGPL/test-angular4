import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { IPost } from '../../interfaces/post.interface';
import { UsersService } from 'src/app/users/services/users.service';
import uuid from 'uuid';

@Component({
  selector: 'app-post-add-form',
  templateUrl: './post-add-form.component.html',
  styleUrls: ['./post-add-form.component.scss']
})
export class PostAddFormComponent implements OnInit {

  static parsePostForm(form, author): IPost {
    return {
      id: uuid(),
      created_time: new Date().toUTCString(),
      body: form.body,
      author,
      images: null
    }
  }

  @Output() addPost = new EventEmitter();

  body = new FormControl('', [Validators.required]);

  addForm = new FormGroup({
    body: this.body
  })

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    const form = this.addForm.getRawValue();
    const user = this.usersService.getUser();
    const post = PostAddFormComponent.parsePostForm(form, user);
    this.addPost.next(post);
    console.log('onSubmit');
   }

}

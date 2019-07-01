import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postList = [
    { id: 'asdasdsad', body: "Mam fajnego psa", author: { name: 'Piotr'}},
    { id: 'asdasdfdsad', body: "Mam fajnego kota", author: { name: 'Grzegorz'}},
    { id: 'asdasssssssdsad', body: "Mam fajnego jeża", author: { name: 'Jola'}}
  ];

  constructor() { }

  ngOnInit() {
  }

}

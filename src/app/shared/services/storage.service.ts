import { Injectable } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  create(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  read(key) {
    const value = localStorage.getItem(key);
    try {
      return JSON.parse(value)
    } catch (err) {
      return value;
    }
  }
  update(key, value) {
    this.create(key, value);
  }
  delete(key) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear();
  }

  constructor() { }
}

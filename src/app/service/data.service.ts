import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //put on an array
  private posts = [];

  constructor() { }

  public addPost(post){
    this.posts.push(post);
  }

  getAllPost(){
    return this.posts; 
  }
}

import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  allPosts = [];

  constructor(public dataSrv: DataService){
    //get the data fromt he service to the allPosts array
    this.allPosts = this.dataSrv.getAllPost();
    console.log(this.allPosts);
  }

}

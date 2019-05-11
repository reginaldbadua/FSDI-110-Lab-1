import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  pageTitle = "Home Page";
  secondTitle = "This exists now";
  third ="created first";

  postText = '';

  constructor(public dataSrv: DataService){
    console.log('Home constructor exec');
  }

  // method
  sayHello(){
    console.log("Hello from Home page");
  }

  create (){
    //get the text from the input
    console.log(this.postText);
    //add it to the array on the service
    this.dataSrv.addPost(this.postText);
    //clear the input field (or clear the variable bound to it)
    this.postText ='';
    
  }
}

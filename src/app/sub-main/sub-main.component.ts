import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-main',
  templateUrl: './sub-main.component.html',
  styleUrls: ['./sub-main.component.css']
})
export class SubMainComponent implements OnInit {

  constructor() { }
  toggleView:Boolean=false;
  toggleAdd:Boolean=true;

  ngOnInit() {
  }
  toggleTopics(topic){
    if(topic=='add'){
      this.toggleAdd=true;
      this.toggleView=false;
    }else{
      this.toggleAdd=false;
      this.toggleView=true;
    }

  }
}

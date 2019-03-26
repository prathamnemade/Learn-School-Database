import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-main',
  templateUrl: './sub-main.component.html',
  styleUrls: ['./sub-main.component.css']
})
export class SubMainComponent implements OnInit {

  constructor(private router: Router) { }
  toggleView: Boolean = false;
  toggleAdd: Boolean = true;
  userName: string = ""

  ngOnInit() {
    this.userName = sessionStorage.getItem('emailID')
  }
  toggleTopics(topic) {
    if (topic == 'add') {
      this.toggleAdd = true;
      this.toggleView = false;
    } else {
      this.toggleAdd = false;
      this.toggleView = true;
    }

  }
  logout() {
    sessionStorage.removeItem('emailID')
    this.router.navigate(['/home'])
  }
}

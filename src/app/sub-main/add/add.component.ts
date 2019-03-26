import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AddService } from './add.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddComponent implements OnInit {

  constructor(public addService:AddService) { }

  ngOnInit() {
  }

}

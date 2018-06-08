import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  tasks = [];

  constructor(private dService:DataService) {

   }

  ngOnInit() {
      this.tasks = this.dService.storedTasks;
  }

 

}

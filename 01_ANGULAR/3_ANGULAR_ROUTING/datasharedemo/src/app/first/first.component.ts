import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

 constructor(private dService:DataService) {}

  task;
  ngOnInit() {
  }

  add(){
    this.dService.addTask(this.task)
  }

}

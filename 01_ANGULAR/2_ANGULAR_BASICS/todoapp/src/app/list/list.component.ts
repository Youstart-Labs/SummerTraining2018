import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  t={name:"xyz",pr:"L"}
  tasks = []
  mode= true;
  selectedIndex;

  add(){

    this.tasks.push({name:this.t.name,status:false,date:new Date(),priority:this.t.pr})
    this.t.name="";
    this.t.pr="";

  }
  remove(i){
    this.tasks.splice(i,1);
  }
  toggle(task){
    task.status = !task.status;
  }
  pending(){
    let count =0;
    for(let task of this.tasks){
      if(!task.status)count++;
    }
    return count;
  }

  edit(i){
    this.t.name = this.tasks[i].name;
    this.t.pr = this.tasks[i].priority;
    event.stopPropagation();
    this.mode = false;
    this.selectedIndex =i;
  }

  update(){

    this.tasks[this.selectedIndex].name = this.t.name;
    this.tasks[this.selectedIndex].priority = this.t.pr;
    this.t.name="";
    this.t.pr="";
    this.mode = true;

  }

  constructor() { }

  ngOnInit() {
  }

}

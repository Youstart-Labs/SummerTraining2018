import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  storedTasks = [];
  constructor() { }

  addTask(t){
      this.storedTasks.push(t)
  }
}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

export interface Task { name: string,status:boolean,priority:string }

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

private itemsCollection: AngularFirestoreCollection<Task>;
tasks: Observable<Task[]>;
  t={name:"xyz",pr:"L"}
  mode= true;
  selectedIndex;

  login(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  
   
}

  logout() {
    this.afAuth.auth.signOut();
  }


  add(){
    
    let task = {name:this.t.name,status:false,priority:this.t.pr};
    this.itemsCollection.add(task);

    this.t.name="";
    this.t.pr="";


  }
//   remove(i,id){
//     this.tasks.splice(i,1);
//     // this.http.delete('/task/'+id).subscribe((data)=>{
//     //     console.log(data);
//     // })
//   }
//   toggle(task){
//     task.status = !task.status;
//   }
//   pending(){
//     let count =0;
//     for(let task of this.tasks){
//       if(!task.status)count++;
//     }
//     return count;
//   }

//   edit(i){
//     this.t.name = this.tasks[i].name;
//     this.t.pr = this.tasks[i].priority;
//     event.stopPropagation();
//     this.mode = false;
//     this.selectedIndex =i;
//   }

//   update(){

//     this.tasks[this.selectedIndex].name = this.t.name;
//     this.tasks[this.selectedIndex].priority = this.t.pr;
//     this.t.name="";
//     this.t.pr="";
//     this.mode = true;

//   }

  constructor(db: AngularFirestore,public afAuth: AngularFireAuth) {

    this.itemsCollection = db.collection<Task>('tasks',);
    this.tasks = this.itemsCollection.valueChanges();

 } 
  ngOnInit() {
    //  this.http.get('/tasks').subscribe((data:any)=>{
    //      this.tasks = data;
    //      console.log(data);
    //  })
  }

}

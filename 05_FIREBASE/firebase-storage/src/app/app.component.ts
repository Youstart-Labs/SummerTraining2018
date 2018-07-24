import { Component } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import {HttpClient} from '@angular/common/http';
 
export interface Task { name: string; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  uploadPercent;
  profileUrl;

  private itemsCollection: AngularFirestoreCollection<Task>;
  items: Observable<Task[]>;
  constructor(db: AngularFirestore,private storage: AngularFireStorage,public http:HttpClient) {

    this.itemsCollection = db.collection<Task>('tasks');
    this.items = this.itemsCollection.valueChanges();

 }



 uploadFile(event) {
   const file = event.target.files[0];
   const filePath = 'images/'+file.name;
   const ref = this.storage.ref(filePath);
//    const task = ref.put(file);
//    this.uploadPercent = task.percentageChanges();

   this.profileUrl = ref.getDownloadURL();


 }

 uploadNodeFile(event) {
    const file = event.target.files[0];
    const formData: any = new FormData();
    formData.append("avatar", file,file.name);

    console.log(file); 
    this.http.post("http://localhost:8080/profile",formData).subscribe((data)=>{
        console.log(data);
    })
 
  }
 downloadFile(){
    const filePath = 'images/vue-react-angular.png';
    const ref = this.storage.ref(filePath); 
    this.profileUrl = ref.getDownloadURL();
 }

 ngOnInit(){
    this.downloadFile()
 }

}

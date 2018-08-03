import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { auth } from 'firebase';
import { map } from 'rxjs/operators';

// #1 step is to initialize the Interface
export interface User { name: string, age:number,email:string}
export interface Photo { caption: string, url:string}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
user:User = {}
u:User = {}
photo:Photo={}
userDoc:AngularFirestoreDocument<User>

    // #2 step is to make a collection variable for your Interface
  userCollection: AngularFirestoreCollection<User>;

  // #3 step is to make an array [Observable] to store your Documents 
  users: Observable<User[]>;
  photos: Observable<Photo[]>;


  constructor(private afs: AngularFirestore) { 
      //#4 make userCollection point to firebase collection 'users'
    this.userCollection = afs.collection<User>('users');
  }

  addUser(){

    //#5 add directly the data without ID.
    //this.userCollection.add(this.user)

    //#6 add data with a  ID.
    this.userCollection.doc(this.user.email).set(this.user)
  }

  updateUser(){
    // #7 Create a reference to existing document

    this.userDoc = this.afs.doc<User>('users/'+this.u.email)

    // #8 update the document

    this.userDoc.update(this.u)
  }


  updateUserSubDoc(){
    // #9 Create a reference to existing document

    this.userDoc = this.afs.doc<User>('users/'+this.u.email)

    // #10 add photos to sub-document/nested collection

    this.userDoc.collection<Photo>('photos').add(this.photo)
  }

  readDocs(){
      //# 11 Read all documents of a collection
      this.users = this.userCollection.valueChanges();
  }

  readSubDocs(){
     this.userDoc = this.afs.doc<User>('users/'+this.u.email)

     //# 13 Read all sub-documents of a nested collection
      this.photos = this.userDoc.collection<Photo>('photos').valueChanges();
  }

  queryDocs(){
     this.userCollection= this.afs.collection<User>('users',ref => ref.where('age',"==","100").limit(1));
    //  this.users= this.userCollection.valueChanges();


     this.userCollection.snapshotChanges().subscribe(users => {
       console.log(users)
        console.log(users[0].payload.doc); 
       console.log(users[0].payload.doc.id);
       this.photos = this.afs.collection<Photo>('users/'+users[0].payload.doc.id+"/photos").valueChanges();

      });

       
  }

  ngOnInit() {

  }

}

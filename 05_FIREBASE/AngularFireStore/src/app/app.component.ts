import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { auth } from 'firebase';
import { map } from 'rxjs/operators';

export interface Item { name: string; author:string}
export interface Author { name: string}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    uploadPercent: Observable<number>;
    downloadURL: Observable<string>;
    objectKeys = Object.keys;

  
    test:Item ={name:"",author:null}
    testAuthor:Author ={name:""}
   
    private itemsCollection: AngularFirestoreCollection<Item>;
    private authorCollection: AngularFirestoreCollection<Author>;

  items: Observable<Item[]>;
//   constructor(private afs: AngularFirestore) {
//     this.itemsCollection = afs.collection<Item>('books');
//     this.authorCollection = afs.collection<Author>('author');
//     this.items = this.itemsCollection.snapshotChanges().pipe(
//         map(actions => actions.map(a => {
//           const data = a.payload.doc.data() as Item;
//            console.log(data.author.path)
//            let author: AngularFirestoreDocument<Author> = afs.doc<Author>(data.author.path);
//            let b = author.valueChanges();  
//           return {auth:b, ...data };
//         }))
//       );
//   }
//   addItem(item: Item) {
//     this.itemsCollection.add(item);
//   }




}

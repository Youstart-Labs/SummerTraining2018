import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { AddComponent } from './add/add.component';

const config = {
    apiKey: "AIzaSyAFUIVSwXMixv6nUasRjyU_qn2q5qgfmhI",
    authDomain: "testproject-31ea5.firebaseapp.com",
    databaseURL: "https://testproject-31ea5.firebaseio.com",
    projectId: "testproject-31ea5",
    storageBucket: "testproject-31ea5.appspot.com",
    messagingSenderId: "289807365033"
  };
@NgModule({
  declarations: [
    AppComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    FormsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

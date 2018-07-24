import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
const config = {
    apiKey: "AIzaSyAJGUZST_mdmuoSTp-bjDOnZ6hHeO847zM",
    authDomain: "testingfire-ca254.firebaseapp.com",
    databaseURL: "https://testingfire-ca254.firebaseio.com",
    projectId: "testingfire-ca254",
    storageBucket: "testingfire-ca254.appspot.com",
    messagingSenderId: "611395756135"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireStorageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

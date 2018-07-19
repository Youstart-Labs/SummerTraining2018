import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

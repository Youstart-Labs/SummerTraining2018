import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstpageComponent} from './firstpage/firstpage.component';
import {SecondpageComponent} from './secondpage/secondpage.component';

const routes: Routes = [{path:'',component:FirstpageComponent},
{path:'second',component:SecondpageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

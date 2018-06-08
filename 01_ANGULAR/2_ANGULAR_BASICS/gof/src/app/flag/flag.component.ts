import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css','../../../node_modules/flag-icon-css/css/flag-icon.css']
})
export class FlagComponent implements OnInit {

  randomNationName; 
  randomNationISOCode; 
  myGuess;
  constructor(private cService:CountriesService) { }

  ngOnInit() {
  }

  next(){

    let countries = this.cService.getCountries();
    let random = Math.floor(Math.random()*countries.length);
    this.randomNationName = countries[random].name;
    this.randomNationISOCode = countries[random]['alpha-2']
    this.myGuess = "";
    console.log(this.randomNationISOCode,this.randomNationName)



  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { interval } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  path: string="../../assets/"
  currentSelection: number = 1;
  extension: string=".jpg"
  currentSelectionPath: string = ''
  currentSelectionName: string = `Ashton Ville`
  currentSelectionDesc: string = `6 Rooms - 5 bathrooms`
  s1: string = "selected";
  s2: string = "";
  s3: string = "";
  s4: string = "";
  opacity: string;
  isClicked: boolean = false;
  lsbox: Array<any> = [
    {
      title:'Huge & Private Ville',
      ic:'bx bxs-lock'
    }, {
      title:'24 Hours Security',
      ic:'bx bxs-hand'
    }, {
      title:'Modern Architecture',
      ic:'bx bxs-building-house'
    }, {
      title:'Technology Included',
      ic:'bx bx-barcode-reader'
    }  ]

  constructor(private route: Router) {
    interval(3000).subscribe(x=>{
      if(!this.isClicked){
      if(this.currentSelection == 1){
        this.onHandleSwitch(2)
      }
      if(this.currentSelection === 2){
        this.onHandleSwitch(3)
      }
      if(this.currentSelection === 3){
        this.onHandleSwitch(4)
      }
      if(this.currentSelection === 4){
        this.onHandleSwitch(1)
      }
      }
    })
  }

  ngOnInit(): void {
  }

  toggleClicked(){
    this.isClicked = true;
  }
  onHandleSwitch(selection: number){
    this.opacity="0"
    setTimeout(()=>{
    this.opacity="1"
    this.currentSelection = selection;
    if(selection === 1){
     this.s1 = "selected";
     this.s2 = "non_selected";
     this.s3 = "non_selected";
     this.s4 = "non_selected";
     this.currentSelectionName="ASHTON VILLE"
     this.currentSelectionDesc="6 Rooms - 5 Bathrooms"
    }
    else if(selection === 2){
     this.s2 = "selected";
     this.s1 = "non_selected";
     this.s3 = "non_selected";
     this.s4 = "non_selected";
     this.currentSelectionName="Domus Solis Luxury"
     this.currentSelectionDesc="6 Rooms - 4 Bathrooms"
    }
    else if(selection === 3){
     this.s3 = "selected";
     this.s1 = "non_selected";
     this.s2 = "non_selected";
     this.s4 = "non_selected";
     this.currentSelectionName="HILTON VALLEY"
     this.currentSelectionDesc="4 Rooms - 2 Bathrooms"
    }
    else if(selection === 4){
     this.s4 = "selected";
     this.s1 = "non_selected";
     this.s3 = "non_selected";
     this.s2 = "non_selected";
     this.currentSelectionName="SunStar"
     this.currentSelectionDesc="4 Rooms - 3 Bathrooms"
    }
    }, 280)
  }

}

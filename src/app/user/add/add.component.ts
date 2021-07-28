import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';

import { Addition } from 'src/app/models/addition.model';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  grandTotal: number;
  addition: Addition[]
  temp: number = 0;
  constructor() {

    this.grandTotal = 0;

    this.addition = [];
  }
  ngOnInit(): void {
  }
  insertItem(itemName: string, itemUnit: string, pricePerunit: string) {

    let pricePerUnit: number = parseInt(pricePerunit)
    let unit: number = parseInt(itemUnit)
    let total: number = pricePerUnit * unit
    this.grandTotal += total
    this.addition.push({ itemName, unit, pricePerUnit, total })
    console.log(this.addition)
  }
  deleteItem(array: Addition) {
    console.log(array)
    let temp = 0;
    const index = this.addition.indexOf(array)
    console.log(index + "index")
    temp = this.addition[index].total
    this.grandTotal -= temp
    this.addition.splice(index, 1)
  }
 oldvalue=0;
  editItem(value: any){
    let sm=value.target.parentElement
    console.log(sm)
     value.target.parentNode.parentNode.childNodes[0].contentEditable = true;
     value.target.parentNode.parentNode.childNodes[1].contentEditable = true;
     value.target.parentNode.parentNode.childNodes[2].contentEditable = true;
     //console.log(sm.childNodes[3].textContent)
    //  this.oldvalue=parseInt(value.childNodes[3].textContent)
     //console.log(this.oldvalue)

     value.textContent='save'
    //  console.log(value.target.textContent)
  }
}
function typeOf(typeOf: any, value: any) {
  throw new Error('Function not implemented.');
}


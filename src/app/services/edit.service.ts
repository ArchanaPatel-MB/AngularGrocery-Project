import { Addition } from 'src/app/models/addition.model';
import { Injectable } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EditService {


  grandTotal:number=0;
temp:number[]=[]
addition:Addition[]=[
  {
    id:1,
    itemName:'apple',
    unit:4,
    pricePerUnit:70,
    total:280

  }
]
  constructor() { 
    
  }
  insertItemm(idd:string,itemName: string, itemUnit: string, pricePerunit: string) {

    let pricePerUnit: number = parseInt(pricePerunit)
    let unit: number = parseInt(itemUnit)
    let total: number = pricePerUnit * unit
    this.grandTotal += total
    let id:number=parseInt(idd)
    this.addition.push({id, itemName, unit, pricePerUnit, total })
   this.temp.push(this.grandTotal)
   console.log(this.grandTotal+"//////")
}



returnGrandTotal(){
  console.log(this.grandTotal)
  return this.grandTotal
}
  
returnData(){
  return this.addition
}
  
}

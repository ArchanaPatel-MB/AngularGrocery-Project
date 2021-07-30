import { EditService } from './../services/edit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private editService:EditService) { }

  ngOnInit(): void {
  }
  // insertItem(idd:string,itemName: string, itemUnit: string, pricePerunit: string) {

  //   let pricePerUnit: number = parseInt(pricePerunit)
  //   let unit: number = parseInt(itemUnit)
  //   let total: number = pricePerUnit * unit
  //   // this.grandTotal += total
  //   let id:number=parseInt(idd)
  //   // this.addition.push({id, itemName, unit, pricePerUnit, total })
  //   // console.log(this.addition)
  // }

  insertItem(idd:string,itemName: string, itemUnit: string, pricePerunit: string){

    this.editService.insertItemm(idd,itemName,itemUnit,pricePerunit)
  }
}

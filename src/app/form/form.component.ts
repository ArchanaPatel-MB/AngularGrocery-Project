import { EditService } from './../services/edit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newValue:number=0

  constructor(private editService:EditService) { }
  ngOnInit(): void {
  }
  
  insertItem(idd:string,itemName: string, itemUnit: string, pricePerunit: string){
    this.editService.insertItemm(idd,itemName,itemUnit,pricePerunit)
      this.newValue=this.editService.returnGrandTotal()
     this.editService.emit<number>(this.newValue)
  }
}



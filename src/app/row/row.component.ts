import { Addition } from './../models/addition.model';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { EditService } from './../services/edit.service';


@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  constructor(private editService:EditService) { }
@Input() addItem:any
@Output() passValue=new EventEmitter
  ngOnInit(): void {
  }

  deleteItemm(addItem:object,event:any){
this.passValue.emit(addItem);

  }

  editItem(addItem:Addition,event:any){
    console.log(addItem)
    let num=addItem.id
    console.log(num)
    // this.editService.getMethod(addItem,num)
    this.editService.emit<number>(addItem)
    
  }
}

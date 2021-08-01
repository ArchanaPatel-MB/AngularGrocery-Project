import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  constructor() { }
@Input() addItem:any
@Output() passValue=new EventEmitter
  ngOnInit(): void {
  }

  deleteItemm(addItem:object,event:any){
this.passValue.emit(addItem);

  }

  editItem(addItem:object,event:any){
    
  }
}

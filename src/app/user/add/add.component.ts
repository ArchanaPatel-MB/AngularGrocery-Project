import { Addition } from 'src/app/models/addition.model';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/services/edit.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  constructor(private editService:EditService) {
    
  }
 addition:Addition[]=this.editService.returnData()
 
 grandTotal:number=0
  ngOnInit(): void {
    for(let i=0;i<this.addition.length;i++){
      this.grandTotal+=Number(this.addition[i].total)
    }
    
  }
  
 
  deleteItem(array: Addition) {
    let temp = 0;
    const index = this.addition.indexOf(array)
    console.log(index + "index")
    temp = this.addition[index].total
    this.grandTotal -= temp
    this.addition.splice(index, 1)
  }
  onget(addition:Addition){
    
  }

}


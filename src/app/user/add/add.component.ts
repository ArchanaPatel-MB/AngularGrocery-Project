import { Addition } from 'src/app/models/addition.model';
import { Component, Input, OnInit } from '@angular/core';
import { EditService } from 'src/app/services/edit.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
@Input() 
export class AddComponent implements OnInit {

data:number=0;
  constructor(private editService:EditService) {
    this.editService.on<string>().subscribe(
      (data)=>{
          this.data=Number(data)
      }
    )
    
  }
 addition:Addition[]=this.editService.returnData()
 temp:number=this.editService.returnGrandTotal();
 grandTotal:number=0
  ngOnInit(): void {
    console.log(this.data)
    for(let i=0;i<this.addition.length;i++){
      this.grandTotal+=Number(this.addition[i].total)
    }
  }
  deleteItem(array: Addition) {
    let temp = 0;
    const index = this.addition.indexOf(array)
    // console.log(index + "index")
    temp = this.addition[index].total
    this.data -= temp
    this.addition.splice(index, 1)
  }
  onget(num:number){
    
  }

}


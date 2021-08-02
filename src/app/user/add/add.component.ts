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
  data: number = 0;
  constructor(private editService: EditService) {
    this.editService.on<string>().subscribe(
      (data) => {
        this.data = Number(data)
      }
    )
  }
  addition: Addition[] = this.editService.returnData()
  
  ngOnInit(): void {
  }
  deleteItem(array: Addition) {
    let temp = 0;
    console.log(array)
    const index = this.addition.indexOf(array)
    console.log(index + "index")
    temp = this.addition[index].total
    this.data -= temp
    this.addition.splice(index, 1)
    this.editService.changeGrandTotal(this.data)

  }
  
}



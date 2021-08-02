import { Addition } from './../../models/addition.model';
import { EditService } from './../../services/edit.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    id !:number
    header: string=''
  addition: Addition[] =[
    {id:0,
    itemName:'',
    unit:0,
    pricePerUnit:0,
    total:0}
  ] 

  constructor(private router: Router, private route: ActivatedRoute, private editService:EditService) {
    // this.editService.on<any>().subscribe(
    //   (data) => {
    //     this.addition = data
    //   }
    // )
   }
  ngOnInit(): void {
  // this.id=parseInt(this.route.snapshot.paramMap.get('id'))
  //      this.header=this.id===0? '':'Edit'
  //      this.addition=this.editService.onGet()--
    console.log(this.addition)
  }
  
  onSubmit(form: NgForm) {
    let temp=form.value.unit*form.value.pricePerUnit
    let addition: Addition = {
      id:form.value.id,
      itemName: form.value.itemName,
      unit: form.value.unit,
      pricePerUnit: form.value.pricePerUnit,
      total:temp
    }
    console.log(addition)
    this.editService.onAdd(addition,addition.id)
    console.log(this.editService.addition)
    this.router.navigateByUrl("");
}
  
}




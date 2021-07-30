import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Addition } from 'src/app/models/addition.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  addition: Addition[] = [
  //   {
  //     itemName:'jdg',
  //     unit:3,
  //     pricePerUnit:7,
  //     total:21
  // }
  ];

  constructor(private router: Router, private route: ActivatedRoute) {

    console.log(this.addition)
   }
  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm) {
    let addition: Addition = {
      itemName: form.value.itemName,
      unit: form.value.unit,
      pricePerUnit: form.value.pricePerUnit,
     
      total:form.value.unit*form.value.pricePerUnit
    }
    console.log(addition)
    this.router.navigateByUrl("");
    // this.addition.push()
}

onUpdate(){
  
}


}

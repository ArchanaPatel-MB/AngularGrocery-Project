import { Addition } from './../models/addition.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {
 
  grandTotal: number = 0
  addition: Addition[] = []
  editText:Addition[]=[]

  public _subject = new BehaviorSubject<any>('');
  constructor() { }

  emit<T>(data: any) {
    this._subject.next(data);
  }
  on<T>(): Observable<T> {
    return this._subject.asObservable()
  }

  insertItemm(idd: string, itemName: string, itemUnit: string, pricePerunit: string) {
    let pricePerUnit: number = parseInt(pricePerunit)
    let unit: number = parseInt(itemUnit)
    let total: number = pricePerUnit * unit
    this.grandTotal += total;
    let id: number = parseInt(idd)
    this.addition.push({ id, itemName, unit, pricePerUnit, total })
  }

  changeGrandTotal(data: number) {
    this.grandTotal = data;
  }
  returnGrandTotal() {
    return this.grandTotal
  }
  returnData() {

    return this.addition
  }

//  getMethod(addItem: Addition,index:number) {
//      console.log(addItem)

//     // this.editText=addItem
    
//   }
  onAdd(addition:Addition,index:number){
    
    console.log(addition)
    this.addition.splice(index, 1, addition);
  }

}

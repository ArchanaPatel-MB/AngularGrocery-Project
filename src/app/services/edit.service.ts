import { Addition } from 'src/app/models/addition.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  grandTotal: number = 0
  temp: number[] = []
  addition: Addition[] = [
    {
      id: 1,
      itemName: 'apple',
      unit: 4,
      pricePerUnit: 70,
      total: 280
    }
  ]
 public _subject= new BehaviorSubject<any>('');
  constructor() { }

  emit<T>(data:number){
    this._subject.next(data);
  }

on<T>():Observable<T>{
  return this._subject.asObservable()
}



  insertItemm(idd: string, itemName: string, itemUnit: string, pricePerunit: string) {
    let pricePerUnit: number = parseInt(pricePerunit)
    let unit: number = parseInt(itemUnit)
    let total: number = pricePerUnit * unit
    this.grandTotal += total;
    let id: number = parseInt(idd)
    this.addition.push({ id, itemName, unit, pricePerUnit, total })
    this.temp.push(this.grandTotal)
    // console.log(this.temp)
    // console.log(this.grandTotal)    // here grandTotal=280 or get modified acording to operation in  
  }
  returnGrandTotal() {
    // console.log(this.grandTotal)  // here the grandTotal=0   modified value is not comming why
    return this.grandTotal
  }
  returnData() {
    return this.addition
  }
  newFunction(data:number){
  return data

}

}

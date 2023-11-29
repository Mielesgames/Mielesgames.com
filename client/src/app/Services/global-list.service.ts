// list.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { characterPartsList, characterPart } from '../Models/characterParts.interface';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private outputSubject: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

  outputSubjectValue$: Observable<number[]> = this.outputSubject.asObservable();


  private globalList: characterPart[] = characterPartsList;
  private selectedBodyParts: any[] = [];

  constructor() {
    for (let index = 0; index < this.globalList.length; index++) {
      this.globalList[index].id = index;
    }
  }

  getGlobalList(): any[] {
    return this.globalList;
  }

  getSelectedBodyParts(): any[]{
    return this.selectedBodyParts;
  }

  updateSelectedBodyParts(newList:number[]): void{
    this.selectedBodyParts = newList;
  }

  addToGlobalList(item: any): void {
    this.globalList.push(item);
  }

  setOutputSubject(value: number[]) {
    this.outputSubject.next(value);
}

  // Add other methods as needed, e.g., remove from the list, clear the list, etc.
}

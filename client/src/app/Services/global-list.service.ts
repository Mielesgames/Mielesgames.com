// list.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private outputSubject: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

  outputSubjectValue$: Observable<number[]> = this.outputSubject.asObservable();


  private globalList: any[] = [];

  getGlobalList(): any[] {
    return this.globalList;
  }

  addToGlobalList(item: any): void {
    this.globalList.push(item);
  }

  setOutputSubject(value: number[]) {
    this.outputSubject.next(value);
}

  // Add other methods as needed, e.g., remove from the list, clear the list, etc.
}

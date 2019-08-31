import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private toogleObject = new BehaviorSubject<boolean>(true);
  toogle = this.toogleObject.asObservable();

  constructor() { }

  toggle(isOpen: boolean) {
    this.toogleObject.next(isOpen);
  }

}

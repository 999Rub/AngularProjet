import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {

  public modified = false;
  public page= false;


  constructor() { }

  modifiedToggle(){
    this.modified = !this.modified;
    return this.modified;
  }

  pageToggle(){
    this.page = !this.page;
    return this.page;
  }

}

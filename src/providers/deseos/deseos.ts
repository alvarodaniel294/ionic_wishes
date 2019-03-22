import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DeseosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeseosProvider {

  constructor(private http: HttpClient) {
    console.log('Hello DeseosProvider Provider');
  }
  // constructor(){
    
  // }
  testProvider(){
    console.log('hola desde el provider');
    
  }

}

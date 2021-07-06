import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISolicitud } from '../reactive/interfaces/isolicitud';
import { of, Observable } from 'rxjs';

import {  catchError, map, tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TestService {


  private baseUrl: string = 'http://localhost:8080/interfell/api/v1';

  constructor(private http: HttpClient) {
}



firmar ( sol:ISolicitud):Observable<ISolicitud>{
 
      const url = `${this.baseUrl}/solicitudes/{{sol.id}}/firmar`
      const body = sol;
    //  return this.http.post<ISolicitud>(url, body)
    let   sol1: ISolicitud = {};
    if (sol.id === 7){
      sol.isRechazoFirma = true;
    }else{
      sol.isPositiveFirma = true;
    }
    return of(sol);
      
    }


  test(){
       console.log('Mi servicio');
  }
}

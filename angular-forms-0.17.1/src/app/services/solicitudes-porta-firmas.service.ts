import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISolicitud } from '../reactive/interfaces/isolicitud';
import { of, Observable } from 'rxjs';

import {  catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesPortaFirmasService {

  
  private baseUrl: string = 'http://localhost:8080/interfell/api/v1';

  constructor(private http: HttpClient) {
}



firmar ( sol:ISolicitud){
 
      const url = `${this.baseUrl}/solicitudes/{{sol.id}}/firmar`
      const body = sol;
      console.log('-------------------'+body)
      return this.http.post<ISolicitud>(url, body)
      .pipe(
            //Muta la respyuesta
            tap ( resp => {
            } ),
            map( resp => resp),
            catchError (err => of(err.error.msg))
          )
    }

}

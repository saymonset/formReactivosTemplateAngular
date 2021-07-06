import { Component, OnInit } from '@angular/core';
import { from, pipe } from 'rxjs';
import { ISolicitud } from '../../interfaces/isolicitud';
import { SolicitudesPortaFirmasService } from '../../../services/solicitudes-porta-firmas.service';
import { TestService } from 'src/app/services/test.service';
import { debounceTime, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styles: [
  ]
})
export class SolicitudesComponent implements OnInit {

  isStartFirmando: boolean = true;
  solicitudes : ISolicitud[] = []; 
  sol: ISolicitud = {};

  constructor(private testServicio : TestService,
    ) { 

    let i =10;
    for (i=0; i<10; i++){
      this.sol= {};
      this.sol.id = i;
      this.sol.asunto =' Solicitud ' + i;

      this.sol.isIncognitaFirma = true;
      this.solicitudes.push(this.sol)
    }

  }

  test(){
    console.log('Aqui!---------------');
 //this.testServicio.test();

 this.solicitudes.forEach((sol)=>{
      
    this.testServicio.firmar(sol)
    .pipe(
      
      tap( () => {
        sol.isIncognitaFirma =false;
        sol.isProcesoFirma =true;
       
      })
    )
    .subscribe(( resp:ISolicitud )=>{
  
      this.delay(1000).then((resolve)=>{
        sol.isIncognitaFirma =false;
        sol.isProcesoFirma =false;
        sol.isRechazoFirma = resp.isRechazoFirma;
        sol.isPositiveFirma =resp.isPositiveFirma;
        console.log(JSON.stringify(resp));
      })
      
   
          // console.log(resp.rechazoFirma + '= resp.isRechazoFirma, Respuesta del server resp.isPositiveFirma = ' + JSON.stringify(resp.positiveFirma))
    })
    });


    // const solicitudesFrom = from ([...this.solicitudes]);
    // solicitudesFrom.subscribe((resp)=>{
    //   console.log('FROM = '+JSON.stringify(resp.id))
    // });

  }

  private delay(ms: number)
  {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private async sleep()
  {
    await this.delay(1000);
  }

  ngOnInit(): void {
  }

}

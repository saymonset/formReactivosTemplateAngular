import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Documento } from '../interfaces/documento';
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {


  documentosFirmar: Documento[] = [];
  pageShow = 1;
  posicionCSV = 'Derecha';
  rotacionCSV = ' °';
  totalPages: number = 0;

  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor( private fb: FormBuilder ) { }


  /* Para referenciar un campo en el formulario */
  posicionCSVfb: FormControl = this.fb.control('');
  rotacionCSVfb: FormControl = this.fb.control('');
  pageShowfb : FormControl = this.fb.control('');

    /* Para referenciar un campo en el formulario */
    nuevoFavorito: FormControl = this.fb.control('', Validators.required );

  ngOnInit(): void {
  }


  cancelar() {
  }

  showPdf() {
    // const linkSource =
    //   'data:application/pdf;base64,' + this.documentosFirmar[0].base64;
    // this.pdfSrc = linkSource;
    this.pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  }




  pageRendered() {

    const textLayer = document.getElementsByClassName('textLayer');
    console.log('Text:ayer =' + JSON.stringify(textLayer));
    this.posicionCSV = 'Derecha';

    let csvDif = document.getElementById('divFirma');

    if (csvDif == undefined) {
      // si no esta creado el divFirma se crea
      let newEle = document.createElement('div'); //divFirma sera el div dinamico en el que se mostrara el csv

      let cssDiv = ` <div> `;
     // cssDiv += `<div style="color:red;position:absolute;top:95%;right:1%"> CUADRO 1 </div>`;

     
      cssDiv += `<div style="line-height: 12px; width: 18px; font-size: 8pt; font-family: tahoma; margin-top: 1px;margin-right: 2px; position:absolute; top:0; right:0;"> CUADRO 2 </div>`
      cssDiv += `</div>`


      newEle.id = 'divFirma'; //actualmente solo se muestra AQUI IRA LA FIRMA, el cual se cambiara por el csv
      // newEle.setAttribute(
      //   'style',
      //   'color:blue;position:absolute;top:95%;right:1%'
      // );
      newEle.innerHTML = cssDiv; // 'AQUI IRA LA FIRMA';

      let x = document.getElementsByClassName('textLayer')[0].append(newEle);
    } else {
      // si esta creado solo se resetea la posicion a derecha  cuando cambia de página
      csvDif.setAttribute(
        'style',
        'color:blue;position:absolute;top:95%;right:1%'
      );
    }
  }

  textLayerRendered(event: any) {
    console.log('textLayerRendered', event);
  }


  callBackFn(event: any) {
    console.log('callBackFn', event);
    // Setting total number of pages
    this.totalPages = event._pdfInfo.numPages
  }

  modifyCsv() {
    let csvDif = document.getElementById('divFirma') ;
    if (this.posicionCSV == 'Derecha') {
      // cambia la posición del div segun la entrada del selec tposicionCSV
      csvDif?.setAttribute(
        'style',
        'color:blue;position:absolute;top:95%;right:1%'
      );
    } else {
      csvDif?.setAttribute(
        'style',
        'color:blue;position:absolute;top:95%;left:1%'
      );
    }
  }

  rotateCSV() {
    // rota el div
    if (this.rotacionCSV == '' || this.rotacionCSV == '°') {
      this.rotacionCSV = '0';
    }
    let csvDif = document.getElementById('divFirma');
    let deg = this.rotacionCSV.split('°')[0].toString();
    console.log(this.rotacionCSV + '= this.rotacionCSV, Valor = '+deg);
    if (csvDif){
      csvDif.style.transform = 'rotate(' + deg + 'deg)';
    }
    
  }

}



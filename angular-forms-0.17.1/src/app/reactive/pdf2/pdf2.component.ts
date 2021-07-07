// app.component.ts
import { Component, ViewChild } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';


@Component({
  selector: 'app-pdf2',
  templateUrl: './pdf2.component.html',
  styleUrls: ['./pdf2.component.css']
})
export class Pdf2Component {
  title = 'angular-pdf-viewer-app';
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  @ViewChild(PdfViewerComponent) private pdfComponent!: PdfViewerComponent;
  renderText = true;
  originalSize = false;
  fitToPage = false;
  showAll = true;
  autoresize = false;
  showBorders = true;
  renderTextModes = [0, 1, 2];
  renderTextMode = 1;
  rotation = 0;
  zoom = 1;
  zoomScale = 'page-width';
  zoomScales = ['page-width', 'page-fit', 'page-height'];
  pdfQuery = '';
  totalPages: number =0 ;
  posicionCSV = 'Derecha';

  constructor(private window: Window) {
    // ...
}

  zoomIn() {
    this.zoom += 0.05;
  }

  zoomOut() {
    if (this.zoom > 0.05)
      this.zoom -= 0.05;
  }

  rotateDoc() {
    this.rotation += 90;
  }


  public onClick(){
    const textLayer = document.getElementsByClassName('textLayer');
    console.log('Text:ayer =' + JSON.stringify(textLayer));
    this.posicionCSV = 'Derecha';

    let csvDif = document.getElementById('divFirma');

    if (csvDif == undefined) {
        // si no esta creado el divFirma se crea
      let newEle = document.createElement('div'); //divFirma sera el div dinamico en el que se mostrara el csv
      newEle.id = 'divFirma'; //actualmente solo se muestra AQUI IRA LA FIRMA, el cual se cambiara por el csv
      newEle.setAttribute(
        'style',
        'color:blue;position:absolute;top:95%;right:1%'
      );
      newEle.innerHTML = 'AQUI IRA LA FIRMA DAVID!!!!!';

      let x = document.getElementsByClassName('textLayer')[0].append(newEle);
    } else {
      // si esta creado solo se resetea la posicion a derecha  cuando cambia de página
      csvDif.setAttribute(
        'style',
        'color:blue;position:absolute;top:95%;right:1%'
      );
    }
    
}

  // Event for search operation
  searchQueryChanged(event: any) {
    let newQuery: string = event?.target.value || '';
    if (newQuery !== this.pdfQuery) {
      this.pdfQuery = newQuery;
      this.pdfComponent.pdfFindController.executeCommand('find', {
        query: this.pdfQuery,
        highlightAll: true
      });
    } else {
      this.pdfComponent.pdfFindController.executeCommand('findagain', {
        query: this.pdfQuery,
        highlightAll: true
      });
    }
  }

  // Event handler when new PDF file is selected
  onFileSelected() {
    const $pdf: any = document.querySelector('#file');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer($pdf.files[0]);
    }
  }

  callBackFn(event:any) {
    console.log('callBackFn', event);
    // Setting total number of pages
    this.totalPages = event._pdfInfo.numPages
  }
  pageRendered(event:any) {
    console.log('pageRendered', event);
  }
  textLayerRendered(event:any) {
    console.log('textLayerRendered', event);
  }
  onError(event:any) {
    console.error('onError', event);
  }
  onProgress(event:any) {
    console.log('onProgress', event);
  }
}
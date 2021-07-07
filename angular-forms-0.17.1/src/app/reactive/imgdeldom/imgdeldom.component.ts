import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/* ES6 */
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
@Component({
  selector: 'app-imgdeldom',
  templateUrl: './imgdeldom.component.html',
  styleUrls: ['./imgdeldom.component.css']
})
export class ImgdeldomComponent implements OnInit {

    /* FormBuilder es mas optimo que el new FormGroup*/
    miFormulario: FormGroup = this.fb.group({
      /* Despues del valor que esta vacio.. Vienen los validadores sincronos */
      /* Para definir mas de un validador sincrono.. Colocamos [],
      Example: [ Validators.required, Validators.minLength(3) ]
      */
      nombre: [ , [ Validators.required, Validators.minLength(3) ]   ],
      precio: [ , [ Validators.required, Validators.min(0)] ],
      existencias: [ , [ Validators.required, Validators.min(0)] ],
    })
  
    constructor( private fb: FormBuilder ) { }
  
  ngOnInit(): void {
  }

  generarImg(){
    let node = document.getElementById('my-node') ;

    if (node){
      htmlToImage.toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        console.log('dataUrl = ' + dataUrl)
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
    }
  }
   
  //         htmlToImage.toPng(node)
  //             .then(function (dataUrl) {
  //               download(dataUrl, 'my-node.png');
  //             });
  // }

}

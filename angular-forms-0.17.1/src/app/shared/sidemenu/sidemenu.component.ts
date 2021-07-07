import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li {
        cursor:pointer;
      }
    `
  ]
})
export class SidemenuComponent {

  templateMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './template/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: './template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './template/switches'
    },
  ];

  reactiveMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './reactive/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches'
    },
    {
      texto: 'Checks dinamicos',
      ruta: './reactive/checks'
    },
    {
      texto: 'Pdfs',
      ruta: './reactive/pdf'
    }, {
      texto: 'Pdfs2',
      ruta: './reactive/pdf2'
    }, {
      texto: 'Solicitudes',
      ruta: './reactive/solicitudes'
    }, {
      texto: 'img',
      ruta: './reactive/img'
    },
  ];


}

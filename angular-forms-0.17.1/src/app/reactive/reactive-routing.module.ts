import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { ChecksComponent } from './checks/checks.component';
import { PdfComponent } from './pdf/pdf.component';
import { Pdf2Component } from './pdf2/pdf2.component';
import { SolicitudesComponent } from './dinamicos/solicitudes/solicitudes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basicos', component: BasicosComponent },
      { path: 'dinamicos', component: DinamicosComponent },
      { path: 'switches', component: SwitchesComponent },
      { path: 'checks', component:ChecksComponent },
      { path: 'pdf', component:PdfComponent },
      { path: 'pdf2', component:Pdf2Component },
      { path: 'solicitudes', component:SolicitudesComponent },
      { path: '**', redirectTo: 'basicos' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ReactiveRoutingModule { }

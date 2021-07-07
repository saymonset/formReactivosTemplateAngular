import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { ChecksComponent } from './checks/checks.component';
import { PdfComponent } from './pdf/pdf.component';
import { MaterialModule } from '../material/material.module';
import { Pdf2Component } from './pdf2/pdf2.component';
import { SolicitudesComponent } from './dinamicos/solicitudes/solicitudes.component';
import { HttpClientModule } from '@angular/common/http';
import { ImgdeldomComponent } from './imgdeldom/imgdeldom.component';

@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    ChecksComponent,
    PdfComponent,
    Pdf2Component,
    SolicitudesComponent,
    ImgdeldomComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    PdfViewerModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveRoutingModule
  ],
  providers: [
    { provide: Window, useValue: window }
]
})
export class ReactiveModule { }

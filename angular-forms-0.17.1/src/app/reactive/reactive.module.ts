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

@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    ChecksComponent,
    PdfComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PdfViewerModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }

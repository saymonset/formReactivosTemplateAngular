import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
/* Mismo nombres los dos  */
  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    condiciones: [ false, Validators.requiredTrue ]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }


  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    /* El   this.miFormulario.setValue( this.person) da error porque no trae notificaciones */
    /* Para corregir e inicializarlo con el this.person, lo pasamos por un reset */
    /* Realizo la operacon express, traido todos los valores a la persona y agrego 
    condiciones a false */
    this.miFormulario.reset({ 
      ...this.persona,
      condiciones: false
    });

    /* uiero mantener sincronizados el radio con el checks */
    /* Reacciones reactivas rxjs. Podemos suscribirnos a los cambios del fomulario*/
/*  
 this.miFormulario.get('condiciones')?.valueChange.subscribe( newValue => {
      console.log(newValue);
    })

*/
/* Desestructuramos el miFormulario con ({condiciones, ...rest}) , Saco
o desestructuro condiciones y el resto de argumentos con opereador rest ...rest*/
/* El resto de parametros es que se lo mando a persona */
    this.miFormulario.valueChanges.subscribe( ({ condiciones, ...rest }) => {
      // delete form.condiciones;
      this.persona = rest;
    })

  }

  guardar() {

    /* Tomo todos los valores del formulario como una copia*/
    const formValue = { ...this.miFormulario.value };
    /* Borro el objeto de condiciones */
    delete formValue.condiciones;

    /* Lo asigno a la persona */
    this.persona = formValue;

  }

}

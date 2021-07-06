import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre     : new FormControl('RTX 4080ti'),
  //   precio     : new FormControl(1500),
  //   existencias: new FormControl(5),
  // })

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

  ngOnInit() {
    /* Establecemos valores al formulario */
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio: 1600
    })
  }


  campoEsValido( campo: string ) {

    return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
  }

  guardar() {

    if ( this.miFormulario.invalid )  {
      /* Marcar todos los campos para que aparezca el error en tdos los controles */
      this.miFormulario.markAllAsTouched();
      return;
    }


    console.log(this.miFormulario.value);
    /* Limpiamos todos los controles por primera vez */
    this.miFormulario.reset();
  }



}

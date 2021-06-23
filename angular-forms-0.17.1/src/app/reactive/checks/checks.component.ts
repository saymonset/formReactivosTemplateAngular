import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

export interface Data  {
       name?:string;
       value?:string;
}

@Component({
  selector: 'app-checks',
  templateUrl: './checks.component.html',
  styleUrls: ['./checks.component.css']
})
export class ChecksComponent {

       isAgregarCampoCheck:boolean = false;
     
        checkboxGroup!: FormGroup;
        
        submittedValue: any;
        
        subscription!: Subscription;
        
        checkboxes = [{
          name: 'Value 1',
          value: 'value-1'
        }, {
          name: 'Value 2',
          value: 'value-2'
        }, {
          name: 'Value 3',
          value: 'value-3'
        }];

        checkboxesAux: any[] = [];

     

  // In case the checkboxes have default values
  // defaultValues = ['value-1', 'value-3'];

  checkBoxNewName : FormControl = this.fb.control('',[Validators.required]);
   
        agregarCheck(){
          if (this.checkBoxNewName.invalid){
              return ;
          }

          let nameSearch = this.checkBoxNewName.value;
          if (this.checkboxes.find((obj)=> obj.name == nameSearch)){
              return ;
          }
 
          let newCheck = {
            name: this.checkBoxNewName.value,
            value: this.checkBoxNewName.value
          }
         
            this.checkboxes.push(newCheck);
            this.checkboxesAux = [...this.checkboxGroup.controls.checkboxes.value];
            this.load();
            this.checkBoxNewName.setValue('');
            this.isAgregarCampoCheck = false;
        }

        onAgregarCampoCheck(){
            this.isAgregarCampoCheck = true;
            this.checkBoxNewName.setValue('');
        }

        onCancelarCampoCheck(){
          this.isAgregarCampoCheck = false;
          this.checkBoxNewName.setValue('');
      }

  get checkboxesArray(){

    return this.checkboxGroup.get('checkboxes') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  load(){
    this.checkboxGroup = this.fb.group({
     // checkboxes: this.fb.array(this.checkboxes.map(x => false))
      // Form Array to set default values
       checkboxes: this.fb.array(this.checkboxes.map( (x,index,array) => {
        return false;
       }))
    });


    const checkboxControl:FormArray = (this.checkboxGroup.controls.checkboxes as FormArray);
    this.subscription = checkboxControl.valueChanges.subscribe(checkbox => {
      checkboxControl.setValue(
        checkboxControl.value.map((value: any, i:any, array:any) => {
          console.log('=valor='+JSON.stringify(value));
          //
          return  value ? this.checkboxes[i].value : false
        }),
        { emitEvent: false }
      );
    });
  }

  ngOnInit() {
   this.load();
  }

  submit() {
    const checkboxControl = (this.checkboxGroup.controls.checkboxes as FormArray);
    const formValue = {
      ...this.checkboxGroup.value,
      checkboxes: checkboxControl.value.filter( (value: any) => !!value)
    }
    this.submittedValue = formValue;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

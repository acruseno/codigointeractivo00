import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formulario: FormGroup;
  title = 'formulario';

  constructor(private frmbuilder: FormBuilder) {
    this.formulario = this.frmbuilder.group({
      nombre: ["Aldo", Validators.required],
      apellido: ["Cruseño", Validators.required],
      email: ["mail@servicio.com", [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]]    
    });
  }

  onSubmit(parametro){
    console.log(parametro);
  }
}

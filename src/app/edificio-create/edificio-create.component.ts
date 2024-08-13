import { Component, OnInit } from '@angular/core';
import { EdificioService } from '../edificio.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edificio-create',
  templateUrl: './edificio-create.component.html'
})
export class EdificioCreateComponent implements OnInit {

  propietarios: any[] = [];
  edificioForm: FormGroup;

  constructor(private edificioService: EdificioService, private fb: FormBuilder) {
    this.edificioForm = this.fb.group({
      nombre: '',
      numpisos: 0,
      direccion: '',
      avaluo: 0,
      id_propietario: null
    });
  }

  ngOnInit(): void {
    this.edificioService.getPropietarios().subscribe(data => {
      this.propietarios = data;
    });
  }

  onSubmit(): void {
    this.edificioService.createEdificio(this.edificioForm.value).subscribe(result => {
      console.log('Edificio creado', result);
    });
  }
}
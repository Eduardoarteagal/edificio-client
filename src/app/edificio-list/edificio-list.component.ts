import { Component, OnInit } from '@angular/core';
import { EdificioService } from '../edificio.service';

@Component({
  selector: 'app-edificio-list',
  templateUrl: './edificio-list.component.html'
})
export class EdificioListComponent implements OnInit {

  edificios: any[] = [];

  constructor(private edificioService: EdificioService) { }

  ngOnInit(): void {
    this.edificioService.getEdificios().subscribe(data => {
      this.edificios = data;
    });
  }
}
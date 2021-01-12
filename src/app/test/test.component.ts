import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../servicios/mensajes.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public servicioMensajes: MensajesService) { }

  ngOnInit(): void {
    this.servicioMensajes.add("prueba");
  }

}

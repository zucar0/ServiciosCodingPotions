import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  //Array de mensajes inicializado a array vacío
  messages: string[] = [];

  //Método de añadir mensajes
  add(messages: string){
    this.messages.push(messages);
  }
  //Método de borrar mensajes
  clear(){
    this.messages = [];
  }

  constructor() { }
}

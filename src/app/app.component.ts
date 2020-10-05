import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttons: { name: string; icon: string; visible:boolean }[];
 


  constructor() {
    this.buttons = [
      {
        name: "Reserva de salas", 
        icon: "assets/img/icon1.png",
        visible: true
      },
      {
        name: "Reporte de Problemas", 
        icon: "assets/img/icon2.png",
        visible: true
      },
      {
        name: "Mi equipo", 
        icon: "assets/img/icon3.png",
        visible: true
      },
      {
        name: "Comunicados", 
        icon: "assets/img/icon5.png",
         visible: true
      },
      {
        name: "Ficha de sintomatología", 
        icon: "assets/img/icon4.png",
         visible: true
      }
    ]

  }

  showAlert(name){
    alert(`Hiciste click en  ${name}`)

  }
}

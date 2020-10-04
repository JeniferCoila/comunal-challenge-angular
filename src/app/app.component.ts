import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttons: { name: string; icon: string; }[];
 


  constructor() {
    this.buttons = [
      {
        name: "Reserva de salas", 
        icon: "assets/icon1.png"
      },
      {
        name: "Reporte de Problemas", 
        icon: "assets/icon2.png"
      },
      {
        name: "Mi equipo", 
        icon: "assets/icon3.png"
      },
      {
        name: "Comunicados", 
        icon: "assets/icon5.png"
      },
      {
        name: "Ficha de sintomatología", 
        icon: "assets/icon4.png"
      }
    ]

  }
}

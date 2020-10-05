import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  buttons: { name: string; icon: string; visible:boolean }[];


  constructor(private router: Router) {
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

  ngOnInit(){}

  showAlert(name){
    if(name === "Reporte de Problemas") { this.router.navigate(['problems'])}
    else {   alert(`Hiciste click en  ${name}`) }
  

  }

}

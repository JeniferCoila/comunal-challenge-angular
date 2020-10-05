import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ProblemsComponent } from "./problems/problems.component";
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
  },
  {
    path: "problems",
    component: ProblemsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

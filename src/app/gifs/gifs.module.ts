import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';



@NgModule({
  declarations: [
    HomePagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePagesComponent
  ]
})
export class GifsModule { }

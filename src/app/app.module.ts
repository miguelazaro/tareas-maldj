import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// componentes 

import { AppComponent } from './app.component';
import { NavbarMaldjComponent } from './components/navbar-maldj/navbar-maldj.component';
import { TareasMaldjComponent } from './components/tareas-maldj/tareas-maldj.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarMaldjComponent,
    TareasMaldjComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

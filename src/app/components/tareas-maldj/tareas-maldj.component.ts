import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'maldj-app-tareas-maldj',
  templateUrl: './tareas-maldj.component.html',
  styleUrls: ['./tareas-maldj.component.css']
})
export class TareasMaldjComponent implements OnInit {
  listTareas: Tarea[] = [];
  nombreTarea = '';

  constructor() { }
  ngOnInit(): void {
  }
  agregarTarea(): void {
    //console.log(this.nombreTarea);
    // crear el objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
   // agregar el objeto tarea al array= listTareas
    this.listTareas.push(tarea);
  // Resetear form 
    this.nombreTarea = '';
  }
  eliminarTarea(index: number): void {
    //console.log( 'A borrar:' + index)
    this.listTareas.splice(index, 1);
  }
}

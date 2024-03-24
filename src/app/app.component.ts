import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TareasService } from './services/tareas.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  
  tasksList: string[]=[]
  newTask: string= ""

  private _tasksService= inject(TareasService)

  ngOnInit(): void {
    this.tasksList= this._tasksService.getTasks()
  }

  addTask(){
    this._tasksService.addTask(this.newTask)
    this.newTask= ""
    this.tasksList= this._tasksService.getTasks()
  }

  deleteTask(index: number){
    this._tasksService.deleteTask(index)
    this.tasksList= this._tasksService.getTasks()
  }

}

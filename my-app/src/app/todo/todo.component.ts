import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  tasks: string[] = [];
  newTask: string = ""

  addTask() {
    if(this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
      this.newTask = ""
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1)
  }
}

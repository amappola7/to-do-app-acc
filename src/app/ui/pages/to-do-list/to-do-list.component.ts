import { Component } from '@angular/core';
import { Task } from 'src/app/models/task';
import { dummyTasks } from 'dummyData';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  tasksList: Task[] = dummyTasks;

}

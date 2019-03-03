import { Component, Input, OnInit } from '@angular/core';
import { Apollo, Subscription } from 'apollo-angular';
import { SaveTaskInput, Task, UpdateTaskInput } from 'src/app/apollo/model/graphql';
import { GET_TASKS, SAVE_TASK, TaskMutationResponse, TasksQueryResponse, UPDATE_TASK } from './tasklist.graphql';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  @Input()
  userId: string;

  tasks: Task[] = [];

  taskDescription;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.getTasks();
  }

  /**
   * Gets all tasks for a specific user
   */
  public getTasks() {
    this.apollo.query({
      query: GET_TASKS,
      variables: {
        id: this.userId
      }
    }).subscribe((response) => {
      this.tasks = (<TasksQueryResponse>response.data).tasks;
    })

  }

  /**
   * Creates a new task
   */
  public addTask() {
    const tempDescription = this.taskDescription;

    const task = this.getSaveTaskInputTemplate();
    task.description = tempDescription;
    task.userId = this.userId

    this.saveTask(task);
    this.taskDescription = '';
  }

  /**
   * Updates an existing task.
   * @param taskId The id for the task to update
   */
  public updateTask(taskId: string) {
    const task = this.mapToInput(this.findTask(taskId));
    task.done = !task.done;

    this.apollo.mutate({
      mutation: UPDATE_TASK,
      variables: {
        input: task
      }
    }).subscribe();
  }

  /**
   * Saves a new task.
   * @param task The task to save
   */
  public saveTask(task: SaveTaskInput) {
    this.apollo.mutate({
      mutation: SAVE_TASK,
      variables: {
        input: task
      }
    }).subscribe((response) => {
      this.tasks.push((<TaskMutationResponse>response.data).saveTask);
    });
  }

  //#region Helper

  public findTask(id: string): Task {
    let tmp = this.tasks.find(x => x.id === id);
    return tmp;
  }

  public mapToInput(task: Task): UpdateTaskInput {
    return {
      id: task.id,
      description: task.description,
      done: task.done
    };
  }

  public getSaveTaskInputTemplate(): SaveTaskInput {
    return { id: null, done: false, description: '', userId: null };
  }

  //#endregion
}

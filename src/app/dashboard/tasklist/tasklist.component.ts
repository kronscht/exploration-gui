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

  /**
   * The user in scope.
   */
  @Input()
  userId: string;

  /**
   * All tasks for an unser.
   */
  tasks: Task[] = [];

  /**
   * Model for the new task to create.
   */
  taskDescription;

  /**
   * Constructor.
   * @param apollo The apollo client
   */
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.getTasks();
  }

  /**
   * Gets all tasks for a specific user.
   */
  public getTasks() {
    this.apollo.watchQuery({
      query: GET_TASKS,
      variables: {
        id: this.userId
      }
    }).valueChanges.subscribe((response) => {
      this.tasks = (<TasksQueryResponse>response.data).tasks;
    });
  }

  /**
   * Creates a new task.
   */
  public addTask() {

    if (this.taskDescription) {
      const tempDescription = this.taskDescription;
      const task = this.getSaveTaskInputTemplate(tempDescription);
      this.saveTask(task);
      // reset
      this.taskDescription = '';
    } else {
      alert("Cannot save empty task");
    }
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
      },
      refetchQueries: [{
        query: GET_TASKS,
        variables: {
          id: this.userId
        }
      }]
    }).subscribe((response) => {
      // this.tasks.push((<TaskMutationResponse>response.data).saveTask);
    });
  }

  //#region Helper

  /**
   * Finds a task by its id in the list of tasks.
   * @param id The id to search for
   */
  private findTask(id: string): Task {
    let tmp = this.tasks.find(x => x.id === id);
    return tmp;
  }

  /**
   * Converts a Task obejct to a UpdateTaskInput object.
   * @param task The original task
   */
  private mapToInput(task: Task): UpdateTaskInput {
    return {
      id: task.id,
      description: task.description,
      done: task.done
    };
  }

  private getSaveTaskInputTemplate(description: string): SaveTaskInput {
    return { id: null, done: false, description: description, userId: this.userId };
  }

  //#endregion
}

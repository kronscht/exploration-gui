import { Component, OnInit, Input } from '@angular/core';
import { Todo, UpdateTodoInput } from 'src/app/apollo/model/graphql';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {


  private UPDATE_TODO = gql`
    mutation UpdateTodo($input: UpdateTodoInput) {
      updateTodo(input: $input) {
        id
        done
        description
      }
    }  
  `

  @Input()
  todos: Todo[];

  newTodos: Todo[] = [];

  description;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
  }

  public updateTodo(event: any) {
    let todo = this.mapToInput(this.findTodo(event));
    todo.done = !todo.done;
    this.apollo.mutate({
      mutation: this.UPDATE_TODO,
      variables: {
        input: todo
      }
    }).subscribe();
  }

  public findTodo(id: string): Todo {
    let tmp = this.todos.find(x => x.id === id);
    return tmp;
  }

  public mapToInput(todo: Todo): UpdateTodoInput {
    return {
      id: todo.id,
      description: todo.description,
      done: todo.done
    };
  }

  public addNewTodo() {
    const tmp = this.description;
    this.todos.push({id: null, done: false, description: tmp});
    this.description = '';
  }

}

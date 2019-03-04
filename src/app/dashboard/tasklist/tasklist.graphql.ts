import gql from 'graphql-tag'
import { Task } from 'src/app/apollo/model/graphql';

export const GET_TASKS = gql`
query tasks($id: ID!)
{  
  tasks(id: $id) {
    id
    description
    done
  }
}
`

export interface TasksQueryResponse {
    tasks: Task[];
}

export const UPDATE_TASK = gql`
mutation UpdateTask($input: UpdateTaskInput) {
  updateTask(input: $input) {
    id
    done
    description
  }
}  
`

export const SAVE_TASK = gql`
mutation SaveTask($input: SaveTaskInput) {
  saveTask(input: $input) {
    id
    done
    description
  }
}  
`
export interface TaskMutationResponse {
    saveTask: Task;
}

export const DELETE_TASK = gql`
mutation DeleteTask($id: ID!) {
  deleteTask(id: $id)
}
`

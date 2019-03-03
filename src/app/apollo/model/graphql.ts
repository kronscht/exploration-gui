export type Maybe<T> = T | null;

export interface AppUserInput {
  name?: Maybe<string>;

  surname?: Maybe<string>;

  todos?: Maybe<(Maybe<TodoInput>)[]>;
}

export interface TodoInput {
  description?: Maybe<string>;

  done?: Maybe<boolean>;

  appUser?: Maybe<AppUserInput>;
}

export interface UpdateTodoInput {
  id: string;

  description?: Maybe<string>;

  done?: Maybe<boolean>;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  appUsers?: Maybe<(Maybe<AppUser>)[]>;
}

export interface AppUser {
  id?: Maybe<string>;

  name?: Maybe<string>;

  surname?: Maybe<string>;

  todos?: Maybe<(Maybe<Todo>)[]>;
}

export interface Todo {
  id?: Maybe<string>;

  description?: Maybe<string>;

  done?: Maybe<boolean>;

  appUser?: Maybe<AppUser>;
}

export interface Mutation {
  writeAppUser?: Maybe<AppUser>;

  updateTodo?: Maybe<Todo>;
}

// ====================================================
// Arguments
// ====================================================

export interface WriteAppUserMutationArgs {
  input?: Maybe<AppUserInput>;
}
export interface UpdateTodoMutationArgs {
  input?: Maybe<UpdateTodoInput>;
}

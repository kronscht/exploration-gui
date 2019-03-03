export type Maybe<T> = T | null;

export interface AppUserInput {
  name?: Maybe<string>;

  surname?: Maybe<string>;
}

export interface UpdateTaskInput {
  id: string;

  description?: Maybe<string>;

  done?: Maybe<boolean>;
}

export interface SaveTaskInput {
  id?: Maybe<string>;

  description?: Maybe<string>;

  done?: Maybe<boolean>;

  userId: string;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  appUsers?: Maybe<(Maybe<AppUser>)[]>;

  tasks?: Maybe<(Maybe<Task>)[]>;
}

/** model.AppUser */
export interface AppUser {
  id?: Maybe<string>;

  name?: Maybe<string>;

  surname?: Maybe<string>;
}

/** model.Task */
export interface Task {
  id?: Maybe<string>;

  description?: Maybe<string>;

  done?: Maybe<boolean>;

  appUser?: Maybe<AppUser>;
}

export interface Mutation {
  writeAppUser?: Maybe<AppUser>;

  updateTask?: Maybe<Task>;

  saveTask?: Maybe<Task>;
}

// ====================================================
// Arguments
// ====================================================

export interface TasksQueryArgs {
  id: string;
}
export interface WriteAppUserMutationArgs {
  input?: Maybe<AppUserInput>;
}
export interface UpdateTaskMutationArgs {
  input?: Maybe<UpdateTaskInput>;
}
export interface SaveTaskMutationArgs {
  input?: Maybe<SaveTaskInput>;
}

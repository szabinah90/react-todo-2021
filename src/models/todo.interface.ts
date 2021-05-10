export interface ITodo extends INewTodo {
  id: number;
}

export interface INewTodo {
  userId: number;
  title: string;
  completed: boolean;
}

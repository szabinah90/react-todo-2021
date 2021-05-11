export interface ITodo extends INewTodo {
  id: number;
}

export interface INewTodo {
  title: string;
  completed: boolean;
}

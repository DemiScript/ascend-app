import { ITask } from "./types/tasks";

const baseURL = " http://localhost:3001";

// Will return a promise
export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseURL}/tasks`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseURL}/tasks`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(todo)
  })
  const newTodo = await res.json();
  return newTodo;
}

export const editTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseURL}/tasks/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(todo)
  })
  const updatedTodo = await res.json();
  return updatedTodo;
}

export const deleteTodo = async (id: string): Promise<void> => {
  const res = await fetch(`${baseURL}/tasks/${id}`, {
    method: "DELETE"
    }) 
  }
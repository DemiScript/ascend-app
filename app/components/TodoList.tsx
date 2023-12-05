import { ITask } from "@/types/tasks"
import Task from "./Task";
import React from "react";

interface TodoListProps {
  tasks: ITask[]
}
const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
      <thead>
        <tr className="font-bold bg-base-200 text-slate-900 uppercase">
          <th>Tasks</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
        <Task key={task.id} task={task} />
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default TodoList;

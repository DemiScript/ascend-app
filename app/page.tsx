import AddTask from './components/AddTask';
import TodoList from './components/TodoList';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Ascend</h1>
        <h2 className="text-l font-bold">Add your tasks below, complete them for a surprise!</h2>
        <AddTask />
      </div>
      <TodoList />
      </main>
  )
}

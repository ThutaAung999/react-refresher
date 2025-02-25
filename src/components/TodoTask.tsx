import { Todo } from "./type";

const TodoTask = ({ todo }: { todo: Todo }) => {
  return (
    <div
      key={todo.id}
      className="bg-violet-100 text-black p-3 rounded cursor-pointer "
    >
      <h1>{todo.title}</h1>
      <p>{todo.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
};

export default TodoTask;

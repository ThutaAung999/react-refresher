import { useState } from "react";
import { Todo } from "./type";
import TodoTask from "./TodoTask";

const SearchComponent = ({ todos }: { todos: Todo[] }) => {
  //input  box   ထဲကဝင်လာတဲ့တန်ဖို့း ကို အောက်က   state မှာ သိမ်းထားတယ်
  const [searchKey, setSearchKey] = useState("");
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);

  const searchTodo = () => {
    const filtered = todos.filter((todo) => {
      return todo.title.toLowerCase().includes(searchKey.toLowerCase());
    });
    setFilteredTodos(filtered);
    console.log(filtered);
  };

  const clearSearch = () => {
    setSearchKey("");
    setFilteredTodos(todos);
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-4 uppercase">
        React Project Test
      </h1>
      <div className="flex   gap-4">
        <input
          type="text"
          value={searchKey}
          className="border-2  w-3/4  border-black rounded-lg p-2 focus:none "
          placeholder="Enter Text"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button
          className="text-white bg-blue-600 hover:bg-blue-800  rounded-4xl p-2  grow"
          onClick={searchTodo}
        >
          Search
        </button>
        <button
          className="text-white bg-red-600 hover:bg-red-800 rounded-4xl p-2 grow"
          onClick={clearSearch}
        >
          Clear
        </button>
      </div>
      <p className="text-right mt-5 font-medium">
        Total Todos : {filteredTodos.length}
      </p>
      {filteredTodos.length !== 0 ? (
        <div className="grid grid-cols-2 gap-3 mt-6">
          {filteredTodos.map((todo) => {
            return <TodoTask todo={todo} key={todo.id} />;
          })}
        </div>
      ) : (
        <p className="text-lg text-red-600 text-center">There is no Todos</p>
      )}
    </div>
  );
};
export default SearchComponent;

import { useRef, useState } from "react";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);

  const inputRef = useRef();

  function addTodo() {
    const todoInput = inputRef.current.value;
    const updatedTodoList = [...todoList, todoInput];
    setTodoList(updatedTodoList);
    inputRef.current.value = "";
  }

  function deleteTodo(todoItem) {
    console.log(todoItem);
    const updatedTodoList = todoList.filter((todo) => todo !== todoItem);
    setTodoList(updatedTodoList);
  }

  return (
    <div className="text-white flex flex-col items-center">
      <h2 className="font-bold text-2xl mb-12">Simple Todo Application</h2>
      <div className="flex gap-3">
        <input
          type="text"
          name="todo-input"
          id="todo-input"
          placeholder="Enter Todo Item..."
          ref={inputRef}
          className="rounded p-2 px-4 w-[32rem] text-black focus:outline-none"
        />
        <button
          className="bg-white text-black p-2 px-4 rounded"
          onClick={addTodo}
        >
          ADD
        </button>
      </div>

      <div className="mt-8 w-full">
        {todoList.map((todoItem) => (
          <div className="flex gap-3 justify-center" key={todoItem}>
            <p className="bg-green-400 text-black p-2 px-4 rounded w-96 my-2 mx-5">
              {todoItem}
            </p>
            <button className="" onClick={() => deleteTodo(todoItem)}>
              <i className="fa-solid fa-trash-can text-2xl text-black"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

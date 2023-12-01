import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      // adding to todo list
      addTodo(value);

      setValue("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="todo--form">
        <input
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="What you want to do today?"
        />
        <button>Add Task</button>
      </form>
    </>
  );
}

import { useState } from "react";

export default function EditTodo({ editTask, task }) {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      // adding to todo list
      editTask(value, task.id);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="todo--form">
        <input
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder={value}
        />
        <button>Update</button>
      </form>
    </>
  );
}

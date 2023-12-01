import TodoForm from "./TodoForm.jsx";
import { useState } from "react";
import Todo from "./Todo.jsx";
import EditTodo from "./EditTodo.jsx";

export default function TodoWrapper() {
  const [todoList, setTodolist] = useState([]);

  // add task to todo list
  const addTodo = (todo) => {
    setTodolist([
      ...todoList,
      {
        id: todoList.length + 1,
        task: todo,
        isComplete: false,
        isEditing: false,
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodolist(todoList.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodolist(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodolist(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodolist(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="todoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todoList.map((todo) =>
        todo.isEditing ? (
          <EditTodo editTask={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
}

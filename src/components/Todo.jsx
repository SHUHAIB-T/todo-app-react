export default function Todo(props) {
  console.log(props);
  return (
    <div className="todo">
      <p
        className={props.task.isComplete ? "complete" : "notComplete"}
        onClick={() => props.toggleComplete(props.task.id)}
      >
        {props.task.task}
      </p>
      <div className="icons">
        <i onClick={() => props.editTodo(props.task.id)} 
        className="fa-regular fa-pen-to-square"></i>
        <i
          onClick={() => props.deleteTodo(props.task.id)}
          className="fa-solid fa-delete-left"
        ></i>
      </div>
    </div>
  );
}

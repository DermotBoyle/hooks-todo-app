import React, { useState, useCallback } from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Task Completed</button>
        <button onClick={() => removeTodo(index)}>Delete Task</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={event => setValue(event.target.value)}
      ></input>
    </form>
  );
}

function TodoList() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about Hooks",
      isCompleted: false
    },
    { text: "review learning", isCompleted: false },
    { text: "write blog post about hooks", isCompleted: false }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          >
            {todo.text}
          </Todo>
        ))}{" "}
        <TodoForm addTodo={addTodo}></TodoForm>
      </div>
    </div>
  );
}

export default TodoList;

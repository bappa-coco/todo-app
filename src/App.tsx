import React from "react";
import "./App.css";
import Header from "./Components/Header";
import TodoListItem from "./Components/TodoListItem";

function App() {
  return (
    <>
      <Header />
      <div className="todo-app">
        <header>
          <h1>Todo List Item</h1>
        </header>
        <TodoListItem />
      </div>
    </>
  );
}

export default App;

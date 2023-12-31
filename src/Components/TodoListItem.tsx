import { useEffect, useState } from "react";
import AddTodoItemForm from "./Form";
import TodoList from "./TodoList";
import useLocalStorage from "./LocalStorage";
import type { TodoForm } from "./todoTypes";


interface Todo {
  id: number;
  text: string;
}

const TodoListItem = () => {
  const [savedTodos, setSavedTodos] = useLocalStorage("savedTodos", "[]");
  const [todos, setTodos] = useState<Todo[]>(() => savedTodos);

  useEffect(() => {
    setSavedTodos(todos);
  }, [setSavedTodos, todos]);

  function addTodoItemIntoList(todoForm: TodoForm){
    setTodos((currentTodos) => [
      { 
        id: Math.random() * 1234, 
        text: todoForm.todoText 
      },
      ...currentTodos,
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: number, value: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: value } : todo))
    );
  };

  return (
    <main className="h-screen w-screen bg-red-100 flex justify-center p-2 dark:bg-[#0e1724] ">
      <section className="w-full max-w-[420px] h-fit p-2 bg-white rounded-md mt-5 dark:bg-[#25273C] overflow-hidden font-primary">
        <AddTodoItemForm
          handleFormSubmit={addTodoItemIntoList}
        />

        <section className="p-1 px-3">
          {todos.length === 0 && (
            <p className="pt-1 my-1 text-sm text-center dark:text-white">
              Add your first Todo
            </p>
          )}

          {todos.map((todo) => (
            <TodoList
              key={todo.id}
              todoText={todo.text}
              handleClick={() => deleteTodo(todo.id)}
              handleUpdateTodo={(value) => updateTodo(todo.id, value)}
            />
          ))}
        </section>
      </section>
    </main>
  );
};

export default TodoListItem;

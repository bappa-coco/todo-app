// import React from "react";
// import { TodoListItem } from "./TodoListItem";

// interface TodoListProps {
//   todos: Array<Todo>;
//   toggleComplete: ToggleComplete;
//   onRemoveTodo: RemoveTodo;
//   editTodo: EditTodo;
// }

// export const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, onRemoveTodo, editTodo }) => {
//   return (
//     <ul>
//      {todos.map(todo => (
//        <TodoListItem
//           key={todo.text}
//           todo={todo}
//           toggleComplete={toggleComplete}
//           onRemoveTodo={onRemoveTodo}
//           editTodo={editTodo}
//         />
//      ))}
//     </ul>
//   );
// };


import { useState } from "react";
import EditTodo from "./Dropdown";

interface Props {
  completed: boolean | undefined;
  checkBoxClick: (value: boolean) => void;
  todoText: string;
  handleClick: () => void;
  handleUpdateTodo: (value: string) => void;
}
const TodoList = ({
  completed,
  checkBoxClick,
  todoText,
  handleClick,
  handleUpdateTodo,
}: Props) => {
  const [editTodo, setEditTodo] = useState(false);
  return (
    <section className="flex items-center justify-between mt-2 mb-2 border-b dark:border-slate-700 ">
      <div className="flex items-center gap-2 dark:text-[#DDE6ED] px-1">
        <input
          className="hover:cursor-pointer accent-pink-500 dark:accent-gray-400"
          id="checkbox"
          type="checkbox"
          checked={completed}
          onChange={(e) => checkBoxClick(e.target.checked)}
        />
        {todoText.length > 80 ? todoText.substring(0, 80) + "..." : todoText}
      </div>

      <div className="flex gap-2 ml-1">
        <button onClick={() => setEditTodo(true)}>
          {/* <AiFillEdit className="text-gray-500 dark:text-[#DDE6ED]" /> */}
        </button>
        <button onClick={() => handleClick()}>
          {/* <FiDelete className="text-red-500 dark:text-red-100" /> */}
        </button>
      </div>

      {editTodo && (
        <EditTodo
          editTodoState={editTodo}
          handleSubmit={(value) => {
            handleUpdateTodo(value);
            setEditTodo(false);
          }}
          setEditState={(value) => setEditTodo(value)}
          currentTodo={todoText}
        />
      )}
    </section>
  );
};

export default TodoList;
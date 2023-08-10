// import React, { useState, ChangeEvent, FormEvent } from 'react';

import { Button } from "@mui/material";

// interface TodoFormProps {
//     addTodo: AddTodo;
// }

// export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
//     const [newTodo, setNewTodo] = useState<string>("");

//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setNewTodo(e.target.value);
//     }

//     const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
//         e.preventDefault();
//         addTodo(newTodo);
//         setNewTodo("");
//     }

//     return (
//         <form className="todo-form">
//             <input type="text" value={newTodo} className="todo-input" placeholder="Add a new todo" onChange={handleChange} />
//             <button type="submit" className="todo-button" onClick={handleSubmit}>
//                 Add Todo
//             </button>
//         </form>
//     )
// };




interface Props {
  handleSubmit: () => void;
  setInputValue: (value: string) => void;
  inputValue: string;
}
const TodoForm = ({ handleSubmit, setInputValue, inputValue }: Props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    
    <div className="todo-form">
      <input
        className="todo-input"
        type="text"
        placeholder="add a todo..."
        value={inputValue}
        name="input"
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
      />
      <Button variant="contained" href="#contained-buttons"onClick={handleSubmit}>
        Add Todo
      </Button>
    </div>
  );
};

export default TodoForm;
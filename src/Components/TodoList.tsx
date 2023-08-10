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
import {
  Checkbox,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

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
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [editTodo, setEditTodo] = useState(false);
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={2}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <Checkbox
                {...label}
                color="success"
                checked={completed}
                onChange={(e) => checkBoxClick(e.target.checked)}
              />
            </Grid>
            <Grid item>
              <Typography>
                {todoText.length > 80
                  ? todoText.substring(0, 80) + "..."
                  : todoText}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-start"
          >
            <Grid item>
              <IconButton aria-label="delete" onClick={() => setEditTodo(true)}>
                <EditIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="delete"
                color="primary"
                onClick={() => handleClick()}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
    </Stack>
  );
};

export default TodoList;

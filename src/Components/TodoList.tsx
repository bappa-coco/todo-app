import { useState } from "react";
import EditTodo from "./Dropdown";
import {
  Box,
  Checkbox,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";

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
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: 400,
  }));
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
          <Item
            sx={{
              my: 1,
              mx: "auto",
              p: 2,
            }}
          >
            <Stack spacing={2} direction="row" alignItems="center">
              <Checkbox
                {...label}
                color="success"
                checked={completed}
                onChange={(e) => checkBoxClick(e.target.checked)}
              />
              <Typography>
                {todoText.length > 80
                  ? todoText.substring(0, 80) + "..."
                  : todoText}
              </Typography>
              <IconButton aria-label="delete" onClick={() => setEditTodo(true)}>
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                color="primary"
                onClick={() => handleClick()}
              >
                <DeleteIcon />
              </IconButton>
            </Stack>
          </Item>
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
        </Box>
      </Grid>
    </>
  );
};

export default TodoList;

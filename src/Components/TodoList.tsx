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
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={2}
      >
        <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
          <Item
            sx={{
              my: 1,
              mx: "auto",
              p: 2,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
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
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Grid item>
                    {" "}
                    <IconButton
                      aria-label="delete"
                      onClick={() => setEditTodo(true)}
                    >
                      <EditIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    {" "}
                    <IconButton
                      aria-label="delete"
                      color="primary"
                      onClick={() => handleClick()}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>{" "}
            </Grid>
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
      </Stack>
    </>
  );
};

export default TodoList;

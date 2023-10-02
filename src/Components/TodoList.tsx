import React from "react";
import { useState } from "react";
import EditTodo from "./EditTodo";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";
import { TransitionProps } from "@mui/material/transitions";

interface Props {
  todoText: string;
  handleClick: () => void;
  handleUpdateTodo: (value: string) => void;
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const TodoList = ({ todoText, handleUpdateTodo, handleClick }: Props) => {
  const [editTodo, setEditTodo] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Do You Want To Delete Todo?"}</DialogTitle>
        <DialogActions>
          <Button onClick={() => handleClick()}>Yes</Button>
          <Button onClick={handleClose}>No</Button>
        </DialogActions>
      </Dialog>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={1}
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
                    <IconButton
                      aria-label="delete"
                      onClick={() => setEditTodo(true)}
                    >
                      <EditIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      aria-label="delete"
                      color="primary"
                      onClick={() => handleClickOpen()}
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

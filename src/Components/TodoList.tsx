import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface Props {
  todoText: string;
  handleClick: () => void;
  handleUpdateTodo: (value: string) => void;
}
const TodoList = ({ todoText, handleUpdateTodo, handleClick }: Props) => {
  const [editTodo, setEditTodo] = useState(false);
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todoText);

  const handleClickOpen = () => {
    setShouldOpenDialog(true);
  };

  const handleClose = () => {
    setShouldOpenDialog(false);
  };

  const handleEdit = () => {
    setEditTodo(true);
    setShouldOpenDialog(false); // Close the delete dialog when edit mode is activated
  };

  const handleSaveEdit = () => {
    handleUpdateTodo(editedTodo);
    setEditTodo(false);
  };

  const dialogTitle = 'Do You Want To Delete Todo?';
  return (
    <>
      <Dialog
        open={shouldOpenDialog}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{dialogTitle}</DialogTitle>
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
          <Paper
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
              <Grid item xs={9}>
                {editTodo ? (
                  <TextField
                    fullWidth
                    value={editedTodo}
                    onChange={(e) => setEditedTodo(e.target.value)}
                  />
                ) : (
                  <Typography>{todoText}</Typography>
                )}
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Grid item>
                    {!editTodo && (
                      <IconButton aria-label="edit" onClick={handleEdit}>
                        <EditIcon />
                      </IconButton>
                    )}
                    {editTodo && (
                      <IconButton aria-label="save" onClick={handleSaveEdit}>
                        <Button variant="contained" color="primary">
                          Save
                        </Button>
                      </IconButton>
                    )}
                  </Grid>
                  <Grid item>
                    {!editTodo && (
                      <IconButton
                        aria-label="delete"
                        color="primary"
                        onClick={handleClickOpen}
                      >
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </Grid>
                </Grid>
              </Grid>{" "}
            </Grid>
          </Paper>
        </Box>
      </Stack>
    </>
  );
};

export default TodoList;

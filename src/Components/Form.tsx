import {
  Button,
  InputBase,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import type { TodoForm } from "./todoTypes";

interface Props {
  handleFormSubmit: (form: TodoForm) => void;
}

const AddTodoItemForm = ({ handleFormSubmit }: Props) => {

  const [todoText, setTodoText] = useState('');

  function submitForm(e?: React.FormEvent){
    e?.preventDefault()
    if (!todoText) {
      return
    }
    handleFormSubmit({
      todoText
    })
    setTodoText('')
  }

  return (
      <Paper
        variant="outlined"
        component="form"
        onSubmit={submitForm}
        sx={{ display: "flex", alignItems: "center", width: 380 }}
        
      >
        <InputBase
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          sx={{ ml: 1, flex: 1 }}
          placeholder="WRITE TODO"
          inputProps={{ "aria-label": "search patient" }}
        />

        <Button 
          sx={{ 
            borderRadius: 1, 
            backgroundColor: "#3F9F31" 
          }} 
          variant="contained"
          type="submit"
        >
          ADD TODO  {/* TODO: no arbitrary string here */}
        </Button>
      </Paper>
  );
};

export default AddTodoItemForm;

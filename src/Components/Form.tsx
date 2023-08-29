import {
  Button,
  Container,
  InputBase,
  Paper,
} from "@mui/material";
import React from "react";
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
    <Container maxWidth="sm">
      <Paper
        variant="outlined"
        component="form"
        sx={{ display: "flex", alignItems: "center", width: 380 }}
      >
        <InputBase
          value={inputValue}
          onChange={handleInputChange}
          sx={{ ml: 1, flex: 1 }}
          placeholder="WRITE TODO"
          onKeyDown={handleKeyDown}
          inputProps={{ "aria-label": "search patient" }}
        />
          <Button sx={{ borderRadius: 0 }} onClick={handleSubmit} variant="contained">
            ADD TODO
          </Button>
      </Paper>
    </Container>
  );
};

export default TodoForm;

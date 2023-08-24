import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  Input,
  Container,
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
      <Grid container alignItems="center">
        <Grid item md={12} sm={12} xs={12}>
          <FormControl variant="standard" fullWidth sx={{ mb: 2 }}>
            <InputLabel htmlFor="standard-emailFieldID">Write Todo</InputLabel>
            <Input
              id="emailFieldID"
              required
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              fullWidth
            />
          </FormControl>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Button
            variant="contained"
            href="#contained-buttons"
            onClick={handleSubmit}
          >
            Add Todo
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TodoForm;

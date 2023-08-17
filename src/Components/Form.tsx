import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  Input,
  Typography,
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
  const [emailFieldError, setEmailFieldError] = React.useState(false);
  const emailFieldNullMsg = "Please complete this required field";
  const emailFieldChange = (e: any) => {
    e.target.value.length > 0
      ? setEmailFieldError(false)
      : setEmailFieldError(true);
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
              error={emailFieldError}
              value={inputValue}
              onBlur={(e) => emailFieldChange(e)}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              fullWidth
            />
            {emailFieldError === true ? (
              <Typography style={{ color: "#d32f2f" }} sx={{ fontSize: 13 }}>
                {emailFieldNullMsg}
              </Typography>
            ) : null}
          </FormControl>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Button
            variant="outlined"
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

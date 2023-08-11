import { Button, Grid, TextField } from "@mui/material";
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
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Add Todo"
            variant="outlined"
            type="text"
            placeholder="add a todo..."
            value={inputValue}
            name="input"
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            href="#contained-buttons"
            onClick={handleSubmit}
          >
            Add Todo
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default TodoForm;

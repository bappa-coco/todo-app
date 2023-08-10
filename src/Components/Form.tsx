import { Button } from "@mui/material";
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
      <input
        className="todo-input"
        type="text"
        placeholder="add a todo..."
        value={inputValue}
        name="input"
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        href="#contained-buttons"
        onClick={handleSubmit}
      >
        Add Todo
      </Button>
    </div>
  );
};

export default TodoForm;

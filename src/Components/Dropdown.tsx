import { useEffect, useRef, useState } from "react";

interface Props {
  handleSubmit: (value: string) => void;
  currentTodo: string;
  editTodoState: boolean;
  setEditState: (value: boolean) => void;
}
const Dropdown = ({
  handleSubmit,
  currentTodo,
  editTodoState,
  setEditState,
}: Props) => {
  const [inputValue, setInputValue] = useState(currentTodo);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setEditState(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(inputValue);
    }
  };

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, [editTodoState]);

  return (
    <section
      className="fixed top-0 left-0 h-screen w-screen bg-[#80808099] flex items-center"
      onClick={() => setEditState(false)}
    >
      <section
        className="flex items-center w-4/5 p-5 m-auto bg-white rounded max-w-fit dark:bg-gray-400"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          className="w-full p-1 px-2 bg-gray-200 focus:outline-none dark:bg-gray-300"
          type="text"
          onKeyDown={handleKeyDown}
          value={inputValue}
          ref={ref}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="p-1 px-5 text-white break-normal bg-blue-600 dark:bg-blue-700"
          onClick={() => handleSubmit(inputValue)}
        >
          edit
        </button>
      </section>
    </section>
  );
};

export default Dropdown;

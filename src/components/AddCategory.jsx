import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length > 1) {
      onAddCategory(inputValue.trim());
    }
    setInputValue("");
    console.log(inputValue);
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        //importante para formatear el input
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

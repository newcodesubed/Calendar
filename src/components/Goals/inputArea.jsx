import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="input-container">
      <input
        type="text"
        onChange={handleChange}
        value={inputText}
        placeholder="Add a goal"
      />
      <button
        onClick={() => {
          props.addItem(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default InputArea;

import React, { useState } from "react";
import "./goals.css";
import InputArea from "./inputArea";
import GoalList from "./goalList";

function Goals() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    if (inputText.trim() !== "") {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
    }
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="goal-card">
      <h3>GOAL</h3>
      <InputArea addItem={addItem} />
      <ul>
        {items.map((goalItem, index) => (
          <GoalList
            key={index}
            id={index}
            text={goalItem}
            onChecked={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default Goals;

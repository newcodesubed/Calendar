import React from "react";

function GoalList(props) {
  return (
    <li>
      <span className="star">★</span>
      {props.text}
      <button
        className="delete-btn"
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        ✕
      </button>
    </li>
  );
}

export default GoalList;

import React, { useState } from "react";
import "./goals.css";
import InputArea from "./inputArea";
import GoalList from "./goalList";

function Goals(){
    const [items, setItems]= useState([]);

    function addItem(inputText) {
        setItems(prevItems => {
          return [...prevItems, inputText];
        });
        
      }
      function deleteItem(id) {
        setItems(prevItems => {
          return prevItems.filter((item, index) => {
            return index !== id;
          });
        });
      }

    return(
        <div className="goal-card">
            <h3>Goals</h3>
            <div>
                <InputArea 
                addItem={addItem}
                />
            </div>
            <div>
                <ul>
                    {items.map((goaItem, index)=>(
                        <GoalList 
                        key={index}
                        id={index}
                        text={goaItem}
                        onChecked={deleteItem} 
                        />
                    ))}
                </ul>
            </div>
            
        </div>
    );
};

export default Goals;
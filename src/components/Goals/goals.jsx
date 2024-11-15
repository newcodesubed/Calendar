import React from "react";
import "./goals.css";
import InputArea from "./inputArea";

function Goals(){
    return(
        <div className="goal-card">
            <h3>Goals</h3>
            <div>
                <InputArea />
            </div>
            <div>
                <ul>
                <span>★</span>
                </ul>
            </div>
            
        </div>
    );
};

export default Goals;
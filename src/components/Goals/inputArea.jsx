import React, { useState } from "react";

function InputArea(props){
    const[inputText, setInputText] = useState("");

    function handleChange(event){
        const newValue = event.target.value;
        setInputText(newValue);

    }

    return(
        <div>
            <input type="text" onChange={handleChange} value={inputText}/>
            <button
            onClick={()=>{
                props.addItem(inputText);
                setInputText("");

            }}>
                <span>+</span>

            </button>
        </div>
    );
}
export default InputArea;
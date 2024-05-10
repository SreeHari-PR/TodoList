
import React, { useState } from 'react';
import "./Todo.css";

function AddTask({ addTask }) {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
        setError(""); 
    };

    const addItem = () => {
        if (!value.trim()) {
            setError("Please enter a task."); 
            return;
        }
        addTask(value);
        setValue(""); 
    };
    return (
        <>
            <div className='input-container'>
                <input
                    type="text"
                    className='input'
                    placeholder='Add Task'
                    value={value}
                    onChange={handleChange}
                />
                <button onClick={addItem} className='add-btn'>ADD</button>
                
            </div>
            {error && <p className="error">{error}</p>} {/* Display error message if there's an error */}
        </>
    );
}

export default AddTask;

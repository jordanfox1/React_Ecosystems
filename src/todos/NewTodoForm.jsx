import React, { useState } from "react";
import './NewTodoForm.css'

const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState('') //initial state of ''

    return (
        <div className="new-todo-form">
            <input type="text" name="" id="" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Type your new todo here" />
            <button>Create Todo</button>
        </div>
    )
}

export default NewTodoForm
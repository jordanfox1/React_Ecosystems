import React, { useState } from "react";
import { connect } from "react-redux";
import './NewTodoForm.css'
import { addTodoRequest } from "./thunks";
import { getTodos, getTodosLoading } from "./selectors";

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('')
    // removeNullTodos(todos)

    return (
        <div className="new-todo-form">
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Type your new todo here" />
            <button onClick={() => {

                if (true) {
                    onCreatePressed(inputValue)
                    setInputValue('')
                }
            }}>Create Todo</button>
        </div>
    )
}


const mapStateToProps = (state) => ({
    todos: getTodos(state)
})

const mapDispatchToProps = (dispatch) => ({
    onCreatePressed: text => dispatch(addTodoRequest(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm)
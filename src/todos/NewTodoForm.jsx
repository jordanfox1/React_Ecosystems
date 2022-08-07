import React, { useState } from "react";
import { connect } from "react-redux";
import './NewTodoForm.css'
import { addTodoRequest } from "./thunks";

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('')
    // removeNullTodos(todos)

    return (
        <div className="new-todo-form">
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Type your new todo here" />
            {console.log(todos, 'length of', todos.length)}
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
    todos: state.todos,
})

const mapDispatchToProps = (dispatch) => ({
    onCreatePressed: text => dispatch(addTodoRequest(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm)
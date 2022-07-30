import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";
import './NewTodoForm.css'

// connect()()

const NewTodoForm = ({todos, onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('') //initial state of ''

    return (
        <div className="new-todo-form">
            <input type="text" name="" id="" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Type your new todo here" />
            <button onClick={() => {
                const isDuplicateText = 
                    todos.some(todo => todo.text === inputValue)
                if (!!isDuplicateText){
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
    onCreatePressed: text => dispatch(createTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm)
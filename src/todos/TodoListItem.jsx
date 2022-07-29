import React from "react";

const TodoListItem = ({ todo }) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            <button>Mark As Complete</button>
            <button>Remove</button>
        </div>
    </div>
)

export default TodoListItem
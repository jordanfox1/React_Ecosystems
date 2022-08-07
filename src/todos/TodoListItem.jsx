import React from "react";

const TodoListItem = ({todo, onRemovePressed, onCompletedPressed }) => {

    if (!todo){
        todo = {text: 'foo', isCompleted: true}
    }

    return (
        <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            {todo.isCompleted
                ? null
                : <button
                    onClick={() => onCompletedPressed(todo.id)}
                    className="completed-button">Mark As Completed</button>}
            <button
                onClick={() => {onRemovePressed(todo.id); window.location.reload()}}
                className="remove-button">Remove</button>
        </div>
    </div>
    )
};

export default TodoListItem
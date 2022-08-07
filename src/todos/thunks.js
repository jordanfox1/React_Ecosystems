// in redux a thunk is a function that returns another function which contains the logic to perform when its triggered
import { loadTodosInProgress, loadTodosFailure, loadTodosSuccess, createTodo, removeTodo, markTodoAsCompleted } from "./actions"

export const loadTodos = () => async (dispatch, getState) => { //dispatch to and get state from the store
    try {
        dispatch(loadTodosInProgress())
        const response = await fetch('http://localhost:8080/todos')
        const todos = await response.json()
        dispatch(loadTodosSuccess(todos))
    } catch (e) {
        dispatch(loadTodosFailure)
        dispatch(displayAlert(`failed to retrieve todos error: ${e}`))
    }

}

export function addTodoRequest(text) {
    return async dispatch => {
        try {
            const body = JSON.stringify({ text })
            const response = await fetch('http://localhost:8080/todos', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'post',
                body,
            });
            const todo = await response.json()
            dispatch(createTodo(todo))
        } catch (error) {
            dispatch(displayAlert(error));
            console.log('ERROR CREATING TODO, ',error ,error?.message)
        }

    }
}

export const removeTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: 'delete'
        })
        const removedTodo = await response.json
        dispatch(removeTodo(removedTodo))
    } catch (error) {
        dispatch(displayAlert(error))
        console.log('ERROR REMOVING TODO:', error)
    }
}

export const markTodoAsCompletedRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method: 'post'
        });
        const updatedTodo = await response.json();
        dispatch(markTodoAsCompleted(updatedTodo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}


export const displayAlert = text => () => {
    alert(`you clikced on ${text}`)
}
// in redux a thunk is a function that returns another function which contains the logic to perform when its triggered
import { loadTodosInProgress, loadTodosFailure, loadTodosSuccess, createTodo } from "./actions"

export const loadTodos = () => async (dispatch, getState) => { //dispacth to and get state from the store
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

export const displayAlert = text => () => {
    alert(`you clikced on ${text}`)
}
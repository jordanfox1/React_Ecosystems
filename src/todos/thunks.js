// in redux a thunk is a function that returns another function which contains the logic to perform when its triggered
import { loadTodosInProgress, loadTodosFailure, loadTodosSuccess} from "./actions"

export const loadTodos = () => async (dispatch, getState) => { //dispacth to and get state from the store
    try{
        dispatch(loadTodosInProgress())
        const response = await fetch('http://localhost:8080/todos')
        const todos = await response.json()
        dispatch(loadTodosSuccess(todos))
    } catch(e) {
        dispatch(loadTodosFailure)
        dispatch(displayAlert(`failed to retrieve todos error: ${e}`))
    }

}


export const displayAlert = text => () => {
    alert(`you clikced on ${text}`)
}
// A REDUCER IS JUST A FUNCTION NAMED AFTER WHATEVER RESOURCE IN THE REDUX STORE IT IS IN CHARGE OF MANAGING

// any time any action gets called from anywhere in the app, this reducer will get called with arguments action and state
// when this happens the reducer takes the action that was triggered and the current state of the application
// and decides what changes should occur in the state as a result of this action
// they should then return the updated state, redux will take the return value and update the current state to that
import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED, LOAD_TODOS_IN_PROGRESS, LOAD_TODOS_SUCCESS, LOAD_TODOS_FAILURE } from './actions';

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_TODO: {
        const { todo } = payload;
        return state.concat(todo);
    }
    case REMOVE_TODO: {
        const { text } = payload;
        return state.filter(todo => todo.text !== text);
    }
    case MARK_TODO_AS_COMPLETED: {
        const { text } = payload;
        return state.map(todo => {
            if (todo.text === text) {
                return { ...todo, isCompleted: true };
            }
            return todo;
        });
    }

    case LOAD_TODOS_SUCCESS: {
        const {todos} = payload
        return todos
    }
    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_FAILURE: 
    default:
        return state;
    }
}

export const isLoading = (state = false, action) => {
    const {type} = action

    switch (type) {
        case LOAD_TODOS_IN_PROGRESS:
            return true
        case LOAD_TODOS_SUCCESS:
            return false
        case LOAD_TODOS_SUCCESS:
            return false
    
        default:
            return state
    }

}
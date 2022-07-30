import { REMOVE_TODO, CREATE_TODO } from "./actions";

// A REDUCER IS JUST A FUNCTION NAMED AFTER WHATEVER RESOURCE IN THE REDUX STORE IT IS IN CHARGE OF MANAGING

// any time any action gets called from anywhere in the app, this reducer will get called with arguments action and state
    // when this happens the reducer takes the action that was triggered and the current state of the application
    // and decides what changes should occur in the state as a result of this action
        // they should then return the updated state, redux will take the return value and update the current state to that
export const todos = (state=[], action) => {
    const {type, payload} = action

    switch (type) {
        case CREATE_TODO: { // what should happen to the todos state when we create/remove a todo
            const { text } = payload
            const newTodo = {
                text,
                isCompleted: false,
            }
            return state.concat(newTodo) //concat() is non-mutating
        }

        case REMOVE_TODO: {
            const { text } = payload
            return state.filter(todo => todo.text !== text)
        }
        default:
            return state
    }
}
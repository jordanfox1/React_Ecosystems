export const CREATE_TODO = 'CREATE_TODO'

// export a function which takes the extra info as an argument and returns an action object with this info as the payload
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: {text}
})
//example usage:
    // createTodo('Learn Redux')


export const REMOVE_TODO = 'REMOVE_TODO'
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: {text}
}) 
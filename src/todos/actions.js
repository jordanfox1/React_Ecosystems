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

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
export const markTodoAsCompleted = text => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: { text },
});

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS'
export const loadTodosInProgress = () => ({
    type: LOAD_TODOS_IN_PROGRESS,
})

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_IN_SUCCESS'
export const loadTodosInSuccess = (todos) => ({
    type: LOAD_TODOS__SUCCESS,
    payload: {todos}
})

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE'
export const loadTodosFailure = () => ({
    type: LOAD_TODOS_FAILURE,
})



import { createSelector } from "reselect"

export const getTodos = state => state.todos.data
export const getTodosLoading = state => state.todos.isLoading

/* Below are the higher order slecters which should have no knowledge of how data is structured in the store and - 
rely on the functionality of the lower level selectors (getTodos) to handle the format of the data in the redux store 
So if we need to change how the data is formatted in the store in the future, it will essentially only be a small change in the loworder get selectors*/

/* createSelector does not recompute the return value of the function unless the selectors being passed as arguments have changed */

// we can add as many selectors as we want in here
export const getIncompleteTodos = createSelector(
    getTodos,
    getTodosLoading,
    (todos) => todos.filter(todo => !todos.isCompleted)
)

export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.isCompleted),
)
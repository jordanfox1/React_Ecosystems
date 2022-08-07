import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm';
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks';
// import {getTodos, getTodosLoading} from './s'

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
    const loadingMessage = <div>Loading todos...</div>
    useEffect(() => {
        startLoadingTodos()
    }, [])
    
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => <TodoListItem
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed} />)}
        </div>
    )
    return isLoading ? loadingMessage : content
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
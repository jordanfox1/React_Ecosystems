import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { markTodoAsCompleted } from './actions';
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm';
import { displayAlert, loadTodos, removeTodoRequest } from './thunks';
import { isLoading } from './reducers';

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
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
    onDisplayAlertClicked: (text) => dispatch(displayAlert(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
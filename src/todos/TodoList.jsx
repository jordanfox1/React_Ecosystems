import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm';
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks';
import { getTodosLoading, getCompletedTodos, getIncompleteTodos} from './selectors'
import styled from 'styled-components';

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;

const TodoList = ({ onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos, incompleteTodos, completedTodos }) => {
    const loadingMessage = <div>Loading todos...</div>
    useEffect(() => {
        startLoadingTodos()
    }, [])
    
    const content = (
        <ListWrapper className="list-wrapper">
            <NewTodoForm />
            <h3 style={{color: 'red'}}>Incomplete:</h3>
            {incompleteTodos.map(todo => <TodoListItem
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed} />)}
            <h3 style={{color: 'green'}}>Completed:</h3>
                {completedTodos.map(todo => <TodoListItem
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed} />)}
        </ListWrapper>
    )
    return isLoading ? loadingMessage : content
};

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state)
})

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
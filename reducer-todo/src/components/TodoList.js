import React from 'react';
import Todos from './Todos';

const TodoList = ({todos, toggle}) => {
    return (
        <div>
            {todos.map(todo => <Todos key={todo.id} {...todo} toggle={toggle} />)}
        </div>
    )
}

export default TodoList;
import React from 'react';
import Todos from './Todos';

const TodoList = ({todos, toggle}) => {
    return (
        <div>
            {todos.map(todo => <Todos key={todos.id} {...todos} toggle={toggle} />)}
        </div>
    )
}

export default TodoList;
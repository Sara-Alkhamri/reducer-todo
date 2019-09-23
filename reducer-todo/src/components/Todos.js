import React from 'react';

const Todo = ({item, id, completed, toggle}) => {
    return (
        <div className={'todos' + (completed ? ' todo-completed' : '')} 
        onClick={() => toggle(id)}>
        {item}
        </div>
    )
}

export default Todo;
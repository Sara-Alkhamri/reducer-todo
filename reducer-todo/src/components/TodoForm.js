import React, { useState } from 'react';

const TodoForm = ({addTodos, clearCompleted}) => {
    const [item, setItem] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addTodos(item);
        setItem('');
    };

    const handleClear = e => {
        e.preventDefault();
        clearCompleted();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="item"
            onChange={e => setItem(e.target.value)}
            value={item} 
            />
        <div className="form-button">
            <button type="submit">Add Item Todo</button>
            <button onClick={handleClear}>Clear Completed Item</button>
        </div>    
        </form>
    )
}

export default TodoForm;
export const initialState = {
    todos: [
        {
            item: 'Learn Reducers',
            completed: false,
            id: 801
        },

        {
            item: 'Review Mutation',
            completed: false,
            id: 802
        }
    ]
};

export function todoReducer(state, action) {
    switch (action.type) {
    case 'TOGGLE_TODO':
        return {
            ...state,
            todos: state.todos.map(todos => (
                todos.id === action.payload ? {...todos, completed: !todos.completed} : todos
            ))
        };
        case 'ADD_TODO':
        return {
            ...state,
            todos: state.todos.concat({ item: action.payload, completed: false, id: Date.now() })
        };
        case "CLEAR_COMPLETED":
        return {
        ...state,
        todos: state.todos.filter(({completed}) => !completed)
        };
        default:
        return state;
    }
   
}
import { createSlice } from "@reduxjs/toolkit"; //nanoid

import { getTodoAsync, addTodoAsync, toggleTodoAsync, removeTodoAsync } from "./services";


export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        activeFilter: localStorage.getItem('activeFilter') || 'all',
        addNewTodo: {
            isLoading: false,
            error: null,
        },
    },
    reducers: {
        // addTodo: {
        //     reducer: (state, action) => {
        //         state.items.push(action.payload);
        //     },
        //     prepare: ({ title }) => {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 completed: false,
        //                 title,
        //             },
        //         };
        //     },
        // },
        // toggle: (state, action) => {
        //     const { id } = action.payload;
        //     const item = state.items.find(item => item.id === id);
        //     item.completed = !item.completed;
        // },
        // destroy: (state, action) => {
        //     const id = action.payload;
        //     const filtered = state.items = state.items.filter((item) => item.id !== id);
        //     state.items = filtered;
        // },
        changeActiveFilter: (state, action) => {
            state.activeFilter = action.payload;
        },
        clearCompleted: (state) => {
            const filtered = state.items.filter((item) => item.completed === false);
            state.items = filtered;
        },
    },
    extraReducers: {
        // get todos
        [getTodoAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getTodoAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [getTodoAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },

        // add todo
        [addTodoAsync.pending]: (state, action) => {
            state.addNewTodo.isLoading = true;
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            state.items.push(action.payload);
            state.addNewTodo.isLoading = false;
        },
        [addTodoAsync.rejected]: (state, action) => {
            state.addNewTodo.error = action.error.message;
            state.addNewTodo.isLoading = false;
        },

        //  toggle todo
        [toggleTodoAsync.fulfilled]: (state, action) => {
            const { id, completed } = action.payload;
            const index = state.items.findIndex((item) => item.id === id);
            state.items[index].completed = completed;
        },

        // remove todo
        [removeTodoAsync.fulfilled]: (state, action) => {
            const id = action.payload;
            const index = state.items.findIndex((item) => item.id === id);
            state.items.splice(index, 1);
        },
    },
});

export const selectTodos = (state) => state.todos.items;
export const selectFilteredTodos = (state) => {
    if (state.todos.activeFilter === 'all') {
        return state.todos.items;
    }
    return state.todos.items.filter((todo) =>
        state.todos.activeFilter === 'active'
            ? todo.completed === false
            : todo.completed === true,
    )
};
export const selectActiveFilter = (state) => state.todos.activeFilter;

export const { changeActiveFilter, clearCompleted } = todosSlice.actions; //toggle, destroy, addTodo
export default todosSlice.reducer;
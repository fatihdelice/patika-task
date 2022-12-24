import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        items: [
            {
                id: nanoid(),
                content: "This is a note",
                color: "rgb(79, 195, 247)",
            },
            {
                id: nanoid(),
                content: "This is another note",
                color: "rgb(79, 195, 247)",
            }
        ],
        filtered: "",
    },
    reducers: {
        addNote: {
            reducer(state, action) {
                state.items.push(action.payload);
            }
        },
        deleteNote: {
            reducer(state, action) {
                state.items = state.items.filter((item) => item.id !== action.payload);
            }
        },
        findNote: {
            reducer(state, action) {
                state.filtered = action.payload
            }
        },
        changeColor: {
            reducer(state, action) {
                state.color = action.payload;
            }
        },
    },
});

export const { addNote, deleteNote, changeColor, findNote } = notesSlice.actions;
export default notesSlice.reducer;
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { findNote } from "../redux/notes/notesSlice"

export default function Search() {
    const dispatch = useDispatch()
    const filtered = useSelector(state => state.notes.filtered)

    return (
        <input
            type="search"
            className="search-input"
            placeholder="Search..."
            value={filtered}
            onChange={(e) => dispatch(findNote(e.target.value))}
        />
    )
}

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteNote } from '../redux/notes/notesSlice';

export default function NotesList() {
    const items = useSelector((state) => state.notes.items);
    const filteredText = useSelector((state) => state.notes.filtered);
    const dispatch = useDispatch();

    const filtered = items.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(filteredText.toLowerCase())
        );
    });

    return (
        <div className="notes-grid">
            {
                filtered.map((item) => (
                    <div key={item.id} className="note" style={{ backgroundColor: `${item.color}` }}>
                        <span className="delete-note" onClick={() => dispatch(deleteNote(item.id))}> × </span>
                        <div>
                            {item.content}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

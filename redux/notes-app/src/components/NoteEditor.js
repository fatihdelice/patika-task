import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../redux/notes/notesSlice';

export default function NoteEditor() {
    const [content, setContent] = useState('');
    const [color, setColor] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote({ content, color }));
        setContent('');
        setColor('');
    }

    return (
        <form className="note-editor" onSubmit={handleSubmit}>
            <textarea
                placeholder="Enter your note here..."
                rows="5"
                className="textarea"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>

            <div className="color-picker">
                <input type="radio" name="color-pick" value="#F06292" id="color1" onChange={(e) => setColor(e.target.value)} />
                <label htmlFor="color1" style={{ backgroundColor: "rgb(240, 98, 146)" }}></label>
                <input type="radio" name="color-pick" value="#BA68C8" id="color2" onChange={(e) => setColor(e.target.value)} />
                <label htmlFor="color2" style={{ backgroundColor: "rgb(186, 104, 200)" }}></label>
                <input type="radio" name="color-pick" value="#FFD54F" id="color3" onChange={(e) => setColor(e.target.value)} />
                <label htmlFor="color3" style={{ backgroundColor: "rgb(255, 213, 79)" }}></label>
                <input type="radio" name="color-pick" value="#4FC3F7" id="color4" onChange={(e) => setColor(e.target.value)} />
                <label htmlFor="color4" style={{ backgroundColor: "rgb(79, 195, 247)" }}></label>
                <input type="radio" name="color-pick" value="#AED581" id="color5" onChange={(e) => setColor(e.target.value)} />
                <label htmlFor="color5" style={{ backgroundColor: "rgb(174, 213, 129)" }}></label>
            </div>

            <input
                type="submit"
                className="add-button"
                value="Add"
            />
        </form>
    )
}

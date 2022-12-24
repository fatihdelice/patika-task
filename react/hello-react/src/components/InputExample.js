import { useState } from 'react'

export default function InputExample() {
    // const [name, setName] = useState('');
    // const [surname, setSurname] = useState('');
    const [form, setForm] = useState({ name: '', surname: '' });

    // const onChangeName = (event) => setName(event.target.value);
    // const onChangeSurname = (event) => setSurname(event.target.value);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div>
            Please enter a name <br />
            <input name='name' value={form.name} onChange={onChangeInput} />
            {/* <input value={name} onChange={onChangeName} /> */}
            {/* <input value={name} onChange={(event) => setName(event.target.value)} /> */}
            <br />
            Please enter a surname <br />
            <input name='surname' value={form.surname} onChange={onChangeInput} />
            {/* <input value={surname} onChange={onChangeSurname} /> */}
            {/* <input value={name} onChange={(event) => setName(event.target.value)} /> */}
            <br />
            <br />
            Name and Surname: {form.name} &nbsp; {form.surname}
        </div>
    )
}

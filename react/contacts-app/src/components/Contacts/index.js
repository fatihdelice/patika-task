import { useState, useEffect } from 'react'
import "./styles.css";
import List from './List'
import Form from './Form'


export default function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: 'John Doe',
            phone_number: '08123456789'
        },
        {
            fullname: 'Jane Doe',
            phone_number: '08954456789'
        },
        {
            fullname: 'Figo Doe',
            phone_number: '09583456789'
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);
    return (
        <di id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </di>
    )
}

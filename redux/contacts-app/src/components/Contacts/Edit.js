import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import EditForm from './EditForm';
import { useSelector } from 'react-redux';
import { contactSelectors } from '../../redux/contactSlice';

export default function Edit() {
    const { id } = useParams();
    const contact = useSelector(state => contactSelectors.selectById(state, id));

    if (!contact) return <Navigate to='/' />

    return (
        <div>
            <h1>Edit</h1>
            <EditForm contact={contact} />
        </div>
    )
}

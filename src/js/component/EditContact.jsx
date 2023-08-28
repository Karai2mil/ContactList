import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from 'react'

const editContact = () => {

    const navigate = useNavigate()

    const { store, actions } = useContext(Context);

    const [ full_name, setFull_Name] = useState("")
    const [ email, setEmail ] = useState ("")
    const [ phone, setPhone ] = useState ("")
    const [ address, setAddress ] = useState ("")

    const handleUpdateContact = () => {
        const object = {
            full_name: full_name,
            email: email,
            phone: phone,
            address: address,
            agenda_slug: store.currentContact.agenda_slug,
            id: store.currentContact.id
        }
        actions.updateContact(object)
        navigate('/')
    }

    return (
        <div className="container">
            <div className='d-flex justify-content-center text-align-center'>
                <h1>Edit contact</h1>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                <input onChange={(e) => setFull_Name(e.target.value)} type="text" className="form-control" id="formGroupExampleInput" defaultValue={store.currentContact.full_name} />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Mail</label>
                <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" defaultValue={store.currentContact.email} />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Phone</label>
                <input onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" defaultValue={store.currentContact.phone} />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Adress</label>
                <input onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" defaultValue={store.currentContact.address} />
            </div>
            <div className="d-grid gap-2">
                <button onClick={() => handleUpdateContact()} className="btn btn-dark" type="button">Save</button>
            </div>
            <Link to='/'>
                <div>
                    <p className="text-muted">or get back to contacts</p>
                </div>
            </Link>
        </div>
    );
};

export default editContact


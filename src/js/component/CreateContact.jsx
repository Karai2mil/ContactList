import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from 'react'

const createContact = () => {

    const navigate = useNavigate()

    const { store, actions } = useContext(Context);

    const [ full_name, setFull_Name] = useState("")
    const [ email, setEmail ] = useState ("")
    const [ phone, setPhone ] = useState ("")
    const [ address, setAddress ] = useState ("")

    const handleNewContact = () => {
        const object = {
            full_name: full_name,
            email: email,
            phone: phone,
            address: address,
            agenda_slug: store.nombreDeAgenda
        }
        actions.newContact(object)
        navigate('/')
    }

    return (
        <div className="container">
            <div className='d-flex justify-content-center text-align-center'>
                <h1>Add new contact</h1>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                <input onChange={(e) => setFull_Name(e.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Full Name" />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Mail</label>
                <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Mail" />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Phone</label>
                <input onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Phone" />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Adress</label>
                <input onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Adress" />
            </div>
            <div className="d-grid gap-2">
                <button onClick={handleNewContact} className="btn btn-dark" type="button">Save</button>
            </div>
            <Link to='/'>
                <div>
                    <p className="text-muted">or get back to contacts</p>
                </div>
            </Link>
        </div>
    );
};

export default createContact


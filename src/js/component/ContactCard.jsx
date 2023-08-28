import React, { useState } from "react"
import styles from './Styles.module.css'
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from 'react'
// import DeleteConfirmation from "./DeleteConfirmation.jsx";

const ContactCard = ({ photo, contact }) => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const { full_name, email, phone, address, id, agenda_slug } = contact

    const handlerSetContact = () => {
        actions.setCurrentContact(contact)
        navigate("/EditContact")
    }

    return (
        <div className='d-flex justify-content-center align-items-center flex-column' style={{ paddingTop: '0px', height: '170px' }}>
            <div className="text-center mt-5">
                <div className="card mb-3" style={{
                    width: '700px',
                    height: '170px',
                    background: 'transparent',
                    backdropFilter: 'blur(10px)',
                    border: 'solid'
                }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={photo}
                                className={`img-fluid rounded-start ${styles.usrImg}`}
                                alt="..."
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">{full_name}</h5>
                                <p className="card-text"><i style={{ marginRight: "10px" }} className="fa-solid fa-envelope"></i>{email}</p>
                                <p className="card-text"><i style={{ marginRight: "10px" }} className="fa-solid fa-phone"></i>{phone}</p>
                                <p className="card-text"><i style={{ marginRight: "10px" }} className="fa-solid fa-location-dot"></i>{address}</p>
                            </div>
                        </div>
                        <div className="col-md-2 d-flex">
                            <div className={styles.trashEditDiv}>
                                <i onClick={() => handlerSetContact()} className="fa-solid fa-pencil"></i>
                            </div>
                            <div className={styles.trashEditDiv}>
                                <i onClick={() => actions.deleteContact(id)} className="fa-solid fa-trash-can"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ContactCard

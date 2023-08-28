import React, { useEffect } from 'react'
import { Context } from '../store/appContext'
import { useContext } from 'react'
import ContactCard from "../component/ContactCard.jsx"
import { useNavigate } from 'react-router-dom';
import miImagen from '/workspaces/Karai-ContactList/src/img/karai.png'



const Home = () => {

    const navigate = useNavigate()
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getAgenda()
    }, [store.nombreDeAgenda])

    return (

        <div>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <h1 style={{marginTop: '50px', fontFamily: "'Caprasimo', cursive"}}>Contact List</h1>
                <label htmlFor="formGroupExampleInput" className="form-label" style={{ margin: '20px 77px 0px 0px' }}><strong>Agenda name:</strong></label>
                <input style={{background: 'transparent'}} type="text" value={store.nombreDeAgenda} onChange={(e) => actions.changeGlobalAgendaName(e.target.value)} id="formGroupExampleInput" />
                {store.agenda.length == 0 &&
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <p style={{ fontSize: '14px', marginBottom: '0px' }}>To create an agenda,</p>
                        <p style={{ fontSize: '14px', marginTop: '0px' }}>put your agenda name up here and add your first contact</p>
                    </div>
                }

                <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{ margin: '30px 0px 0px 560px' }}>
                    <button onClick={() => navigate('/CreateContact')} className="btn btn-dark me-md-2" type="button">Add new contact</button>
                </div>
                {
                    store.agenda.map((element, index) => (
                        <ContactCard
                            photo={miImagen}
                            key={index}
                            contact={element}
                        />
                    ))
                }
                {store.agenda.length > 0 &&
                    <div style={{ marginTop: '30px' }}>
                        <button onClick={() => actions.deleteAllContacts(store.agenda[0].agenda_slug)} type="button" class="btn btn-dark">Delete all</button>
                    </div>
                }
            </div>

        </div>
    )

}

export default Home
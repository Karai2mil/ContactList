import React from 'react'
import {Link}  from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <form className="container-fluid justify-content-start">
                    <Link to="/">
                        <button className="btn btn-outline-dark me-2" type="button">Contacts</button>
                    </Link>
                    <Link to="/CreateContact">
                        <button className="btn btn-outline-dark me-2" type="button">Create contact</button>
                    </Link>
                </form>
            </nav>
        </div>
    )
}

export default Navbar
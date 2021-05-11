import React from 'react';
import Nav from '../../components/Nav'
import { Link } from 'react-router-dom'

function Settings() {
    return (
        <React.Fragment>
            <div className="title-container">
                <h1 className="text">Settings</h1>
                <Link className="link-text" to="/">
                    <button>Log out</button>
                </Link>
            </div>
            <Nav />
        </React.Fragment>
    )
}

export default Settings;
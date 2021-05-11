import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faHome } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return (
        <nav>
            <ul className="NavLinks">
                <Link className="link-text" to="/search">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
                <Link className="link-text" to="/settings">
                    <FontAwesomeIcon icon={faCog} />
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;
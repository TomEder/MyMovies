import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTv, faFilm, faCog, faSearch } from '@fortawesome/free-solid-svg-icons'
import TV from './images/TV.com.png'
import settings from './images/settings.com.png'
import moviepic from './images/roll.com.png'
import search from './images/search.com.png'

function Nav() {
    return (
        <nav>
            <ul className="NavLinks">
                <Link className="link-text" to="/tv">
                    <FontAwesomeIcon icon={faTv} />
                </Link>
                <Link className="link-text" to="/movies">
                    <FontAwesomeIcon icon={faFilm} />
                </Link>
                <Link className="link-text" to="/search">
                    <FontAwesomeIcon icon={faSearch} />
                </Link>
                <Link className="link-text" to="/settings">
                    <FontAwesomeIcon icon={faCog} />
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;
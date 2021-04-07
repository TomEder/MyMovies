import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul className="NavLinks">
                <Link to="/tv">
                    <li>TV</li>
                </Link>
                <Link to="/movies">
                    <li>Movies</li>
                </Link>
                <Link to="/search">
                    <li>Search</li>
                </Link>
                <Link to="/settings">
                    <li>Settings</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;
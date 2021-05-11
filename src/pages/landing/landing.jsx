import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom'
import Signup from './components/signup'

function Landing() {
    return (
        <div className="title-container">
            <h1 className="text">My Movies</h1>
            <div className="signupContainer">
                <Signup />
            </div>
            <Link className="link-text" to="/search">
                <button>Log in</button>
            </Link>
        </div>
    );
}

export default Landing;

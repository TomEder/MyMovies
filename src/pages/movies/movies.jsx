import React, { useEffect, useState } from 'react';
import '../../App.css'
import Nav from '../../components/Nav'


function Movies() {
    return (
        <React.Fragment>
            <div className="title-container">
                <h1 className="text">Movies</h1>
            </div>
            <Nav />
        </React.Fragment>
    )
}

export default Movies;
import React from 'react';
import Nav from '../../Nav'

function Search() {
    return (
        <React.Fragment>
            <div className="search-container">
                <h1 className="text">Search</h1>
                <form action="">
                    <input type="text" />
                </form>
            </div>
            <Nav />
        </React.Fragment>
    )
}

export default Search;
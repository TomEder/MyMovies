import React from 'react';
import '../App.css';
const IMG_API = 'https://image.tmdb.org/t/p/w1280'

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 6) {
        return 'orange'
    } else {
        return 'red'
    }
}



const Suggestion = ({ title, poster_path, vote_average }) => (
    <div className="suggestion">
        <img className="suggestion-img" src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1606579335925-ea67bcbd09c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'} alt={title} />
        <div className="suggestion-info">
            <h3 className="suggestion-text">{title}</h3>
            <span className={`sug-tag ${setVoteClass(vote_average)}`
            }>
                {vote_average}
            </span>
        </div>
    </div>
)

export default Suggestion;
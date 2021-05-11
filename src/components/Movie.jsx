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

const Movie = ({ title, poster_path, vote_average, overview }) => (
    <div className="movie">
        <img className="poster-img" src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1606579335925-ea67bcbd09c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'} alt={title} />
        <div className="movie-info">
            <h3 className="text">{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`
            }>
                {vote_average}
            </span>
        </div>
        <div className="movie-over">
            <h2>Overview</h2>
            <p>{overview}</p>
        </div>
    </div>
)

export default Movie;
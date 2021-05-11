import React from 'react';
import '../App.css';


const setVoteClass = (vote) => {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 6) {
        return 'orange'
    } else {
        return 'red'
    }
}

const Overview = ({ overview, title, vote_average }) => (
    <div className="overview">
        <div className="movie-over">
            <h3 className="text">{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`
            }>
                {vote_average}
            </span>
            <p>{overview}</p>
        </div>
    </div>
)

export default Overview;
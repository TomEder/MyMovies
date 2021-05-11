import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav'
import Suggestion from '../../components/suggestion'
import Movie from '../../components/Movie.jsx'

import '../../App.css'

const api_key = 'cd35599d70a7310e8f56c72e22d7e0d9&page=1'

const FEATURED_MOVIES_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`
const SEARCH_MOVIES_API = `https://api.themoviedb.org/3/search/movie?&api_key=${api_key}&query=`
const FEATURED_TV_API = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&page=1`
const SEARCH_SHOWS_API = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=`
const CREATE_LIST_API = `https://api.themoviedb.org/3/list?api_key=${api_key}&session_id=1`

export const initial_state = {
    featuredMovies: {},
}

function Search() {
    const [movies, setMovies] = useState([]);
    const [shows, setShows] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [watchList, setWatchList] = useState([{
        title: "Avengers: Endgame",
        vote_average: 8.3,
        overview: "After the devastating events of Avengers: Infinity War",
        poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        id: 299534
    },])


    useEffect(() => {
        /* getMovies(FEATURED_MOVIES_API)
        getShows(FEATURED_TV_API) */
    }, []);

    const getMovies = (API) => {
        fetch(API).then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies(data.results);
            });
    }

    const getShows = (API) => {
        fetch(API).then(res => res.json())
            .then(data => {
                console.log(data);
                setShows(data.results);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            getMovies(SEARCH_MOVIES_API + searchTerm);
            getShows(SEARCH_SHOWS_API + searchTerm);
        }
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <React.Fragment>
            <div className="title-container">
                <h1 className="text">Discover</h1>
                <form onSubmit={handleSubmit} className="search-container">
                    <input
                        className="search"
                        type="search"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleChange} />
                </form>
                {<div className="suggestions-container">
                    {movies.length > 0 && movies.map((movie) => (
                        <Suggestion key={movie.id} {...movie} {...watchList}>
                        </Suggestion>
                    ))}
                </div>}
                <div className="lists-container">
                    <h2 className="text">Movies</h2>
                    <ul>
                        {watchList.length > 0 && watchList.map((listItem) => (
                            <Movie key={listItem.id} {...listItem} />
                        ))}
                    </ul>
                    <h2 className="text">TV</h2>
                </div>
            </div>
            <Nav />
        </React.Fragment>
    )
}

export default Search;
import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav'
import Movie from '../../components/Movie'
import Show from '../../components/show'
import '../../App.css'

const api_key = 'cd35599d70a7310e8f56c72e22d7e0d9&page=1'

const FEATURED_MOVIES_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`
const SEARCH_MOVIES_API = `https://api.themoviedb.org/3/search/movie?&api_key=${api_key}&query=`
const FEATURED_TV_API = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&page=1`
const SEARCH_SHOWS_API = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=`

function Search() {
    const [movies, setMovies] = useState([]);
    const [shows, setShows] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        getMovies(FEATURED_MOVIES_API)
        getShows(FEATURED_TV_API)
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
            setSearchTerm('');
        }
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <React.Fragment>
            <div className="title-container">
                <h1 className="text">Discover</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        className="search"
                        type="search"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleChange} />
                </form>
                <div className="movie-container">
                    <div className="title-container">
                        <h2 className="text">Movies</h2>
                    </div>
                    {movies.length > 0 && movies.map((movie) => (
                        <Movie key={movie.id} {...movie} />
                    ))}
                </div>
                <div className="movie-container">
                    <div className="title-container">
                        <h2 className="text">TV</h2>
                    </div>
                    {shows.length > 0 && shows.map((show) => (
                        <Show key={show.id} {...show} />
                    ))}
                </div>
            </div>
            <Nav />
        </React.Fragment>
    )
}

export default Search;
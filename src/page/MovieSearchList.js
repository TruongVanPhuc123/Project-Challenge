import axios from 'axios'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import MovieCard from '../components/MovieCard';
import '../css/MovieListSearch.css'
import Header from '../components/Header'
import Page from './Page';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmU1ZDMzOGJmZTg5ZTA2YzMxZTUwMzRiMzdiODJkMiIsInN1YiI6IjY1ZWY3MGY2Mzk3ZGYwMDE4NDkzMzBjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v2fdMzryuGI5dfBVg-TBq25dCYfLmTA9sbm5ioVf9oU'
    }
};

function MovieSearchList() {
    const [dataSearch, setDataSearch] = useState([])
    const [pageMovie, setPageMovie] = useState(1)
    const location = useLocation()
    console.log(pageMovie)

    React.useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie${location.search}&page=${pageMovie}`, options)
            .then(response => {
                setDataSearch(response.data.results)
                // setPageMovie(response.data.page)
            })
            .catch(error => console.log(error.message))
        // console.log(`https://api.themoviedb.org/3/search/movie${location.search}&page=${page}`)
    }, [location.search, pageMovie])

    return (
        <>
            <Header />
            <div className='listSearchMovie'>
                <h2 style={{ paddingBottom: '20px' }}>Search Results</h2>
                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
                    {dataSearch.map((movie) => (
                        movie.backdrop_path === null ? <></> :
                            <>
                                <MovieCard id={movie.id} title={movie.title} img={movie.poster_path} />
                            </>
                    ))}
                </div>
                <Page pageMovie={pageMovie} setPageMovie={setPageMovie} />
            </div>
        </>
    )
}

export default MovieSearchList
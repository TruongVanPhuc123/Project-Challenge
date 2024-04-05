import axios from 'axios'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import MovieCard from './MovieCard';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmU1ZDMzOGJmZTg5ZTA2YzMxZTUwMzRiMzdiODJkMiIsInN1YiI6IjY1ZWY3MGY2Mzk3ZGYwMDE4NDkzMzBjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v2fdMzryuGI5dfBVg-TBq25dCYfLmTA9sbm5ioVf9oU'
    }
};
function MovieSearchList() {
    const [dataSearch, setDataSearch] = useState([])
    console.log(dataSearch)
    const location = useLocation()

    React.useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie${location.search}`, options)
            .then(response => setDataSearch(response.data.results))
            .catch(error => console.log(error.message))
        console.log(`https://api.themoviedb.org/3/search/movie${location.search}`)
    }, [location.search])


    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            <h2>Search Results</h2>
            {dataSearch.map((movie) => (
                movie.backdrop_path === null ? <></> :
                    <>
                        <MovieCard id={movie.id} title={movie.title} img={movie.poster_path} />
                    </>
            ))}
        </div>
    )
}

export default MovieSearchList
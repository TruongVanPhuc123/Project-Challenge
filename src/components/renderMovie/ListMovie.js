import React from 'react'
import MovieCard from './MovieCard';
import NextPrevBtn from '../button/NextPrevBtn';
import '../../css/MovieListSearch.css'
import Header from '../content/Header';
import axios from 'axios'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmU1ZDMzOGJmZTg5ZTA2YzMxZTUwMzRiMzdiODJkMiIsInN1YiI6IjY1ZWY3MGY2Mzk3ZGYwMDE4NDkzMzBjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v2fdMzryuGI5dfBVg-TBq25dCYfLmTA9sbm5ioVf9oU'
    }
};

function ListMovie({ title, url }) {

    const [movies, setMovies] = React.useState([])

    React.useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie${url}`, options)
            .then((response) => setMovies(response.data.results))
            .catch((error) => console.log(error.message))
    }, [url])

    return (
        <div className='listMovie'>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%', padding: '30px 0' }}>
                <div>
                    <h2>
                        <span>{title}</span>
                    </h2>
                </div>
                <div><NextPrevBtn /></div>
            </div>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
                {movies.map((movie) => (
                    movie.backdrop_path === null ? <></> :
                        <>
                            <MovieCard id={movie.id} title={movie.title} img={movie.poster_path} />
                        </>
                ))}
            </div>
        </div>
    )
}

export default ListMovie
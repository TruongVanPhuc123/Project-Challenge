import axios from 'axios'
import React from 'react'
import MovieCard from './MovieCard';

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
        <div>
            <h2>{title}</h2>
            <div className="movie-list" style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                {movies.slice(0, 8).map((movie) =>
                    <MovieCard id={movie.id} title={movie.title} img={movie.poster_path} />
                )}
            </div>
        </div>
    )
}

export default ListMovie
import React from 'react'
import MovieCard from './MovieCard';
import '../../css/MovieListSearch.css'
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
    const [page, setPage] = React.useState(1)
    console.log(movies)

    React.useEffect(() => {
        axios.get(`https://api.themoviedb.org/3${url}&page=${page}`, options)
            .then((response) => { setMovies(response.data.results) })
            .catch((error) => console.log(error.message))
    }, [url, page])

    return (
        <div className='container-main'>
            <div className='listMovie'>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%', paddingTop: '100px', paddingBottom: "30px    " }}>
                    <div>
                        <h2>
                            <span>{title}</span>
                        </h2>
                    </div>
                    <div className='btnGroup' style={{ display: "flex", alignItems: "center", paddingTop: "20px", gap: "10px" }}>
                        <button className='btn-login prev' disabled={page === 1} onClick={() => setPage(page - 1)}>Prev Page</button>
                        <span style={{ fontSize: "2rem" }}>{page}</span>
                        <button className='btn-login next' disabled={movies.length === 0} onClick={() => setPage(page + 1)}>Next Page</button>
                    </div>
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
        </div>
    )
}

export default ListMovie
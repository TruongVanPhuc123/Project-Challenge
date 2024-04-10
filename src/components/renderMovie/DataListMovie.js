import React from 'react'
import axios from 'axios'
import ListMovie from './ListMovie';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmU1ZDMzOGJmZTg5ZTA2YzMxZTUwMzRiMzdiODJkMiIsInN1YiI6IjY1ZWY3MGY2Mzk3ZGYwMDE4NDkzMzBjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v2fdMzryuGI5dfBVg-TBq25dCYfLmTA9sbm5ioVf9oU'
    }
};

function DataListMovie({ title, url }) {
    const [movies, setMovies] = React.useState([])

    React.useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie${url}`, options)
            .then((response) => setMovies(response.data.results))
            .catch((error) => console.log(error.message))
    }, [url])
    return (
        <div><ListMovie dataSearch={movies} title={title} /></div>
    )
}

export default DataListMovie
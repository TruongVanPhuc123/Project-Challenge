import React from 'react'
import axios from 'axios';
import '../../css/Genres.css'
import { useNavigate } from 'react-router-dom'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmU1ZDMzOGJmZTg5ZTA2YzMxZTUwMzRiMzdiODJkMiIsInN1YiI6IjY1ZWY3MGY2Mzk3ZGYwMDE4NDkzMzBjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v2fdMzryuGI5dfBVg-TBq25dCYfLmTA9sbm5ioVf9oU'
    }
};

function DataGenres() {
    const [genres, setGenres] = React.useState([])
    const navigate = useNavigate()

    React.useEffect(() => {
        const url = 'https://api.themoviedb.org/3/genre/movie/list'
        axios.get(url, options)
            .then(response => setGenres(response.data.genres))
    }, [])

    return (
        <div className='containerGenres'>
            {genres.map(genres => <div className='genresName' onClick={() => navigate(`/genres/${genres.id}`)}>{genres.name}</div>)}
        </div>
    )
}

export default DataGenres
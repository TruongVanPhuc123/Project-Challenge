import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/content/Header'
import ListMovie from '../components/renderMovie/ListMovie'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmU1ZDMzOGJmZTg5ZTA2YzMxZTUwMzRiMzdiODJkMiIsInN1YiI6IjY1ZWY3MGY2Mzk3ZGYwMDE4NDkzMzBjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v2fdMzryuGI5dfBVg-TBq25dCYfLmTA9sbm5ioVf9oU'
    }
};

function DataGenresID() {
    const [genres, setGenres] = React.useState([])
    const params = useParams()
    let id = params.id
    const find = genres.find((genres) => Number(genres.id) === Number(id))
    console.log(find)

    React.useEffect(() => {
        const url = 'https://api.themoviedb.org/3/genre/movie/list'
        axios.get(url, options)
            .then(response => setGenres(response.data.genres))
    }, [])

    return (
        <div>
            <Header />
            <ListMovie url={`/discover/movie?api_key=5be5d338bfe89e06c31e5034b37b82d2&language=en-US&append_to_response=videos&with_genres=${id}`} />
        </div>
    )
}

export default DataGenresID
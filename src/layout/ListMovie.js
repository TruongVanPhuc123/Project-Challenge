import React from 'react'
import { BASE_URL } from '../app/config'
import apiService from '../app/apiService'
import axios from 'axios'
import Movie from './Movie'
import DetailMovie from '../page/DetailMovie'
import AllNowPlaying from './AllNowPlaying'
import AllPopular from './AllPopular'
import AllUpcoming from './AllUpcoming'
import AllToprated from './AllToprated'

function ListMovie() {
    const [dataPlaying, setDataPlaying] = React.useState([])
    const [dataPopular, setDataPopular] = React.useState([])
    const [dataToprated, setDataToprated] = React.useState([])
    const [dataUpcoming, setDataUpcoming] = React.useState([])
    // console.log(BASE_URL)
    // console.log(data)
    // console.log(dataPopular)
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmU1ZDMzOGJmZTg5ZTA2YzMxZTUwMzRiMzdiODJkMiIsInN1YiI6IjY1ZWY3MGY2Mzk3ZGYwMDE4NDkzMzBjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v2fdMzryuGI5dfBVg-TBq25dCYfLmTA9sbm5ioVf9oU'
        }
    };

    React.useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/now_playing', options)
            .then(response =>
                setDataPlaying(response.data.results)
            )
            .catch(err => console.log(err.message))
        axios.get('https://api.themoviedb.org/3/movie/popular', options)
            .then(response =>
                setDataPopular(response.data.results)
            )
            .catch(err => console.log(err.message))
        axios.get('https://api.themoviedb.org/3/movie/top_rated', options)
            .then(response =>
                setDataToprated(response.data.results)
            )
            .catch(err => console.log(err.message))
        axios.get('https://api.themoviedb.org/3/movie/upcoming', options)
            .then(response =>
                setDataUpcoming(response.data.results)
            )
            .catch(err => console.log(err.message))
    }, [])

    return (
        <div>
            <Movie dataPlaying={dataPlaying} dataPopular={dataPopular} dataToprated={dataToprated} dataUpcoming={dataUpcoming} />
        </div>
    )
}

export default ListMovie

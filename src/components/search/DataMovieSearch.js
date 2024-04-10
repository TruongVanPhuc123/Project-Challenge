import React from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import ListMovie from '../renderMovie/ListMovie';
import MovieSearchList from '../../page/MovieSearchList';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmU1ZDMzOGJmZTg5ZTA2YzMxZTUwMzRiMzdiODJkMiIsInN1YiI6IjY1ZWY3MGY2Mzk3ZGYwMDE4NDkzMzBjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v2fdMzryuGI5dfBVg-TBq25dCYfLmTA9sbm5ioVf9oU'
    }
};

function DataMovieSearch() {
    const [dataSearch, setDataSearch] = useState([])
    const [page, SetPage] = useState(1)
    const location = useLocation()
    let [searchParams, setSearchParams] = useSearchParams()
    const queryValues = searchParams.get('query')
    console.log(dataSearch)

    const handlePageChange = (page) => {
        SetPage(page)
        setSearchParams({ query: queryValues, page })
    }

    React.useEffect(() => {
        let url = `https://api.themoviedb.org/3/search/movie${location.search}`;
        axios.get(url, options)
            .then((response) => setDataSearch(response.data.results))
            .catch(error => console.log(error.message))
    }, [location.search, page])
    return (
        <div>
            <MovieSearchList dataSearch={dataSearch} page={page} handlePageChange={handlePageChange} />
        </div>
    )
}

export default DataMovieSearch
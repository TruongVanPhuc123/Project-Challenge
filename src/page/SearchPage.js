import React from 'react'
import { useSearchParams } from 'react-router-dom'
import ListMovie from '../components/renderMovie/ListMovie';
import Header from '../components/content/Header';

function DataMovieSearch() {
    let [searchParams] = useSearchParams()

    return (
        <div>
            <Header />
            <ListMovie url={`/search/movie?query=${searchParams.get('query')}`} title='Search' />
        </div>
    )
}

export default DataMovieSearch
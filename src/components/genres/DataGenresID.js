import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import MovieCard from '../renderMovie/MovieCard'
import NextPrevBtn from '../button/NextPrevBtn'
import Header from '../content/Header'

function DataGenresID() {
    const [data, setData] = React.useState([])
    const [page, setPage] = React.useState(1)
    const params = useParams()
    console.log(data)

    let id = params.id

    React.useEffect(() => {
        const key = `5be5d338bfe89e06c31e5034b37b82d2`
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&append_to_response=videos&with_genres=${id}&page=${page}`
        axios.get(url).then((response) => setData(response.data.results))
    }, [id, page])

    const handlePageChange = (newPage) => {
        setPage(newPage)
    }

    return (
        <>
            <Header />
            <div className='listMovie'>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%', paddingBottom: '20px' }}>
                    <div>
                        <h2>
                            <span>{ }</span>
                        </h2>
                    </div>
                    <div><NextPrevBtn data={data} page={page} handlePageChange={handlePageChange} /></div>
                </div>
                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
                    {data.map(movie => <MovieCard id={movie.id} img={movie.poster_path} title={movie.title} />)}
                </div>
            </div>
        </>
    )
}

export default DataGenresID
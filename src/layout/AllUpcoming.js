import React from 'react'
import Header from '../layout/Header'
import { useNavigate } from 'react-router-dom';
import DetailMovie from '../page/DetailMovie'
import StarRateIcon from '@mui/icons-material/StarRate';
import axios from 'axios';
import '../css/AllUpcoming.css'

function AllUpcoming() {
    const navigate = useNavigate()
    const [data, setData] = React.useState([])
    const [page, setPage] = React.useState([])
    console.log(data)
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmU1ZDMzOGJmZTg5ZTA2YzMxZTUwMzRiMzdiODJkMiIsInN1YiI6IjY1ZWY3MGY2Mzk3ZGYwMDE4NDkzMzBjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v2fdMzryuGI5dfBVg-TBq25dCYfLmTA9sbm5ioVf9oU'
        }
    };

    React.useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?page=${page}`, options)
            .then(response => {
                setData(response.data.results)
                setPage(response.data.page)
            }
            )
            .catch(err => console.log(err.message))
        console.log(`https://api.themoviedb.org/3/movie/upcoming?page=${page}`)
    }, [page])

    const handleClickPrev = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }
    const handleClickNext = () => {
        setPage(page + 1)
    }

    return (
        <>
            <Header />
            <div className='containerAllUpcoming'>
                <div className="containerMovie">
                    <div className='movie-title'>
                        <h2><span> All Upcoming</span></h2>
                    </div>
                    <div className='allMovie'>
                        {data.map((movie, index) => (
                            <div className='item' key={index}>
                                <img src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} className='img-movie' />
                                <div className='drop-movie' />
                                <div className='title-movie'>
                                    <p className='date-movie'>{movie.release_date}</p>
                                    <p className='vote-movie'><StarRateIcon /> {movie.vote_count}</p>
                                </div>
                                <div onClick={() => navigate(`detailmovies/${movie.id}`)}><DetailMovie /></div>
                            </div>
                        ))}
                    </div>
                    <div className='btnActions-upcoming'>
                        <button className="btnPrev" onClick={handleClickPrev}>Prev</button>
                        {page}
                        <button className="btnNext" onClick={handleClickNext}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllUpcoming
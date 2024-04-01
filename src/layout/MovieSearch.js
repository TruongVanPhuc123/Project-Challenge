import axios from 'axios';
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import StarRateIcon from '@mui/icons-material/StarRate';
import DetailMovie from '../page/DetailMovie'
import '../css/MovieSearch.css'
import Header from '../layout/Header'

function MovieSearch() {
    const [movieData, setMovieData] = React.useState([])
    const [movieInput, setMovieInput] = React.useState('')
    const navigate = useNavigate()
    const params = useParams();
    const dataID = params.id
    console.log(movieData)

    const handleChange = (event) => {
        setMovieInput(event.target.value);
        console.log('value is:', movieInput);
    };

    const handleClick = () => {
        navigate(`/search/movie/query/${movieInput}`)
    }

    React.useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${dataID}&language=en-US&api_key=5be5d338bfe89e06c31e5034b37b82d2`)
            .then((response) => setMovieData(response.data.results))
            .catch((error) => console.log(error.message))
    }, [dataID])

    return (
        <>
            <Header />
            <div className='containerSearch'>
                <div className='containerMovie'>
                    <div className='movie-title'>
                        <h2><span> Search Results</span></h2>
                        <div className='search-movie' >
                            <input type='text' className='form-field' placeholder='Find Movie ?' value={movieInput} onChange={handleChange} />
                            <div className='line-movie'></div>
                            <div onClick={handleClick}><SearchIcon sx={{ fontSize: '2rem', cursor: "pointer" }} /></div>
                        </div>
                    </div>
                    <div className='allMovie'>
                        {movieData.map((movie, index) => (
                            movie.backdrop_path === null ? <></> :
                                <>
                                    <div className='item' key={index}>
                                        <img src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} className='img-movie' />
                                        <div className='drop-movie' />
                                        <div className='title-movie'>
                                            <p className='date-movie'>{movie.release_date}</p>
                                            <p className='vote-movie'><StarRateIcon /> {movie.vote_count}</p>
                                        </div>
                                        <div onClick={() => navigate(`detailmovies/${movie.id}`)}><DetailMovie /></div>
                                    </div>
                                </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieSearch
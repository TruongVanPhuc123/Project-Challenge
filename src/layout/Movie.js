import React from 'react'
import '../css/Movie.css'
import { useNavigate } from 'react-router-dom';
import DetailMovie from '../page/DetailMovie'
import StarRateIcon from '@mui/icons-material/StarRate';
import SearchIcon from '@mui/icons-material/Search';

function Movie({ dataPlaying, dataPopular, dataToprated, dataUpcoming }) {
    const navigate = useNavigate()
    const [movieInput, setMovieInput] = React.useState('')

    const handleChange = (event) => {
        setMovieInput(event.target.value);
        console.log('value is:', movieInput);
    };

    const handleClick = () => {
        { movieInput === '' ? alert('Please Type Your Movie Search !') : navigate(`/search/movie/query/${movieInput}`) }
    }

    const handelClickSee = (number) => {
        if (number === 1) {
            navigate(`/seemore/nowplaying`)
        } else if (number === 2) {
            navigate(`/seemore/popular`)
        } else if (number === 3) {
            navigate(`/seemore/toprated`)
        } else {
            navigate(`/seemore/upcoming`)
        }
    }

    return (
        <div className='containerMovie'>
            <div className='movie-title'>
                <h2><span>Now Playing</span></h2>
                <div className='search-movie' >
                    <input type='text' className='form-field' placeholder='Find Movie ?' value={movieInput} onChange={handleChange} />
                    <div className='line-movie'></div>
                    <div onClick={handleClick}><SearchIcon sx={{ fontSize: '2rem', cursor: "pointer", color: "rgb(204, 204, 204)" }} /></div>
                </div>
            </div>
            <div>
                <div className='allMovie'>
                    {dataPlaying.slice(0, 9).map((movie, index) => (
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
                <div className='see-more-movie' onClick={() => handelClickSee(1)}>
                    <span>See More</span>
                </div>
            </div>
            <h2><span>Popular</span></h2>
            <div className='allMovie'>
                {dataPopular.slice(0, 9).map((movie, index) => (
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
                <div className='see-more-movie' onClick={() => handelClickSee(2)}>
                    <span >See More</span>
                </div>
            </div>
            <h2><span>Toprated</span></h2>
            <div className='allMovie'>
                {dataToprated.slice(0, 9).map((movie, index) => (
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
                <div className='see-more-movie' onClick={() => handelClickSee(3)}>
                    <span>See More</span>
                </div>
            </div>
            <h2><span>Upcoming</span></h2>
            <div className='allMovie'>
                {dataUpcoming.slice(0, 9).map((movie, index) => (
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
                <div className='see-more-movie' onClick={() => handelClickSee(4)}   >
                    <span >See More</span>
                </div>
            </div>
        </div>
    )
}

export default Movie

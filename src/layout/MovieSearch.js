import axios from 'axios';
import React from 'react'
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import '../css/MovieSearch.css'

function MovieSearch() {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const location = useLocation()
    console.log(searchParams)

    const handleChange = (event) => {
        let query = event.target.value
        if (query) {
            setSearchParams({ query })
        } else {
            setSearchParams({})
        }
    };

    const handleClick = () => {
        navigate(`/search` + location.search)
    }

    return (
        <>
            <div className='containerSearch'>
                <div className='containerMovie'>
                    <div className='movie-title'>
                        <div className='search-movie' >
                            <input type='text' className='form-field' placeholder='Find Movie ?' value={searchParams.get('query') || ''} onChange={handleChange} />
                            <div className='line-movie'></div>
                            <div onClick={handleClick}><SearchIcon sx={{ fontSize: '2rem', cursor: "pointer" }} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieSearch
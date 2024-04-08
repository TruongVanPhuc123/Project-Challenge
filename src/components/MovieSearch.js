import React from 'react'
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import '../css/MovieSearch.css'

function MovieSearch() {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const location = useLocation()

    const handleChange = (event) => {
        let query = event.target.value
        if (query) {
            setSearchParams({ query })
        } else {
            setSearchParams({})
        }
    };

    const handleClick = () => {
        if (location.search === '') {
            alert('Please type your search !')
        } else {
            navigate(`/search` + location.search)
        }
    }

    return (
        <>
            <div className='form-group' >
                <input type='text' className='form-field' placeholder='Search ...' value={searchParams.get('query') || ''} onChange={handleChange} />
                <span onClick={handleClick}><SearchIcon sx={{ fontSize: '1.25rem', cursor: "pointer", paddingTop: "5px" }} /></span>
            </div>
        </>
    )
}

export default MovieSearch
import * as React from 'react';
import '../css/Genres.css'
import { useNavigate } from 'react-router-dom'

export default function BasicModal({ genres }) {
    const navigate = useNavigate()
    const handleClick = (id, name) => navigate(`/genres/${id}`)
    return (
        <div className='containerGenres' >
            {genres.map(genres => <div className='genresName' onClick={() => handleClick(genres.id, genres.name)}>{genres.name}</div>)}
        </div>
    );
}
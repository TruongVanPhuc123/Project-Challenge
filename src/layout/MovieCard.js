import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({ id, img, title }) {

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} height={"200px"} />
            {/* <p>{title}</p> */}
            <Link to={`/detail/${id}`}>
                <button className='btn-login detail' >Detail</button>
            </Link>
        </div>
    )
}

export default MovieCard
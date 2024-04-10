import React from 'react'
import { Link } from 'react-router-dom'
import DataDetail from '../detail/DataDetail'

function MovieCard({ id, img, title }) {

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} height={"200px"} style={{ borderRadius: "5px" }} />
            {/* <p>{title}</p> */}
            {/* <Link to={`/detail/${id}`}> */}
            <div >
                <DataDetail id={id} />
            </div>
            {/* </Link> */}
        </div>
    )
}

export default MovieCard
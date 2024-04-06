import React from 'react'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import MovieSearchList from './MovieSearchList'

function Page({ url, options }) {
    const [page, setPage] = useState(1)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1)
            navigate(`${location.search}&page=${page - 1}`)
        }
    }

    const hanldeNext = () => {
        setPage(page + 1)
        navigate(`${location.search}&page=${page + 1}`)
    }

    return (
        <>
            <div className='btnGroup'>
                <button className='btnPrev' onClick={handlePrev}>Prev</button>
                <span>{page}</span>
                <button className='btnNext' onClick={hanldeNext}>Next</button>
            </div>
        </>
    )
}

export default Page
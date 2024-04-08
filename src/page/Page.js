import React from 'react'
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';

function Page() {
    const [page, setPage] = React.useState(1)
    const location = useLocation()
    const navigate = useNavigate()
    let [searchParams, setSearchParams] = useSearchParams()
    const valueQuery = searchParams.get('query')

    const handlePageChange = (page) => {
        if (valueQuery) {
            setPage(page)
            setSearchParams({ query: valueQuery, page })
        } else {
            setSearchParams({ page })
        }
        // setPage(page)
        // navigate(`/search${location.search}&page=${page}`)
    }

    return (
        <div className='btnGroup'>
            <div className='btnGroup' style={{ display: "flex", alignItems: "center", paddingTop: "20px", gap: "10px" }}>
                <button className='btn-login prev' disabled={page === 1} onClick={() => handlePageChange(page - 1)}>Prev</button>
                <span style={{ fontSize: "2rem" }}>{page}</span>
                <button className='btn-login next' onClick={() => handlePageChange(page + 1)}>Next</button>
            </div>
        </div>
    )
}

export default Page
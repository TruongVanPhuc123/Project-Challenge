import React from 'react'

function Page({ pageMovie, setPageMovie }) {
    const [page, setPage] = React.useState(pageMovie)

    const handlePageChange = (page) => {
        setPage(page);
    }

    return (
        <div className='btnGroup'>
            <div className='btnGroup' style={{ display: "flex", alignItems: "center", paddingTop: "20px", gap: "10px" }}>
                <button className='btn-login' disabled={page === 1} onClick={() => handlePageChange(page - 1)}>Prev</button>
                <span style={{ fontSize: "2rem" }}>{page}</span>
                <button className='btn-login' onClick={() => handlePageChange(page + 1)}>Next</button>
            </div>
        </div>
    )
}

export default Page
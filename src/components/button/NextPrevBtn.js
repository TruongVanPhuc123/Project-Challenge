import React from 'react'

function NextPrevBtn({ data, page, handlePageChange }) {
    return (
        <div>
            <div className='btnGroup' style={{ display: "flex", alignItems: "center", paddingTop: "20px", gap: "10px" }}>
                <button className='btn-login prev' disabled={page === 1} onClick={() => handlePageChange(page - 1)}>Prev Page</button>
                <span style={{ fontSize: "2rem" }}>{page}</span>
                <button className='btn-login next' onClick={() => handlePageChange(page + 1)}>Next Page</button>
            </div>
        </div>
    )
}

export default NextPrevBtn
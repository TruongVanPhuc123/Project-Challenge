import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'

function RenderHeaderMain({ handlePrev, page, hanldeNext }) {
    return (
        <div className="container">
            <Header />
            <Main />
        </div>
    )
}

export default RenderHeaderMain
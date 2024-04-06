import React from 'react'
import { AuthContext } from '../../context/AuthContext'

function Section4() {
    const { user } = React.useContext(AuthContext)
    const state = React.useContext(AuthContext)
    const hanldeClick = (e) => {
        if (user === null) return alert("Please Login !")
    }
    return (
        <section className='section4'>
            <div className='actions'>
                <div className='allVideo-sec4'>
                    <div className="video-image">
                        <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' width={"100%"} />
                        <div className='video-sec4'>
                            <video autoPlay playsInline muted loop>
                                <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v' type='video/mp4' />
                            </video>
                        </div>
                    </div>
                </div>
                <div className='text-sec4'>
                    <h2>Enjoy on <span>your video</span></h2>
                    <p className='content'>If you want to have a wonderful experience and watch your favorite movies, come to us !</p>
                    {state.isAuthenticated === true ?
                        <p></p> :
                        <p>
                            <button className='listVideo' onClick={hanldeClick}>Click Here !</button>
                        </p>}
                </div>
            </div>
        </section>
    )
}

export default Section4
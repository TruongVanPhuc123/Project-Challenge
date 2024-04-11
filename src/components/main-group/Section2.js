import React from 'react'

function Section2({ Image }) {
    return (
        <section className='section2'>
            <div className='allText-Video'>
                <div className='allText'>
                    <h2 className='textvideoh2'>Watch <span>everywhere</span></h2>
                    <p className='textvideop'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className='allVideo'>
                    <img src={Image} className='image' />
                    <video className='video' autoPlay playsInline muted loop>
                        <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-vn.m4v' />
                    </video>
                </div>
            </div>
        </section>
    )
}

export default Section2
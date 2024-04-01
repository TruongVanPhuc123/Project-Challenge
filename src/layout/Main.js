import React from 'react'
import '../css/MainSearch.css'
import Imgae from "../img/backgroundMovie.webp"
import { AuthContext } from '../context/AuthContext';
import ListMovie from './ListMovie'
import FAlert from '../components/FAlert'

function MainSearch() {
    const { user, login } = React.useContext(AuthContext)
    const state = React.useContext(AuthContext)
    const hanldeClick = (e) => {
        if (user === null) return alert("Please Login !")
    }

    return (
        <div className='container-main'>
            {user === null ?
                <><section className='section1'>
                    <div className='box'></div>
                    <div className='text-center'>
                        <h2 className='texth2-sec1'>Thank you for coming and grading </h2>
                        <p className='p4'>Full Stack Web -<span> React Ecosystem</span></p>
                        <p className='p2'>This is a <span>Project Challenge</span> used to end module 2.2 </p>
                        <p className='p3'></p>
                        <button className='button-52'>About Us</button>
                    </div>
                </section>
                    <div className='border'></div>
                    <section className='section2'>
                        <div className='allText-Video'>
                            <div className='allText'>
                                <h2 className='textvideoh2'>Watch <span>everywhere</span></h2>
                                <p className='textvideop'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                            </div>
                            <div className='allVideo'>
                                <img src={Imgae} className='image' />
                                <video className='video' autoPlay playsInline muted loop>
                                    <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-vn.m4v' />
                                </video>
                            </div>
                        </div>
                    </section>
                    <div className='border'></div>
                    <section className='section3'>
                        <h2><span>Benefits</span> of watching movies</h2>
                        <div className='allItems'>
                            <div className='item1'>
                                <h5>Positive impact on your overall health</h5>
                                <p>Comedies, for example, make us laugh, and laughing for 15 minutes is just as good for your heart as exercise, said cardiologist <span>Dr. Michael Miller of the University of Maryland</span>. But don't underestimate the sad movies! Sad movies have a positive effect on your brain chemistry too.</p>
                            </div>
                            <div className='item1'>
                                <h5>Help us deal with difficult situations</h5>
                                <p>Movies are not just a form of entertainment. They often teach us lessons and help us deal with difficult situations. <span>According to Gary Solomon Ph.D., MPH, MSW, the author of two books on cinema therapy</span>, if you’re facing some difficult life situation.</p>
                            </div>
                            <div className='item1'>
                                <h5>Bring together families and couples</h5>
                                <p>Movie nights bring together families, friends, and couples. They make us laugh and connect us, while we’re having time together. Now during Coronavirus, <span>we all miss going to the cinema with our friends, or on a date</span>. But if you want to have fun with your family !</p>
                            </div>
                        </div>
                    </section>
                    <div className='border'></div>
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
                    <div className='border'></div>
                </> :
                <section id='section5'>
                    <ListMovie />
                    <div className='border'></div>
                </section>
            }
            <section className='section6'>
                <div className='container-footer'>
                    {/* <div className='idea-designer'>
                        <p>Designer: Truong Van Phuc</p>
                        <p>Idea: Netflix</p>
                    </div>
                    <div className='image'></div>
                    <div className='about-designer'>
                        <p><a href='https://github.com/TruongVanPhuc123/'>Github</a></p>
                        <p><a href='https://www.facebook.com/profile.php?id=100052445172699'>Facebook</a></p>
                        <p><a href=''>Zalo</a></p>
                        <p>tvphuc2k4@gmail.com</p>
                    </div> */}
                </div>
            </section>
        </div>
        // <></>
    )
}

export default MainSearch
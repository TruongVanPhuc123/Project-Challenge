import React from 'react'
import '../css/MainSearch.css'
import Imgae from "../img/backgroundMovie.webp"
import { AuthContext } from '../context/AuthContext';
import Section1 from './main-content/Section1';
import Section2 from './main-content/Section2';
import Section3 from './main-content/Section3';
import Section4 from './main-content/Section4';
import Section5 from './main-content/Section5';
import Section6 from './main-content/Section6';
import LoginMessage from './LoginMessage';

function MainSearch() {
    const { user } = React.useContext(AuthContext)

    return (
        <div className='container-main'>
            {user === null ?
                <>
                    <Section1 />
                    <div className='border'></div>
                    <Section2 Image={Imgae} />
                    <div className='border'></div>
                    <Section3 />
                    <div className='border'></div>
                    <Section4 />
                    <div className='border'></div>
                </> :
                <>
                    <LoginMessage />

                    <Section5 />
                    <div className='border'></div>
                </>
            }
            <Section6 />
        </div>
    )
}

export default MainSearch
import React from 'react'
import '../../css/MainSearch.css'
import Imgae from "../../img/backgroundMovie.webp"
import { AuthContext } from '../../context/AuthContext';
import Section1 from '../section-content/Section1';
import Section2 from '../section-content/Section2';
import Section3 from '../section-content/Section3';
import Section4 from '../section-content/Section4';
import Section5 from '../section-content/Section5';
import Section6 from '../section-content/Section6';
import LoginMessage from '../LoginMessage';


function MainSearch() {
    const { user } = React.useContext(AuthContext)

    return (
        <div className='container-main'>
            {user === null ?
                <>
                    <Section1 />
                    <Section2 Image={Imgae} />
                    <div className='border'></div>
                    <Section3 />
                    <div className='border'></div>
                    <Section4 />
                    <div className='border'></div>
                </> :
                <>
                    {/* <LoginMessage /> */}
                    <Section5 />
                    <div className='border'></div>
                </>
            }
            <Section6 />
        </div>
    )
}

export default MainSearch
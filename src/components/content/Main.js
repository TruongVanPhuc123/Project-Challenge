import React from 'react'
import '../../css/MainSearch.css'
import Imgae from "../../img/backgroundMovie.webp"
import { AuthContext } from '../../context/AuthContext';
import Section1 from '../main-group/Section1';
import Section2 from '../main-group/Section2';
import Section3 from '../main-group/Section3';
import Section4 from '../main-group/Section4';
import Section5 from '../main-group/Section5';
import Section6 from '../main-group/Section6';
import LoginMessage from '../tool/LoginMessage';


function MainSearch() {
    const state = React.useContext(AuthContext)
    // console.log(state)

    return (
        <div className='container-main'>
            {state.user ?
                <>
                    <Section5 />
                    <div className='border'></div>
                </>
                :
                <>
                    <Section1 />
                    <Section2 Image={Imgae} />
                    <div className='border'></div>
                    <Section3 />
                    <div className='border'></div>
                    <Section4 />
                    <div className='border'></div>
                    {/* <LoginMessage /> */}
                </>
            }
            <Section6 />
        </div>
    )
}

export default MainSearch
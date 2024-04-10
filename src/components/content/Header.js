import * as React from 'react';
import '../../css/Header.css'
import { AuthContext } from '../../context/AuthContext'
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import ModalAccount from '../ModalAccount'
import Navbar from '../navbar/Navbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MovieSearch from '../../components/search/MovieSearch'

export default function Header() {
    const [open, setOpen] = React.useState(false)

    const { user, logout } = React.useContext(AuthContext);
    const state = React.useContext(AuthContext)
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }

    return (
        <div className='container-head'>
            <div className='logo' onClick={handleClick} >
                <img src='https://platform.coderschool.vn/v2/static/img/coderschool-logo-compact.svg' width={50} />
                <span>CoderSchool</span>
            </div>
            {user ?
                <>
                    <div ><Navbar /></div>
                    <div className='user'>
                        <div style={{ display: "flex", gap: '10px', alignItems: "center" }}>
                            <div><MovieSearch /></div>
                        </div>
                    </div>
                    <div style={{ color: "white", fontWeight: 'bold', cursor: 'pointer', display: "flex", alignItems: 'center', gap: '10px' }} onClick={() => setOpen(!open)}>
                        <div>Account</div>
                        <AccountCircleIcon sx={{ fontSize: '2.5rem', cursor: 'pointer' }} />
                    </div>
                    <div className={`account ${open ? 'active' : 'inactive'}`} >
                        <ModalAccount state={state} user={user} logout={logout} />
                    </div>
                </>
                :
                <div style={{ color: 'white', fontWeight: 'bold' }}>Welcome To My <span>Project Challenge</span></div>
            }
            {state.isAuthenticated === false ?
                <div className='actionBtn'>
                    <Link to='/login'>
                        <button className='btn-login'>Login</button>
                    </Link>
                </div> :
                // <Link to='/'>
                //     <button className='btn-logout' onClick={logout}>Logout</button>
                // </Link>
                <></>
            }
        </div>
    );
}
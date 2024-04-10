import React from 'react'
import { useNavigate } from 'react-router-dom'
import DataGenres from '../genres/DataGenres'

const styles = {
    display: 'flex',
    alignItems: 'center',
    color: "white",
    fontWeight: "bold",
    gap: "10px",
    cursor: "pointer",
}

function Navbar() {
    const [open, setOpen] = React.useState(false)
    const navigate = useNavigate()
    const handleClick = () => navigate('/');
    return (
        <div style={styles} >
            <div onClick={handleClick}>Home </div>
            <div onClick={() => { setOpen(!open) }}>Genres</div>
            <div className={`${open ? 'active' : 'inactive'}`}>
                <DataGenres />
            </div>
        </div>
    )
}

export default Navbar
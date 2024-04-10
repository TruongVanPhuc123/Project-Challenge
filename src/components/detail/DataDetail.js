import React from 'react'
import axios from 'axios';
import ModalDetail from '../../page/ModalDetail.js'

function DataDetail({ id }) {
    const [dataID, setDataID] = React.useState([])
    const [dataGenres, setDataGenres] = React.useState([])
    const [date, setDate] = React.useState('')

    React.useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5be5d338bfe89e06c31e5034b37b82d2`)
            .then(response => {
                setDataID(response.data)
                setDataGenres(response.data.genres)
                setDate(response.data.release_date)
            })
            .catch(err => console.log(err.message))
        // console.log(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5be5d338bfe89e06c31e5034b37b82d2`)
    }, [id])
    return (
        <div>
            {/* <DetailMovie dataID={dataID} dataGenres={dataGenres} date={date} /> */}
            <ModalDetail dataID={dataID} dataGenres={dataGenres} date={date} />
        </div>
    )
}

export default DataDetail
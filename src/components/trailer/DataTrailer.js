import React from 'react'
import ModalTrailer from '../../page/ModalTrailer'
import axios from 'axios';
import { useParams } from 'react-router-dom'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmU1ZDMzOGJmZTg5ZTA2YzMxZTUwMzRiMzdiODJkMiIsInN1YiI6IjY1ZWY3MGY2Mzk3ZGYwMDE4NDkzMzBjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v2fdMzryuGI5dfBVg-TBq25dCYfLmTA9sbm5ioVf9oU'
    }
};

function DataTrailer({ id }) {
    const [data, setData] = React.useState([])
    // const params = useParams()
    // const id = params.id

    React.useEffect(() => {
        let url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
        axios.get(url, options)
            .then(response => setData(response.data.results))
    }, [id])

    return (
        <div>
            {data.length === 0 ? <> </> : <ModalTrailer id={data[0].key} />}
        </div>
    )
}

export default DataTrailer
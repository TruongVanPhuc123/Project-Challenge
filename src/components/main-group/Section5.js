import React from 'react'
import ListMovie from '../renderMovie/ListMovie'

function Section5() {

    return (
        <section id='section5'>
            <ListMovie title="Now Playing" url="/movie/now_playing?" />
            <ListMovie title="Popular" url="/movie/popular?" />
            <ListMovie title="Toprated" url="/movie/top_rated?" />
            <ListMovie title="Upcoming" url="/movie/upcoming?" />
        </section>
    )
}

export default Section5
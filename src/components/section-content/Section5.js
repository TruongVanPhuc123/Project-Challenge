import React from 'react'
import ListMovie from '../renderMovie/ListMovie'

function Section5() {

    return (
        <section id='section5'>
            <ListMovie title="Now Playing" url="/now_playing" />
            <ListMovie title="Popular" url="/popular" />
            <ListMovie title="Toprated" url="/top_rated" />
            <ListMovie title="Upcoming" url="/upcoming" />
        </section>
    )
}

export default Section5
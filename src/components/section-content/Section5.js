import React from 'react'
import ListMovie from '../renderMovie/ListMovie'
import DataListMovie from '../renderMovie/DataListMovie'

function Section5() {

    return (
        <section id='section5'>
            <DataListMovie title="Now Playing" url="/now_playing" />
            <DataListMovie title="Popular" url="/popular" />
            <DataListMovie title="Toprated" url="/top_rated" />
            <DataListMovie title="Upcoming" url="/upcoming" />
        </section>
    )
}

export default Section5
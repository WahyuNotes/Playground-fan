import React from 'react'
import { Jumbotron } from '../../molecules/home/Jumbotron'
import { ListMovie } from '../../molecules/home/ListMovie'

export const Homepage = () => {
  return (
    <div className="mt-14 min-h-[calc(100vh-175px)]">
      <Jumbotron />
      <ListMovie title="Recommended Movies" url="/now_playing" />
      <ListMovie title="Upcoming Movies" url="/upcoming" />
      <ListMovie title="Popular this week" url="/popular" />
    </div>
  )
}

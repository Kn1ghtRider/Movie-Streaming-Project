import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
import requests from './Request'
import Row from './Row'


function HomeScreen() {
  return (
    <div className='HomeScreen'>
        <Nav />
        <Banner />
        <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
        <div className="App__footer">
        {/* Footer content */}
        <p>&copy; 2023 Incendio. All rights reserved.</p>
      </div>

    </div>
  )
}

export default HomeScreen
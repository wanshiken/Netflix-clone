//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner'
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner />
      <Row title='NETFLIX ORIGINALS' 
      fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending now' fetchUrl={requests.fetchTrending}/>
      <Row title='Top rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

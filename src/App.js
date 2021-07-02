import React from "react";
import './App.css';
import Row from "./Row";
import requests from "./Requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflix}
     isLargeRow />
     <Row title="Trending" fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Comdey Moives" fetchUrl={requests.fetchComdey}/>
     <Row title="Action Movies" fetchUrl={requests.fetchAction}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorror}/>
     <Row title="Romantic movies" fetchUrl={requests.fetchRomantic}/>
     <Row title="Documentry " fetchUrl={requests.fetchDocumentry}/>
    </div>
  );
}

export default App;

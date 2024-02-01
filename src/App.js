import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import SingleShow from './pages/singleShow';
import React, { useState, useEffect } from "react";

function App() {

  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        setShows(data);
        console.log("dataArray-home-page", data);
      })
      .catch((e) => console.log("Erros", e));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={ <Home shows={shows}/>}/>
        <Route  path={`/show/:id`} element={  <SingleShow shows={shows}/>}/>

      </Routes>
     
     
    </div>
  );
}

export default App;

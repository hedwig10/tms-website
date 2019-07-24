import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Cards from "./components/Cards";
import Body from "./components/Body";
import '../src/App.css';


function App() {
  return (
    <div className="container">
      <Navbar />
      <Jumbotron />
      <Cards />
      <Body />
    </div>
  );
}

export default App;

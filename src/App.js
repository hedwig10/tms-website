import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Cards from "./components/Cards";
import Body from "./components/Body";
import Gomapsapi from "./components/Gomapsapi"



import '../src/App.css';


function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Cards />
      <Gomapsapi />
      <Body />

    </div>
  );
}

export default App; 
  

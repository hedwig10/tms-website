import React from "react";
import Navbar from "./components/navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import '../src/App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Jumbotron />
      <Card />
    </div>
  );
}

export default App;

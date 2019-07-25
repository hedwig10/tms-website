import React from "react";
import {Button } from 'reactstrap';
import "../components/jumbotron-style.css";

const Jumbotron = (props) => {
  return (
    <div className="Jumbotron">
        <h1 className="display-3">Trade Management Solutions</h1>
        <p className="lead">Transportation Management Made Easy</p>
        <hr className="my-2" />
      <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>

    </div>
  );
};

export default Jumbotron;

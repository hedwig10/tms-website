import React from "react";
import "../Card/card-style.css";

const Card = props => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img style={{ width: '520px', height: '150px' }} src={props.imgsrc} alt="image1" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">Type something here about information.
                maybe a video of the service
                </p>
                
                <a href="#" className="btn btn-outline-success">
                    Learn More
            </a>


            </div>

        </div>

    );
}

export default Card;

import React from "react";
import img1 from '../assets/image1.jpeg';

const Card = props =>{ 
    return (    
        <div className="card text-center">
            <div className="overflow">
                <img src={img1} alt="image1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Destination Services</h4>
                <p className="card-text text-secondary">We increase customer profitability by improving overall cycle times that keep products secure and clients at ease. We bring only the best quality and peace of mind while providing the savings and benefits that come with a full service, one source provider from origin to destination.	</p>
            </div>

        </div>
        
    );
}

export default Card;

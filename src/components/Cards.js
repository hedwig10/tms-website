import React, {Component} from "react";
import Card from '../Card/Card';
import img1 from '../assets/trdm4.jpg';
import img2 from '../assets/tradebk.jpg';
import img3 from '../assets/trdm3.jpg';


class Cards extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
    render() {
        return (<div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Card imgsrc={img1}title="Over The Road"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img2}title="AirTime"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img3}title="Ocean"/>
                </div>
                
            </div>
        </div>
        );
    }

};
export default Cards;
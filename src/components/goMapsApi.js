import React from "react";
import {GoogleMap, withScriptjs, Marker, withGoogleMap} from 'react-google-maps';


import '../components/gomaps.css';




function Map() {
  return(<GoogleMap  defaultZoom={10} 
  defaultCenter={{lat: 30.4903508, lng: -97.6840255}} />

  );
  
}


const WrappedMap =  withScriptjs(withGoogleMap(Map));

export default function () {
return( 
<div style={{width: '100vw' ,height: '100vh', padding: '75px 200px', position: 'middle'}}>
  <WrappedMap 
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
    libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={ <div style={{ height: `400px` }} />}
    mapElement= {<div style={{ height: `100%` }} />}
    
  />
</div>
);
}
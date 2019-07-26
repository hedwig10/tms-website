import React from "react";
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

function Map() {
  return(<GoogleMap  defaultZoom={10} 
  defaultCenter={{lat: 30.4903508, lng: -97.6840255}}/>
  );
}

const WrappedMap =  withScriptjs(withGoogleMap(Map));

export default function () {
return( 
<div style={{width: '50vw' ,height: '100vh'}}>
  <WrappedMap 
    googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB6kkVpRxna2HJWKNLXR_R1-519OrtFCqg'}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={ <div style={{ height: `400px` }} />}
    mapElement= {<div style={{ height: `100%` }} />}
  />
</div>
);
}
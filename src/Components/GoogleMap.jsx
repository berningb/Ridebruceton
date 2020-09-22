import React from 'react';
import GoogleMapReact from 'google-map-react';

import '../Styles/GoogleMap.scss';


const GoogleMap = ({width}) => {

    return (
        <div className='googleMap' style={{width: width}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBxI_uTZ0MTGOwgTjf1yhAmKdHS8_q7OrI'}}
                defaultCenter={{ lat: 36.0384762, lng: -88.2456757}}
                defaultZoom={15}
                >
                <MapMarker
                    lat={36.0384762}
                    lng={-88.2456757}
                />
            </GoogleMapReact>
        </div>)
};


export default GoogleMap



const MapMarker = () => {
    const greatPlaceStyle = {
        position: 'absolute',
        transform: 'translate(-50%, -50%)'
    }
    return (
        <div style={greatPlaceStyle}>
            <img alt='icon' style={{width: 50, height: 50}} src="https://img.icons8.com/office/80/000000/marker.png"/>
        </div>
    );
}
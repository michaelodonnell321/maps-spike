import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapsAttempt extends Component {

    state = {
            stores: [{ lat: 47.49855629475769, lng: -122.14184416996333 },
            { latitude: 47.359423, longitude: -122.021071 },
            { latitude: 47.2052192687988, longitude: -121.988426208496 },
            { latitude: 47.6307081, longitude: -122.1434325 },
            { latitude: 47.3084488, longitude: -122.2140121 },
            { latitude: 47.5524695, longitude: -122.0425407 }],
            testThing: false
    }

    setPin = (id) => {
        console.log('this was clicked', id)
    }

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker onClick={() => this.setPin(this.id)} key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }} />
        })
    }

    mapClickHandler = () => {
        console.log('map click handler');
    }

    render() {
        const mapStyles = {
            width: '75%',
            height: '75%',
        };
        return (
            <div className="map">
            <Map
            onClick={this.mapClickHandler}
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
            >
                {this.displayMarkers()}
                {this.setPin()}
            </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'KEY GOES HERE'
})(MapsAttempt);;
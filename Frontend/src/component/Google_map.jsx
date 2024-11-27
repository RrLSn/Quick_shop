import {GoogleMap, LoadScript} from '@react-google-maps/api'
import { useRef } from 'react';

const center = {
    lat: 5.025150,
    lng: 8.336520,
}

const containerStyle = {
    width: '100%',
    height: '100%',
}

const Google_map = () => {
    const Env = import.meta.env;
    const apiKey = Env.VITE_MAP_API_KEY;
    const mapRef = useRef(null)

    const onLoad = (mapInstance) => {
        mapRef.current = mapInstance

        //Add a single marker at the center
        new window.google.maps.Marker({
            position: center,
            map: mapInstance,
        })
    }

  return (
    <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap center={center} zoom={10} mapContainerStyle={containerStyle} onLoad={onLoad} />
    </LoadScript>
  )
}

export default Google_map

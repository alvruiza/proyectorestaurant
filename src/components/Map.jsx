import { Fragment } from "react"
import "./Map.css"
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps"
import MapStyle from "./MapStyle"


const pos = {
    lat: -29.9849137, 
    lng: -71.3636751
}

const Map = (props) => {
    
    return(
        <Fragment>
            <GoogleMap className="map"
            defaultZoom={15} 
            defaultCenter={pos}
            options={{styles: MapStyle, disableDefaultUI: true}}
            />
            <Marker 
            position={pos}
            icon="https://i.postimg.cc/FHnCq9Y6/marker-icon.png"                         
            />
        </Fragment>       
        )
    }
    
    

export default withScriptjs(
    withGoogleMap(
        Map
    )
)
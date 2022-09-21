import { Fragment } from "react"
import "./Map.css"
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"
import mapStyle from "./MapStyle"


const Map = (props) => {
    
    return(
        
        <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <h1>Hola mundo</h1>                        
                    </div>  
                <GoogleMap className="map"
                defaultZoom={17} 
                defaultCenter={{lat: -29.9849137, lng: -71.3636751}}
                style={props.mapStyle}
                />
                </div>
            </div>  
        
        
        )
    }
    
    Map.defaultProps = mapStyle;

export default withScriptjs(
    withGoogleMap(
        Map
    )
)
import { Fragment } from "react"
import "../components/Map.css"
import Map from "../components/Map"
import Navbar from "../components/Navbar"
import Jumbotron from "../components/Jumbotron"
import Footer from "../components/Footer"

const Contact = () => {

    const MapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&key="  

    return(
        <Fragment>
         <Navbar /> 
         <Jumbotron />  
        <div className="container-fluid mapcontainer">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-xs-12 mapcol">
                        <h1 className="maph1">CONTACTO</h1>
                        <div className="contactform">                           
                            <input type="text" className="nameInput"></input>                            
                            <label htmlFor="nameInput" className="namelabel">NOMBRE</label>                                                      
                        </div>
                        <div className="textarea">
                            <textarea className="textbox"></textarea>
                            <label htmlFor="textbox" className="textlabel">MENSAJE</label>                           
                        </div>
                        <div>
                            <button type="send" className="sendbtn">ENVIAR</button>
                        </div>
                        <div className="contactinfo">                                                                        
                            <p><i class='bx bxs-pin'></i> Av.Costanerna 500, La Herradura, Coquimbo, Chile.<br></br>
                            <i class='bx bxs-phone'></i> +5698655522<br></br>
                            <i class='bx bxs-envelope'></i> contacto@magnolia.cl
                            </p>                           
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <Map 
                        googleMapURL= {MapURL} 
                        containerElement={<div style={{height: "300px"}} />}
                        mapElement={<div style={{height: "100%"}} />}
                        loadingElement= {<p>Cargando</p>}                              
                        />      
                    </div>
                </div>
            <Footer />
            </div>
        </Fragment>
    )
}

export default Contact
import { Fragment } from "react"
import {Link} from "react-router-dom"
import "./Jumbotron.css"


const Jumbotron = () => {
    return(
        <Fragment>
            <div className="banner-image">
                <div className="container-fluid jcontainer">
                    <div className="row jumborow">
                        <h1 className="title">CONOCE NUESTRA NUEVA CARTA</h1>
                        <h6 className="subheader">Nuevos sabores, texturas y maridajes</h6>
                        <button className="ctabutton"><Link to={"/Carta"} className="jumbolink">DESCÚBRELA</Link></button>
                    </div>
                </div>
            </div>        
        </Fragment>
    )
}

export default Jumbotron
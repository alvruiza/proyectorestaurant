import { Fragment } from "react"
import "./BlogCard.css"
import Navbar from "./Navbar"
import Jumbotron from "./Jumbotron"
import Footer from "./Footer"
import {Link} from "react-router-dom"

let feed = [
    {
        title: "LA EXPERIENCIA",
        img: "https://i.postimg.cc/3N8QFc6N/calendario-agosto-paisaje-fondo-de-pantalla-simple-colores-frios-1.png"
    },
    {
        title: "NUESTRA COCINA ",
        img: "https://i.postimg.cc/sXV7QTrC/calendario-agosto-paisaje-fondo-de-pantalla-simple-colores-frios-3.png"
    },
    {
        title: "COCTELERÍA",
        img:"https://i.postimg.cc/6QHbQ2kc/Dise-o-sin-t-tulo-2022-09-21-T123715-620.png"
    }
]

const BlogCard = () => {
    return(
        <Fragment>
            <Navbar />
            <Jumbotron />
            <div className="container-fluid">
                <h1 className="blogheader">EL SELLO MAGNOLIA</h1>
                <div className="row jsutify-content-center cardrow">
                    <div className="col-lg-4 col-md-4 col-xs-12 imgcol">                        
                        <img className="cardimg" alt="blogimg" src={feed[0].img} /> 
                        <div className="overlay">                        
                        <Link to={"./article"} className="sideh1">{feed[0].title}</Link>                        
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12 imgcol">                        
                        <img className="cardimg" alt="blogimg" src={feed[1].img}/> 
                        <div className="overlay">
                        <Link to={"./article"} className="sideh1">{feed[1].title}</Link>                          
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12 imgcol">                        
                        <img className="cardimg" alt="blogimg" src={feed[2].img}/> 
                        <div className="overlay">
                        <Link to={"./article"} className="sideh1">{feed[2].title}</Link>                          
                        </div>
                    </div>                                        
                </div>                
            </div> 
            <Footer />       
        </Fragment>
    )
}

export default BlogCard
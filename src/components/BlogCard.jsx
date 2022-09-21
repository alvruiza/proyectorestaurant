import { Fragment } from "react"
import "./BlogCard.css"

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
        title: "COCTELERÍA DE AUTOR",
        img:"https://i.postimg.cc/6QHbQ2kc/Dise-o-sin-t-tulo-2022-09-21-T123715-620.png"
    }
]

const BlogCard = () => {
    return(
        <Fragment>
            <div className="container-fluid">
                <h1 className="blogheader">EL SELLO MAGNOLIA</h1>
                <div className="row jsutify-content-center cardrow">
                    <div className="col-lg-4 col-md-4 col-xs-12 imgcol">                        
                        <img className="cardimg" src={feed[0].img} /> 
                        <div className="overlay">
                        <a href="#" className="sideh1">{feed[0].title}</a>                        
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12 imgcol">                        
                        <img className="cardimg" src={feed[1].img}/> 
                        <div className="overlay">
                        <a href="#" className="sideh1">{feed[1].title}</a>                        
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12 imgcol">                        
                        <img className="cardimg" src={feed[2].img}/> 
                        <div className="overlay">
                        <a href="#" className="sideh1">{feed[2].title}</a>                        
                        </div>
                    </div>                                        
                </div>                
            </div>        
        </Fragment>
    )
}

export default BlogCard
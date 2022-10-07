import './BlogArticle.css'
import {Link} from 'react-router-dom'

const BlogArticle = () => {
    return(
        <div className="container-fluid">
            <div className="row justify-content-center blogrow">
                <div className="col-lg-4 col-md-4 col-xs-12 imgcol">
                    <img src="https://i.postimg.cc/3N8QFc6N/calendario-agosto-paisaje-fondo-de-pantalla-simple-colores-frios-1.png" alt="" className="articleimg"/>
                </div>
                <div className="col-lg-5 col-md-5 col-xs-12 articlecol">
                    <h1 className='blogh1'>La Experiencia</h1>
                    <p className="blogbody"> La experiencia Magnolia es única en su especie. una combinación de sabores, texturas, maridajes que te cautivarán al primer bocado. Todo ambientado en un íntimo salón iluminado sólo con velas.<br></br><br></br>
                    Renovamos completamente nuestra carta y redecoramos nuestro salón con un estilo mucho más cálido y cercano, porque queremos que te sientas como en casa. Reserva y atrévete a descubrir todo lo que Magnolia tiene preparado para ti.
                    
                    </p>
                    
                    <button className="backbtn"><Link to={"/"} className="nav-link">Volver</Link></button>
                </div>
            </div>
        </div>
    )
}

export default BlogArticle
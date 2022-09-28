import { Fragment } from "react"
import "./Footer.css"
import {Link} from "react-router-dom"

const Footer = () => {
    return(
        <Fragment>
            <div className="container-fluid footer">
                <div className="row footerrow">
                    <div className="col-lg-6 col-md-6 col-xs-12 footercol">
                        <img src="https://i.postimg.cc/fWr0wqpq/Dise-o-sin-t-tulo-2022-09-28-T165923-102-removebg-preview.png" alt="" className="footerlogo"/>
                    </div>
                    <div className="col-lg-2 col-md-2 col-xs-12 footercol">
                        <ul className="footerul">
                            <li><Link to={"/"} className="footerlink">Inicio</Link></li>
                            <li><Link to={"/"} className="footerlink">Reservas</Link></li>
                            <li><Link to={"/"} className="footerlink">Carta</Link></li>
                            <li><Link to={"/"} className="footerlink">Nosotros</Link></li>
                            <li><Link to={"/"} className="footerlink">Contacto</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-2 col-xs-12 footercol">
                        <ul className="footerul">
                            <li><Link to={"/"} className="footerlink">Eventos</Link></li>
                            <li><Link to={"/"} className="footerlink">Carta de Maridajes</Link></li>
                            <li><Link to={"/"} className="footerlink">Coctelería</Link></li>
                            <li><Link to={"/"} className="footerlink">Zonas de Envío</Link></li>
                            <li><Link to={"/"} className="footerlink">Trabaja con Nosotros</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-2 col-xs-12 footercol">
                        <ul className="footerul">
                            
                            <li><Link to={"/"} className="footerlink">Política de Privacidad</Link></li>
                            <li><Link to={"/"} className="footerlink">Política de Garantía</Link></li>
                            <li><Link to={"/"} className="footerlink">Términos y Condiciones</Link></li>
                            <li><Link to={"/"} className="footerlink">Estado del Servicio</Link></li>
                            <li><Link to={"/"} className="footerlink">Portal Colaboradores</Link></li>
                        </ul>
                    </div>
                </div>
                <p>© 2022 Magnolia Restaurant. Todos los derechos reservados</p>                
            </div>
        </Fragment>
    )
}

export default Footer
import { Fragment } from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import "./Navbar.css"
import 'bootstrap/dist/js/bootstrap.min.js'


const Navmenu = () => {

    const [navChange, setNavchange] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(true)

    const handlerMenu = () => {
       setMobileMenu(!mobileMenu)
       console.log(mobileMenu)
    }

    const handlerScroll = () => {
        if (window.scrollY >= 300){
            setNavchange(true)
        }else{
            setNavchange(false)
        }
    }

    window.addEventListener("scroll", handlerScroll)
 
    return (
        <Fragment>
        <nav className={mobileMenu === true ? "navbar fixed-top navbar-expand-lg navbar-dark p-md-0" : "navbar fixed-top navbar-expand-lg navbar-dark p-md-0 bg-black"} >
            <div className={navChange === false ? `container-fluid navcontainer` : "container-fluid navcontainer navbar-changed"}>                
                <Link to={"/"}><img src="https://i.postimg.cc/90q2gSc9/Sin-t-tulo-831-513-px.png" alt="logo" className={navChange === false ? "brandlogo" : "brandlogo-changed"}></img></Link>
                <button type="button"
                 className="navbar-toggler" 
                 data-bs-target="#navbarNav" 
                 data-bs-toggle="collapse" 
                 aria-controls="navbarNav" 
                 aria-expanded="false" 
                 aria-label="Toggle Navbar"
                 onClick={handlerMenu}
                 >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={mobileMenu === true ? "collapse navbar-collapse" : "collapse navbar-collapse navexpand"} id="navbarNav">
                    <div className="mx-auto"></div>
                    <ul className="navbar-nav navul">
                        <li className="nav-item"><Link to={"/"} className="nav-link l1">Inicio</Link></li>
                        <li className="nav-item"><Link to={"/Carta"} className="nav-link l1">Carta</Link></li>
                        <li className="nav-item"><Link to={"/Reserva"} className="nav-link l1">Reservas</Link></li>
                        <li className="nav-item"><Link to={"/Nosotros"} className="nav-link l1">Nosotros</Link></li>
                        <li className="nav-item"><Link to={"/Contacto"} className="nav-link l1">Contacto</Link></li>
                        <li className="nav-item"><Link to={"/intranet"} className="nav-link l1">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        </Fragment>
  
        
    )
}

export default Navmenu
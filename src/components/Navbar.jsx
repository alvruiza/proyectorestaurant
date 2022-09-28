import { Fragment } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navmenu = () => {

    const handlerMenu = () => {
        let nav = document.querySelector("nav")
        window.addEventListener("scroll", function() {
        if (window.pagaYOffset > 100) {
            nav.className.add("bg-dark", "shadow")
        }else  
        nav.className.remove("bg-dark", "shadow")   
        })
    }

 
    return (
        <Fragment>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-0">
            <div className="container-fluid">                
                <img src="https://i.postimg.cc/90q2gSc9/Sin-t-tulo-831-513-px.png" alt="logo" className="brandlogo"></img>
                <button type="button"
                 className="navbar-toggler" 
                 data-bas-target="#navbarNav" 
                 data-bs-toggle="collapse" 
                 aria-controls="navbarNav" 
                 aria-expanded="false" 
                 aria-label="Toggle Navbar"
                 onClick={handlerMenu}
                 >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="mx-auto"></div>
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to={"/"} className="nav-link l1">Inicio</Link></li>
                        <li className="nav-item"><Link to={"/Reserva"} className="nav-link l1">Reservas</Link></li>
                        <li className="nav-item"><Link to={"/Nosotros"} className="nav-link l1">Nosotros</Link></li>
                        <li className="nav-item"><Link to={"/Contacto"} className="nav-link l1">Contacto</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        </Fragment>
  
        
    )
}

export default Navmenu
import { Fragment } from "react"
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
                <img src="https://i.postimg.cc/90q2gSc9/Sin-t-tulo-831-513-px.png" className="brandlogo"></img>
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
                        <li className="nav-item"><a href="#" className="nav-link l1">Inicio</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Reservas</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Nosotros</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </Fragment>
  
        
    )
}

export default Navmenu
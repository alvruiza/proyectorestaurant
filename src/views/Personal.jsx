import { Fragment, useState, useEffect } from "react"
import { collection, onSnapshot} from "firebase/firestore"
import { dataBase } from "../config/firebase"
import "./Personal.css"
import BookingCard from "../components/BookingCard"
import BookingModule from "../components/BookingModule"
import { auth } from "../config/firebase"




const Personal = () => {

    const [bookings, setBookings] = useState([])
    
    const [renderModule, setRenderModule] = useState(false)
    
    const logOut = () => {
        console.log("hola")
        auth.signOut()
    }
      

    const getBookings = async () => {

        onSnapshot(collection(dataBase,"reservas"),(result) => {
            setBookings(result.docs)
        }) 

    }
    

    useEffect(() => {
        getBookings()
    }, [])

    const handlerButton = () => {
        setRenderModule(!renderModule)
    }


    return(
        <Fragment>
            <h1 className="personelh1">Reservas Agendadas</h1>            
                <div className="row justify-content-center personelrow">
                    <div className="personeldiv">
                        {bookings.map(booking => <BookingCard datos={booking} key={booking.id} bookings={bookings} setBookings={setBookings} />)}
                <div className="bookingmodule">
                    {renderModule === false ? null : <BookingModule />}
                </div>
                    </div>
                </div>
                <button type='button' className="exitbtn" onClick={logOut}>salir</button>         
                <button type='button' className="addbookingbtn" onClick={handlerButton}>{renderModule === false ? 'Agregar Reserva' : 'Cancelar'}</button>
        </Fragment>
    )
}

export default Personal
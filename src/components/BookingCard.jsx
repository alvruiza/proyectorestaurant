import { dataBase } from "../config/firebase"
import { doc, setDoc, deleteDoc } from 'firebase/firestore'
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';

const BookingCard = (props) => {
    let datos = props.datos.data()
    let key = props.datos.id

    const {name, phone, date, time} = datos
    const {bookings, setBookings} = props
    const [editing, setEditing] = useState(false)
    const [editedBooking, setEditedBooking] = useState({name, phone, date, time})


    const deleteBooking = async () => {
        try {
            await deleteDoc(doc(dataBase,'reservas', key))
            let refreshBookings = bookings.filter(booking => booking.id!==key)
            setBookings(refreshBookings)
            console.log(props)
            toast('Reserva Eliminada 🗑️!',
            {
                icon: '🍸',
                style: {
                    borderRadius: '10px',
                    background: '#daa520',
                    color: '#000000',
                },
            }
            );
        }catch(error){
            toast('Oops, algo salió mal, no se puedo eliminar la reserva!',
            {
                icon: '⛔',
                style: {
                    borderRadius: '10px',
                    background: '#daa520',
                    color: '#000000',
                },
            }
            );
        }
    }

    const editBooking = async () => {
        setEditing(true)
    } 

    const handlerInput = (e) => {
        setEditedBooking({
            ...editedBooking,
            [e.target.name]: e.target.value
    })
    }

    const refreshBooking = async () => {
        try{
            await setDoc(doc(dataBase,'reservas', key), editedBooking)
            setEditing(false)
            toast('Reserva Editada!',
            {
                icon: '✏️',
                style: {
                    borderRadius: '10px',
                    background: '#daa520',
                    color: '#000000',
                },
            }
            );
        }catch(error){
            toast('Oops, algo salió mal, no se puedo editar la reserva!',
            {
                icon: '⛔',
                style: {
                    borderRadius: '10px',
                    background: '#daa520',
                    color: '#000000',
                },
            }
            );
        }
    }

    const cancelEditing = () => {
        setEditing(false)
    }

    const sendEmail = () => {
        let name = datos.name
        let date = datos.date
        let time = datos.time
        let subject = name + ' tu reserva en Magnolia esta confirmada, te esperamos!'
        let body = name + ' tu mesa en Magonilia ya esta reservada para el ' + date + ' a las ' + time + ' te esperamos!!'
        window.location.href = `mailto:alv.ruiz@hotmail.com?Subject=` + subject + '&body=' + body
    }

    return(
            <div className="carddiv col-lg-3 col-md-6 col-xs-12">
                <Toaster />       
                {editing === false ? <h1 className="bookingname">{name}</h1> : <input type='text' id='name' name='name' value={editedBooking.name} onChange={(e)=>handlerInput(e)} placeholder='nombre'></input>}
                {editing === false ? <p className="bookingphone">{phone}</p> : <input type='text' id='phone' name='phone' value={editedBooking.phone} onChange={(e)=>handlerInput(e)} placeholder='teléfono'></input>}
                {editing === false ? <p className="bookingdate">{date}</p> : <input type='date' id='date' name='date' value={editedBooking.date} onChange={(e)=>handlerInput(e)} placeholder='fecha'></input>}
                {editing === false ? <p className="bookingtime">{time}</p> : <input type='time' id='time' name='time' value={editedBooking.time} onChange={(e)=>handlerInput(e)} placeholder='hora'></input>}
                <button className="editbtn" onClick={editing === false ? editBooking : refreshBooking}>{editing === false ? 'Editar' : 'Actualizar'}</button>
                <button className="deletebtn"  onClick={editing === false ? deleteBooking : cancelEditing }>{editing === false ? 'Borrar' : 'Cancelar'}</button>
                {editing === false ? <button className="confirmbtn" onClick={sendEmail} name={name} >Confirmar</button> : null}
            </div>        
    )
}

export default BookingCard
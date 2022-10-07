import Calendar from "./Calendar"
import {useFormik} from "formik"
import { bookingSchema } from "../Validations/Validation"
import toast, { Toaster } from 'react-hot-toast';
import {collection, addDoc} from "firebase/firestore"
import {dataBase} from "../config/firebase"



const BookingModule = () => {

    const onSubmit = async () => {        
        try {
                    
            await addDoc(collection(dataBase,"reservas"), formik.values)
            toast('Reserva Guardada, te esperamos!',
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
            toast('Oops, algo salió mal, tu reserva no fue guardada!',
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

    const formik = useFormik({
        initialValues: {
            name: "",
            phone:"",
            date: "",
            time:""
        },
        validationSchema: bookingSchema,
        onSubmit
    }) 
    
    return(
        <div className="container-fluid">
            <Toaster />
            <form action="" onSubmit={formik.handleSubmit} className="guestdiv" autoComplete="off">
                <div className="infodiv">                            
                    <div className="guestinfo">
                        {formik.errors.name && formik.touched.name && <p className="errorlabel">{formik.errors.name}</p>}                        
                        <input value={formik.values.name} name="name" type="text" className="guestname" onChange={formik.handleChange} onBlur={formik.handleBlur}></input>                            
                        <label htmlFor="nameInput" className="guestlabel">NOMBRE</label>                                   
                    </div>
                    <div className="guestinfo">
                        {formik.errors.phone && formik.touched.phone && <p className="errorlabel">{formik.errors.phone}</p>}
                        <input value={formik.values.phone} name="phone" type="text" className="guestname" onChange={formik.handleChange} onBlur={formik.handleBlur}></input>                            
                        <label htmlFor="nameInput" className="guestlabel">TELEFONO</label>     
                    </div>
                    <Calendar formik={formik} />
                    <div>
                        <button type="submit" className="bookingbtn">RESERVAR</button>
                    </div>
                </div>
                <p className="disclaimertxt">* Reservas están sujetas a disponibilidad y confirmación.</p><br></br>
            </form>
        </div>
    )
}

export default BookingModule 
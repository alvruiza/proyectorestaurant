import { Fragment } from "react"
import {dataBase} from "../config/firebase"
import toast, {Toaster} from "react-hot-toast"
import {collection, addDoc} from "firebase/firestore"
import {useFormik} from "formik"
import Navbar from "../components/Navbar"
import Jumbotron from "../components/Jumbotron"
import Calendar from "../components/Calendar"
import { bookingSchema } from "../Validations/Validation"
import "./Reserva.css"
import Footer from "../components/Footer"

const Reserva = () => {    

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
        <Fragment>
            <Navbar />
            <Jumbotron />
            <div className="container-fluid">
                <h1 className="bookingh1">RESERVAS</h1>
                <Toaster
                position="bottom-center"
                reverseOrder={false}
                />
                <div className="row justify-content-center imgrow">
                    <div className="col-lg-6 col-md-6 col-xs-12 imgcol">
                        <img src="https://i.postimg.cc/vBTh0JMw/Dise-o-sin-t-tulo-2022-09-26-T114729-584.png" alt="" className="tableimg" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12 calendarcol">
                        <form action="" onSubmit={formik.handleSubmit} className="guestdiv" autoComplete="off">
                        <div >                            
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
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Reserva
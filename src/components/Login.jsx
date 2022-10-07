import './Login.css'
import { useFormik } from 'formik'
import {userSchema} from '../Validations/Validation'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { Toaster, toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Login = () =>{

    const auth = getAuth()

    const onSubmit = async (values, actions) => {
        try{
            await signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential)=>{
                const user = userCredential.user
            })
        }catch(error){
            toast('Acceso denegado, solicita credenciales al administrador!',
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
           
      actions.formReset()
    }
    
    
    const {values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues:{
            email:'',
            password:'',
        },
        validationSchema: userSchema,
        onSubmit,
    })
    


    return(
            <div className="container-fluid">
                <Toaster />
                <div className="row justify-content-center">
                    <div className="col-lg-2 col-md-4 col-xs-8 logincol">
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className="logodiv">
                                <img src="https://i.postimg.cc/90q2gSc9/Sin-t-tulo-831-513-px.png" alt="logo" className="loginlogo"></img>
                            </div>
                            <div className="logindiv">
                                <input type="email" name="email" id="email" placeholder="email" className="logininput" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                                {errors.email && touched.email && <p className='loginerror'>{errors.email}</p>}
                                <input type="password" name='password' id='password' placeholder="password"className="logininput" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                                {errors.password && touched.password && <p className='loginerror'>{errors.password}</p>}
                            </div>
                            <div className="buttondiv">
                                <button type='submit' className='accessbtn'>entrar</button>
                            </div>
                        </form>
                        <div className="homebtndiv">
                            <button className="homebtn"><Link to={"/"} className="nav-link homelink">Volver</Link></button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Login
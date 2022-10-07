import { Fragment } from "react"
import Login from "../components/Login"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import Personal from "./Personal";

const Intranet = () => {

    const [access, setAccess] = useState(false)

    const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAccess(true)
                const uid = user.uid;
            } else {
                setAccess(false)
            }
        });

    console.log("hola")    

    return(
        <Fragment>
           {access === false ? <Login /> : <Personal />}
        </Fragment>
    )
}

export default Intranet
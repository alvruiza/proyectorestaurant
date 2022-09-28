import { Fragment } from "react"
import "./Calendar.css"

const Calendar = (props) => {

    const {formik} = props

    
    return(
        <Fragment>
            <div className="container-fluid">
                <div className="row justify-content-center daterow">
                    <div className="col-lg-6 col-md-6 col-xs-12 datediv">
                        <input value={formik.values.date} type="date" name="date" className="dateinput" onChange={formik.handleChange}></input>
                        {formik.errors.date && formik.touched.date ? <p className="dateError">{formik.errors.date}</p> : ""} 
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12 timediv">
                        <input value={formik.values.time} type="time" name="time" className="timeinput" onChange={formik.handleChange}></input>
                        {formik.errors.time && formik.touched.time ? <p className="dateError">{formik.errors.time}</p> : ""} 
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Calendar
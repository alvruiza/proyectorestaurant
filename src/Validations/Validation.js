import * as yup from "yup"

const phoneRegex = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/

const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

export const bookingSchema = yup.object().shape({
    name: yup.string().min(3, "Nombre debe tener más de 3 letras").required("Este campo es obligatorio"),
    phone: yup.string().matches(phoneRegex, {message: "No parece un número válido, recuerda partir con +56"}).required("Este campo es obligatorio"),
    date: yup.string().required("Este campo es obligatorio"),
    time: yup.string().required("Este campo es obligatorio")  
})

const userSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(5).matches(passRegex, {message: "por favor utiliza una constraseña más segura"}).required("Este campo es obligatorio"),
    confirmPass: yup.string().oneOf([yup.ref("password"), null], "no coincide con tu contraseña").required("Este campo es obligatorio")
})

export default userSchema 
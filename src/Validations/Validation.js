import * as yup from "yup"

const phoneRegex = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/

const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

export const bookingSchema = yup.object().shape({
    name: yup.string().min(3, "Nombre debe tener más de 3 letras").required("Este campo es obligatorio"),
    phone: yup.string().matches(phoneRegex, {message: "No parece un número válido, recuerda partir con +56"}).required("Este campo es obligatorio"),
    date: yup.string().required("Este campo es obligatorio"),
    time: yup.string().required("Este campo es obligatorio")  
})

export const userSchema = yup.object().shape({
    email: yup.string().email("por favor ingresa un email válido").required("Este campo es obligatorio"),
    password: yup.string().min(8, "mínimo 8 caracteres").matches(passRegex, {message: "usa letras mayúscula y minúscula, numeros y simbolo"}).required("Este campo es obligatorio"),
})


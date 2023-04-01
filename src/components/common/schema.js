/* eslint-disable no-unused-vars */
import * as yup from "yup"

const {object,string,number}= yup

export const loginSchema =object({
        email:string().required("Email is required. "),
        password: string().required("Password is required. ")
    })

export const registerSchema = object({
        email:string().required('Email is required. '),
        password:string().required('Password is required. '),
        name:string().required('Name is required. ')
    })

export const profileSchema=object({
    email: string().required('Email is required. '),
    age:number().required('Age is required. ').typeError('Age is required. '),
    name:string().required('name is required. ')
})



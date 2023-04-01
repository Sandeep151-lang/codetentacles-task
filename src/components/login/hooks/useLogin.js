
import axios from 'axios'
import {  toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import React ,{useContext, useState} from 'react'
import LoginContext from '../../context/Context';

const useLogin =()=>{
     const value = useContext(LoginContext)
    console.log("fsfsf",value)
    const {setUserData, userData} = value
let navigate = useNavigate();
const onSubmit=async(values)=>{
try {
    const res =await axios.post('https://reqres.in/api/login',values) 
    if (res) {
        
        toast('Login Successful')
        localStorage.setItem('token',res.data.token)
         setUserData(values.email)
        navigate('/user/timer')
    }
} catch (error) {
    toast(error.response.data.error)
}
}

return {
        onSubmit,
    }
}

export default useLogin
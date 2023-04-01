/* eslint-disable no-empty-pattern */

import axios from 'axios'
import React , {useState} from 'react'
import {  toast } from 'react-toastify';


const useRegister = ({}) => {
    const [token, setToken]= useState([])
    const onSubmit=async(values)=>{
        try {
     const res= await  axios.post('https://reqres.in/api/register',values)
     if(res){
       toast('Register Successful') 
     }   
        } catch (error) {
          toast(error.response.data.error,{theme:"light"})      
        }   
    }
  return {
    onSubmit,
    token
  }
}

export default useRegister

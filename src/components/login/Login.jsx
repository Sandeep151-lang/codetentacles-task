/* eslint-disable no-unused-vars */
import React from 'react'
import Input from '../../widgets/Input'
import Button from '../../widgets/Button'
import {loginSchema} from '../common/schema'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useLogin from './hooks/useLogin'
import {useNavigate} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';



const Login = () => {
  let navigate = useNavigate();
  const defaultValue={
    email:undefined,
    password: undefined,
  }
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode:'onTouched',
    reValidateMode:'onChange',
    defaultValue,
   resolver:yupResolver(loginSchema)
  });


  const {onSubmit,userData} = useLogin()

  return (
    <div className='card container mt-5 cards' style={{width:"30%"}}>
    <p className="mt-3">Login</p>
    <div className="container my-4">
      <form>
      <Input label="Email" placeholder="Enter email"
      mandatory
      type="email" 
      className="form-control"
      rest={register("email")} 
      error={errors?.email?.message }  
      values={watch('email')} 
      onChange={(event)=>{setValue('email',event.target.value)}}/>

      <Input label="Password" placeholder="Enter password" 
      className="form-control"
      mandatory
      type="password"
      rest={register("password")}  error={errors?.password?.message }
      values={watch('password')} onChange={(event)=>{setValue('password',event.target.value)}}/>
      <Button title="Login" className="mt-4 mx-3 px-5 btn-success" onClick={handleSubmit(onSubmit)} />
      <Button title="Register" className="mt-4 mx-3 px-5 btn-primary" onClick={()=>navigate("/register")}/>
      <ToastContainer />
      </form>
      </div>
    </div>
  )
}

export default Login
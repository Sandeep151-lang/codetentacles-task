/* eslint-disable no-unused-vars */
import React from 'react'
import Input from '../../widgets/Input'
import Button from '../../widgets/Button'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useRegister from './hooks/useRegister'
import {registerSchema} from '../common/schema'
import {useNavigate} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

const Register = () => {
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
    mode:'onSumbit',
    reValidateMode:'onChange',
    defaultValue,
   resolver:yupResolver(registerSchema)
  });

const {onSubmit} = useRegister({})
 

  return (
    <div className='card container mt-5 cards' style={{width:"30%"}}>
    <p className="mt-2">Register</p>
   <div className="container my-4">
      <form>
      <Input label="Name" className="form-control" mandatory placeholder="Enter name" rest={register("name")} error={errors?.name?.message }  values={watch('name')} onChange={(event)=>{setValue('name',event.target.value)}}/>
      <Input label="Email" className="form-control" mandatory type="email" placeholder="Enter email" rest={register("email")} error={errors?.email?.message} values={watch('email')} onChange={(event) => { setValue('email', event.target.value) }} />
      <Input label="Password" mandatory className="form-control" type="password" placeholder="Enter password" rest={register("password")}  error={errors?.password?.message } values={watch('password')} onChange={(event)=>{setValue('password',event.target.value)}}/>
      <Button title="Register" className="mt-4 mx-4 px-4 btn-primary" onClick={handleSubmit(onSubmit)} />
      <Button title="Back To Login" className="mt-4 mx-4 px-4 btn-danger" onClick={()=>navigate("/")}/>
      <ToastContainer />
      </form>
      </div>
    </div>
  )
}

export default Register
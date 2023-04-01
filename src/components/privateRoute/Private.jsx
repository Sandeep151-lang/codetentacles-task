import React,{useContext} from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const Private = () => {
    const user = localStorage.getItem('token')
 return user ? <Outlet/> : <Navigate to={"/"}/>
}

export default Private
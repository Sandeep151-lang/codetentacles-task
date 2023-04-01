import React, { useEffect, useState,useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import LoginContext from '../context/Context';


const Timer = () => {
  const {userData,setUserData} = useContext(LoginContext)
  let navigate = useNavigate();
  const [login, SetLogin]= useState()
  const [seconds, setSeconds]= useState(60)

  const checkForInactivity=()=>{
      const expireTime = localStorage.getItem('expireTime')
          if(expireTime < Date.now()){
            SetLogin("Log out")
            console.log("Log out") 
            setSeconds(60)
            setUserData()
            localStorage.removeItem('token')
            navigate('/')
          }
  } 

  const updateExpireTime = ()=>{
      const expireTime = Date.now() + 60000;
      console.log("time",expireTime)
      setSeconds(seconds-1)
      localStorage.setItem("expireTime",expireTime)
  }

  useEffect(()=>{
      const interval  = setInterval(()=>{
          checkForInactivity();
        
      },1000);
      return ()=> clearInterval(interval)
  },[])

  useEffect(()=>{
    const timer  = setInterval(()=>{

      setSeconds(seconds-1) 
      if(seconds===0){
        return setSeconds(0)
      }
    },1000);
    return ()=> clearInterval(timer)
})

  useEffect(() => {
    // initiate the event handler
    window.addEventListener("mousemove", updateExpireTime);

    // this will clean up the event every time the component is re-rendered
    return () => window.removeEventListener("mousemove", updateExpireTime);
  },[]);

  return (
    <div>
      {userData && <h1>Email : {userData}</h1>}
      {login && <p>{login}</p>}
      <h1>{`Your Loged out in ${seconds} seconds`}</h1>
     
    </div>

  )
}

export default Timer
import React, { useState } from 'react'

const AppContext = () => {
    const [userData,setUserData] = useState()
  return {
    userData,
    setUserData
  }
}

export default AppContext
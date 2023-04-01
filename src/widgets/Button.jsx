import React from 'react'

const Button = ({title,onClick,className,...rest}) => {
  return (
    <>
   {title && <button className={`${className} btn` } onClick={onClick}>{title}</button>}
   </>
  )
}

export default Button
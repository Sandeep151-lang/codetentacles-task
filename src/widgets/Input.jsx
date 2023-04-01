import React from 'react'

const Input = ({label,className,values,placeholder,id,error,type,clearErrors,mandatory,...rest}) => {
  return (
    <div className="container py-2">
   {label && <label className="font-weight-bold my-1" for="lname" style={{marginRight:"90%"}}>{label}{mandatory && <span className="text-danger">*</span>}</label>} 
    <input type={type} id={id} value={values} name="fname" placeholder={placeholder} className={className} {...rest}/>
    {error && <span className="text-danger" style={{marginRight:"50%"}} color="red">{error}</span>}
    </div>

  )
}

export default Input
import React from 'react'

const Selective = ({name,label,placeholder,options,control,error,required=false}:SelectFieldProps) => {
  return (
    <div className='space-y-2'>
        <label htmlFor={name} className='form-label'>{label}</label>
    </div>
  )
}

export default Selective
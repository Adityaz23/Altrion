import React from 'react'
import { useForm } from 'react-hook-form'

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState:{errors, isSubmitting},
  } = useForm<SignUpFormData>()
  const onSubmit = (data) => console.log(data);
  
  return (
   <>
   <h1>Sign Up & Personalize.</h1>
   </>
  )
}

export default SignUpPage
import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword ,createUserdb} from '../../utils/firebase/firebase.util'
import FormInput from '../form-input/FormInput.component'
import Button from '../button-type/Button.component'
const fields={
  displayName:'',
  email:'',
  password:'',
  confirmPassword:''

}

const SignUp = () => {
  const [formFields,setFormFields]=useState(fields);
  const { displayName, email, password, confirmPassword } = formFields;


  
   const changeHander=(event)=>{
    const {name,value}=event.target;

    setFormFields({...formFields,[name]:value});
  }
  console.log(formFields);

  const submitHandler=async(event)=>{
    event.preventDefault();
    
    if(!password==confirmPassword)
    {
      alert("incorrect password")
    }
    try{
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      const userDocRef = await createUserdb(user,{displayName})
    
      setFormFields(fields);
    }catch(error)
    {
      console.log("error in signing up",error);
    }
    

  }



  return (
    <div className='flex flex-col w-1/3'>
        <h2 className='my-10'>Dont have an account</h2>
        <span>Sign Up Using Email and Password</span>
        <form onSubmit={submitHandler}>
           <FormInput 
            label="Display Name"
          required type='text' onChange={changeHander} name='displayName' value={displayName}
           />
        <FormInput
          label="Email"
          required type='email' onChange={changeHander} name='email' value={email}
        />

        <FormInput
          label="Password"
          required type='password' onChange={changeHander} name='password' value={password}
        />
        <FormInput
          label="Confirm Password"
          required type='password' onChange={changeHander} name='confirmPassword' value={confirmPassword}
        />
        <Button text="Sign in" buttontype="" type="submit" />
        </form>
    </div>
  )
}

export default SignUp
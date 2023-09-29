import React from 'react'
import { signinwithGooglepopup, signinAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.util";
import FormInput from '../form-input/FormInput.component'
import Button from '../button-type/Button.component'
import { useState } from "react";

const signinfields = {

    email: '',
    password: '',


}

const Signin = () => {
    const [signInFormFields, setSignInFormFields] = useState(signinfields);
    const { email, password } = signInFormFields;
   

    const changeHander = (event) => {
        const { name, value } = event.target;

        setSignInFormFields({ ...signInFormFields, [name]: value });
    }



    const submitHandler = async (event) => {
        event.preventDefault();


        try {

        await signinAuthUserWithEmailAndPassword(email, password)
         
           
            setSignInFormFields(signinfields);
           
        } catch (error) {
            console.log("error signing in ", error)

        }


    }


    const signinHandler = async () => {
         await signinwithGooglepopup();
      
      
    }
  return (
      <div className='flex flex-col w-380'>
          <h1 className=' text-lg mt-10 font-bold'>Already have an account ?</h1>
          <span>Sign in Using Email and Password</span>

          <form onSubmit={submitHandler}>
              <FormInput
                  label="Email"
                  required type='email' onChange={changeHander} name='email' value={email}
              />

              <FormInput
                  label="Password"
                  required type='password' onChange={changeHander} name='password' value={password}
              />
          



          <div className="grid grid-cols-2 gap-2">
              <Button text="Sign in" type="submit"  />
              <Button type="button" text="Sign in with Google" buttontype="google" onClick={signinHandler} />
          </div>
          </form>


      </div>
   
  )
}

export default Signin
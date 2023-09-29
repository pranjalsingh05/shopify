



import SignUp from "../../components/sign-up/SignUp.component";
import Signin from "../../components/signin-form/Signin.component";


const SignIn=()=>{
    


   



      
   return(
        <div className="grid grid-cols-2 gap-20 p-10" >
             <Signin />
            
           <div  >
               <SignUp />
            </div>
            
           
        </div>
    )
}
export default SignIn;
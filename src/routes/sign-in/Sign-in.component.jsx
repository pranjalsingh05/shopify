
import { createUserdb, signinwithGooglepopup } from "../../utils/firebase/firebase.util";

import SignUp from "../../components/sign-up/SignUp.component";

const SignIn=()=>{
    const signinHandler= async()=>
    {
        const {user}=await signinwithGooglepopup();
        const userDocRef = await createUserdb(user)
    }

      
   return(
        <div >
            <div>
               <button onClick={signinHandler}>Sign In</button>
            </div>
            
            <div>
               <SignUp />
            </div>
            
           
        </div>
    )
}
export default SignIn;
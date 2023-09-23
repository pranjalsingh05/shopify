
import { createUserdb, signinwithGooglepopup } from "../../utils/firebase/firebase.util";

const SignIn=()=>{
    const signinHandler= async()=>
    {
        const {user}=await signinwithGooglepopup();
        const userDocRef = await createUserdb(user)
    }

      
   return(
        <div >
        
            <button onClick={signinHandler}>Sign In</button>
           
        </div>
    )
}
export default SignIn;
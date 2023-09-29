import { createContext ,useState,useEffect} from "react"
import {  createUserdb, onAuthUserstatechange } from "../utils/firebase/firebase.util";


export  const UserContext=createContext({
    currUser: null,
    setCurrentUser:()=>null

})
export const  UserProvider=({children})=>{
   const[currUser,setCurrentUser]=useState(null);
   const value={currUser,setCurrentUser};

   useEffect(()=>{
    
        const unsubscribe =onAuthUserstatechange((user)=>{
           
            console.log(user);
            if(user)
            {
                createUserdb(user);
            }
            setCurrentUser(user);

        });
       return unsubscribe;

    } ,[]
   )

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}
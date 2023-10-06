
import { initializeApp } from "firebase/app";
import {
     getAuth, 
     signInWithPopup, 
     GoogleAuthProvider, 
     signInWithRedirect ,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged
    } from "firebase/auth"
import{ getFirestore,doc,getDoc,setDoc,collection,writeBatch,getDocs,query} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyB5OljtlgPUFD6098gjyGCN3pMqpxIArFE",
    authDomain: "shopify-db-630a3.firebaseapp.com",
    projectId: "shopify-db-630a3",
    storageBucket: "shopify-db-630a3.appspot.com",
    messagingSenderId: "998256142142",
    appId: "1:998256142142:web:b457670180924e6a3e2e6f"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const firbaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export  const signinwithGooglepopup=()=>signInWithPopup(auth ,provider);
export  const signinwithredirect =()=>signInWithRedirect(auth ,provider);


export const db=getFirestore();

export const addCollectionAndDocuments=async(collectionKey,objectsToAdd)=>{
    const collectionRef=collection(db,collectionKey);
    const batch=writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef=doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object)
        
    });
   await batch.commit();
    console.log('done');
}



  export const getCollectionsAndDocuments=async()=>{
    const collectionRef=collection(db,'categories');
    const q=query(collectionRef);
    console.log("query is :"+ q)
    const snapshot=await getDocs(q);
    console.log(snapshot)
    const categoriesMap=snapshot.docs.reduce((acc,docSnapshot)=>{
        const {title,items}=docSnapshot.data();
        acc[title.toLowerCase()]=items;
        return acc;
    },{})
    return categoriesMap;

  }




export const createUserdb=async(userAuth,additionalInfo={})=>{
    const userdbRef=doc(db ,'users' ,userAuth.uid);
    console.log(userdbRef);
    const snapshot=await getDoc(userdbRef);
    if(!snapshot.exists())
    {
        const {displayName, email }=userAuth;
        const createdAt= new Date();


        try{
            await setDoc(userdbRef,
                {
                    displayName,
                    email,
                    createdAt,
                    ...additionalInfo
                });

        }catch(error)
        {
                console.log("error creating user", error.message);
        }
    }
    return userdbRef;

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signinAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthUserstatechange=(callback)=>onAuthStateChanged(auth,callback);

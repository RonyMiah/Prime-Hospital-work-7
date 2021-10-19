import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged   } from "firebase/auth";
import { useState,useEffect } from "react";
import initializeAuthontication from "../Pages/Firebase/Firebase.init";



initializeAuthontication();



const useFirebase = ()=>{

    const auth = getAuth();
    
    const [user, setUser]= useState({});
    const [loading, setLoading]=useState(true);

  const signInUsingGoogle =() =>{
      setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth,googleProvider)
    .then(result =>{
        setUser(result.user);
    }).finally(()=>setLoading(false))
    ;
  }

  useEffect( ()=>{
       
   const unsubscribed = onAuthStateChanged(auth,(user)=>{
        if (user) {
            setUser(user) 
          } 
        else {
            setUser({})
          }
          setLoading(false);
          
    });
    return () => unsubscribed;
  } ,[])

  const logOut = ()=>{
      setLoading(true);
    signOut(auth)
    .then(() => { })
    .finally(()=>setLoading(false))
    ;
  }

    return{
            user,
            signInUsingGoogle,
            logOut,
            loading
    }
}
export default useFirebase;
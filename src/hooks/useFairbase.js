import { useEffect, useState } from "react";

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut,updateProfile,signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import fairbaseInit from "../pages/login/Fairbase/fairbase.init";


//init fairbase
fairbaseInit();

const useFairbase = () => {
    const [user, setUser] = useState({});
    const [loding,setLoding] =useState(true);

    const auth = getAuth();


    //user Regustion
    const regustion = (email, password, name) => {
        setLoding(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)

                displayName(name)

            })
            .catch((error) => {
                console.log(error.message)
            })
            .finally(()=>setLoding(false));

    }

   

    //user Login
    const logInUser = (email,password,location,history)=>{
        setLoding(true)
        signInWithEmailAndPassword(auth,email,password)
        .then(()=>{
            const distanition = location?.state?.from || "/"
            history.replace(distanition)

        })
        .catch((error)=>{
            console.log(error.message)
        })
        .finally(()=>setLoding(false))
    }


    //displayName
    const displayName = (name)=>{
        updateProfile(auth.currentUser,{
            displayName:name
        })
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    //user Logout
    const logOut = () => {
        setLoding(true);
        signOut(auth)
            .then(() => {

            })
            .catch((error) => {
                console.log(error.message)
            })
            .finally(()=>setLoding(false));
    }

    //user state
    useEffect(() => {
        const unscript = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoding(false);
        });

        return () => unscript;
    }, [])

    return {
        user,
        regustion,
        logOut,
        logInUser,
        loding,
    }

}

export default useFairbase;
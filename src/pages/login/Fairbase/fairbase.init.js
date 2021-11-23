import { initializeApp } from "firebase/app";
import firebaseConfig from "./fairbase.config";

const fairbaseInit = ()=>{
    initializeApp(firebaseConfig);
}

export default fairbaseInit;
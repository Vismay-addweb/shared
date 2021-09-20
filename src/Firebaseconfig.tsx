// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMfEetD9X2BOc9aTFXotZNy5fWeqwpBjU",
  authDomain: "react-83818.firebaseapp.com",
  databaseURL: "https://react-83818-default-rtdb.firebaseio.com",
  projectId: "react-83818",
  storageBucket: "react-83818.appspot.com",
  messagingSenderId: "236342407758",
  appId: "1:236342407758:web:57aae08e1c77417993c91f",
  measurementId: "G-MCM0T0YHW6"
};

// admin.initializeApp({
//     credential: admin.credential.applicationDefault(),
//     databaseURL: 'https://react-83818-default-rtdb.firebaseio.com'
// });

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log()
// const analytics = getAnalytics(app);
const db = getFirestore(app);
db.toJSON()
export async function getD(db:any){
    const data = collection(db,'data');
    return data;
}

const Config = () =>
{
    console.log(db)
    console.log(getD(db))
    return(
        <>

        </>
    )
}

export default Config
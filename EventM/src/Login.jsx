import { useState } from 'react'
import { Link } from 'react-router-dom';
import {auth} from './firebase.jsx'
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const [userName, setUserName] = useState("")
    const [passWord, setPassWord] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            //FIREBASE AUTHENTICATION 
            App.auth().signInWithEmailAndPassword(userName, passWord)
            console.log("successfully logged in")

        }
        catch(error)
            {
                console.log(error)
            }

    }
    return (
        <>
            <form className="login_Signup" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label for="userName">Username/Email</label><br/>
                <input type="text" id="userName" className="userName" onChange= {(e) => setUserName(e.target.value)}></input><br/>
                <label for="password">Password</label><br/>
                <input type="text" id="password" className="password" onChange= {(e) => setPassWord(e.target.value)}></input><br/>
                <br></br>
                <button type='submit'>Login</button>
                <p>Don't have an Account?<Link to="/Signup">Sign Up</Link></p>
            </form>
            
        </>
    );
        
}

export default Login
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from './firebase.jsx'; // Ensure db is imported
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

function Signup() {
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // FIREBASE AUTHENTICATION 
            await createUserWithEmailAndPassword(auth, userName, passWord);
            const user = auth.currentUser;
            console.log(user);
            console.log("Account Created");
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    FirstName: fname,
                    LastName: lname
                });
                navigate('/'); // Redirect to login page after successful signup
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form className="login_Signup" onSubmit={handleSubmit}>
                <h2>Signup</h2>
                <label htmlFor="fname">First Name</label><br/>
                <input type="text" id="fname" className="fname" onChange={(e) => setFname(e.target.value)}></input><br/>
                <label htmlFor="lname">Last Name</label><br/>
                <input type="text" id="lname" className="lname" onChange={(e) => setLname(e.target.value)}></input><br/>
                <label htmlFor="userName">Username/Email</label><br/>
                <input type="text" id="userName" className="userName" onChange={(e) => setUserName(e.target.value)}></input><br/>
                <label htmlFor="password">Create Password</label><br/>
                <input type="password" id="password" className="password" onChange={(e) => setPassWord(e.target.value)}></input><br/>
                <br></br>
                <button type='submit'>Signup</button>
            </form>
        </>
    );
}

export default Signup;
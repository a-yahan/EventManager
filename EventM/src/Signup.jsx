import { useState } from 'react'


function Signup() {
    const [userName, setUserName] = useState("")
    const [passWord, setPassWord] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            //FIREBASE AUTHENTICATION 

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
                <label for="fname">First Name</label><br/>
                <input type="text" id="fname" className="fname" onChange= {(e) => setFname(e.target.value)}></input><br/>
                <label for="lname">Last Name</label><br/>
                <input type="text" id="lname" className="lname" onChange= {(e) => setLname(e.target.value)}></input><br/>
                <label for="userName">Username/Email</label><br/>
                <input type="text" id="userName" className="userName" onChange= {(e) => setUserName(e.target.value)}></input><br/>
                <label for="password">Create Password</label><br/>
                <input type="text" id="password" className="password" onChange= {(e) => setPassWord(e.target.value)}></input><br/>
                <br></br>
                <button type='submit'>Signup</button>
            </form>
            
        </>
    );
        
}

export default Signup
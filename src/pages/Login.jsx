import React from 'react'
import {auth} from '../utils/firebase'
import { useState } from 'react'
import { signInWithEmailAndPassword , signInWithPopup , GoogleAuthProvider } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


export default function Login() {
    // to get the password and email from the input zone    
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    // google provider
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();


    const handleEmailLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth , email , password);
            navigate("/dashboard")
            alert("Login Effettuato")
        }
        catch(error) {
            alert(error.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth , provider);
            navigate("/dashboard")
            alert("Login Effettuato")
        }
        catch(error) {
            alert(error.message)
        }
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleEmailLogin}>
                <input type="email" placeholder='Insert your email' value={email} onChange={(e) => setEmail(e.target.value) }/>
                <input type="password" placeholder='Insert your password' value={password} onChange={(e) => setPassword(e.target.value) }/>
                <button type='submit'>Login</button>
            </form>
            <button onClick={handleGoogleLogin}>Accedi Con Google</button>
        </div>
    )
}

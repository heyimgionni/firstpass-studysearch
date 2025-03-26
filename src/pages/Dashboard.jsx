import React from 'react'
// useNavigate funziona come Link ma si usa nelle funzioni , utile quando gestiamo Login Sign Up etc
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';


export default function Dashboard() {

    const {user , logout} = useAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        await logout();
        navigate("/")
    }


    return (
        <div>
            <h1>Welcome, {user?.email}</h1>
            <p>Choose a tool</p>
            <button onClick={handleLogOut}>LogOut</button>
        </div>
    )
}

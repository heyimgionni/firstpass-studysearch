import React from 'react'
import { BrowserRouter as Router , Routes , Route , Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import { useAuth } from './context/AuthContext';


const PrivateRoute = ({children}) => {
  const {user} = useAuth();
  return user ? children : <Navigate to="/" />
}

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

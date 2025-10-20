// ==================== IMPORTS ====================
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import your page components
import Login from './components/auth/Login'
import Signup from './components/auth/SignUp'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'


// ==================== APP COMPONENT ====================
function App(){

  // const [isAuthenticated, setIsAuthenticated] = useState(false) //Authentication State 
  // const [showLogin, setShowLogin] = useState(true) //Showing Login State 
  // const [user, setUser] = useState(null) //Setting User State 

  // useEffect(() =>{
  //   const token = localStorage.getItem('authToken')
  //     if (token)try {
  //       const res = fetch('api/auth/verify', {
  //         headers: { Authorization: 'Bearer ' + token }
  //       })

  //       if (res.ok){
  //         userData = await res.json()
  //         setUser(userData)
  //         setIsAuthenticated(true)
  //       } else {

  //       }
  //     } catch {

  //     } finally{

  //     }
  // }, [])


  return (

    <div>
    <SignupPage></SignupPage>

    </div>


  )
  
}


export default App

// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/login" element={<LoginPage />} />
//     <Route path="/signup" element={<SignupPage />} />
//     <Route path="/dashboard" element={<DashboardPage />} />
//   </Routes>
// </BrowserRouter>
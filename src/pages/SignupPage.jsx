import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import SignUp from "../components/auth/SignUp";
import logo from "../assets/images/flik-logo-blue.png"

const SignupPage = () => {
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)





  return (
    <div className="page-container">
      <div className="auth-page-layout flex flex-col">

          <div className="auth-header flex flex-row">
            <img 
              src={logo} 
              className="h-35 w-auto" 
              alt="Flikt"             
            />

            <div>
              <h3 className="text-3xl mt-10"> Welcome to Flikt </h3>
              <p className="text-md"> 
              Sign In or Sign Up to Use the Application              
              </p>

            </div>
          </div>

          <SignUp></SignUp>
      </div>

    </div>
  )
}

export default SignupPage;
import React, { useState } from 'react'
import Input from '../common/Input'
// Demo Component to show Input in action

function SignUp () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleEmailBlur = () => {
    if (email && !email.includes('@')) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Demo form submitted')
  }

  return (
    <div className="min-h-screen bg-[#EBF4FF] p-10 rounded-4xl">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-12">
        <h1 className="text-3xl font-bold text-[#121212] mb-6">
          Sign Up to Use Flikt
        </h1>

        <p className='text-sm text- mb-5 text-[#003EC0] font-semibold'>
          Welcome to Flikd, the Social Media Movie List Application. At this time, we are only working with email sign ins while we continue to work to intergrate Google and Apple Sign In Authentication. 
        </p>
        
        <div className="space-y-2 p-4">
          {/* Text Input */}
          <Input
            label="Full Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />

          {/* Email Input with Validation */}
          <Input
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setEmailError('')
            }}
            onBlur={handleEmailBlur}
            placeholder="you@example.com"
            error={emailError}
            required
          />

          {/* Password Input with Toggle */}
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />

          {/* Password Input with Toggle */}
          <Input
            label="Confirm Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-[#003EC0] text-white py-3 rounded-lg font-semibold hover:bg-[#002A80] transition-colors mt-6"
          >
          Sign Up Now 🔏
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp; 
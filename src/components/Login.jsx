import React from 'react'
import { useContext } from 'react'
import { GlobleContext } from '../context/AuthContext'


function Login() {
  const { LogIn } = useContext(GlobleContext)

  return (
    <div>
    <div>   
        <button onClick={LogIn}>SIGN UP</button>
    </div>   
    <h1>User Can login Here</h1>      
    <div>
        <div>         
            <input type='text' placeholder='Name' />
        </div>
        <div>    
            <input type='text' placeholder='Email' />
        </div>
        <div>    
            <input type='text' placeholder='password' />
        </div>   
        <button>Login</button>
    </div>      
    </div>
    )
    
}

export default Login
import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Info() {
  return (
    <div>Info
        <div>         
            <input type='text' placeholder='first Name' />
          </div>
          <div>    
            <input type='text' placeholder='last Name' />
          </div> 
        <div>    
            <input type='text' placeholder='Email' />
        </div>
        <div>    
            <input type='text' placeholder='password' />
          </div>   
        <div>    
            <input type='text' placeholder='phone No' />
        </div>     
        <button><Link to='register'>Register</Link></button>
        <Outlet/>  
    </div>
  )
}

export default Info
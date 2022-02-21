import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import style from './design.module.css'

function Info() {
  return (
    <div className={style.box}>Info
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
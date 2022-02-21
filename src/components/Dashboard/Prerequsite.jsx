import React from 'react'
import {Link, Outlet} from 'react-router-dom'
function Prerequsite() {
  return (
      <div>Prerequsite
             <div>
            <input type='checkbox' />
            <label>Can you attend 90% of the classess</label>
        </div>
        <div>
            <input type='checkbox' />
            <label>Do you have a laptop?</label>
        </div>
        <button><Link to='info'>CONTINUE</Link></button>  
        <Outlet/>  
    </div>
  )
}

export default Prerequsite
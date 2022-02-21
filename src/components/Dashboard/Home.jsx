import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobleContext } from '../../context/AuthContext'
import style from './design.module.css'

function Home() {
  const {LogOut} = useContext(GlobleContext)
  return (
    <div className={style.navbar}>
      <Link to='prerequsite'>Prerequsite</Link>
      <button onClick={LogOut}>LogOut</button>    
    </div>
  )
}
export default Home;

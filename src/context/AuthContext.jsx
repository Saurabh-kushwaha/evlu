import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const GlobleContext = createContext();

function AuthContext({ children }) {
    const [isLogedIn, setIsLogedIn] = useState(false);
    const LogIn = () => {
        setIsLogedIn(true);
    }
    const LogOut = () => {
        setIsLogedIn(false);
    }
    return (
    <GlobleContext.Provider value={{isLogedIn, LogIn, LogOut}}>
      {children}      
    </GlobleContext.Provider>
  )
}
export default AuthContext
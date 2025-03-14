import React, { useState, createContext, useEffect } from 'react';

export const LoginContext = createContext(null);

function LoginProvider({ children }) {
  const [login, setLogin] = useState(() => {
    const storedLogin = localStorage.getItem('login');
    if (storedLogin) {
      return JSON.parse(storedLogin);
    } else {
      return {};
    }
  });

  useEffect(() => {
    console.log(":::::",login);
    
  }, [login])
  

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [drop, setDrop] = useState(false);

  useEffect(() => {
   setAuth(localStorage.getItem(localStorage.setItem("fullname", "authToken", "phone", "email")));
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, drop, setDrop }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

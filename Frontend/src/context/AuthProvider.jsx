import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [drop, setDrop] = useState(false);
  const OTP = Math.floor(Math.random() * 9000 + 1000)
  return (
    <AuthContext.Provider value={{ auth, setAuth, drop, setDrop, OTP }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

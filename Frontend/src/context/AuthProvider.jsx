import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [drop, setDrop] = useState(false);
  return (
    <AuthContext.Provider value={{ auth, setAuth, drop, setDrop }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

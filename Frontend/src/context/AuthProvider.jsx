import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const fullname = localStorage.getItem("fullname");
    const phone = localStorage.getItem("phone");
    const email = localStorage.getItem("email");

    if (token && fullname) {
      setAuth({ token, fullname, phone, email });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, drop, setDrop }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

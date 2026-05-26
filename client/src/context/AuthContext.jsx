import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getCurrentUser,
} from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );

  const [loading, setLoading] = useState(true);


  // LOAD CURRENT USER
  useEffect(() => {

    const loadUser = async () => {

      if (!token) {
        setLoading(false);
        return;
      }

      try {

        const userData =
          await getCurrentUser(token);

        setUser(userData);

      } catch (error) {

        console.log(error);

        logout();

      } finally {

        setLoading(false);

      }

    };

    loadUser();

  }, [token]);


  // LOGIN
  const login = (userData) => {

    localStorage.setItem(
      "token",
      userData.token
    );

    setToken(userData.token);

    setUser(userData);

  };


  // LOGOUT
  const logout = () => {

    localStorage.removeItem("token");

    setToken(null);

    setUser(null);

  };


  return (

    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        loading,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

};


export const useAuth = () =>
  useContext(AuthContext);
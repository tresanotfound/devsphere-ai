import { Navigate } from 'react-router-dom';

function AuthRoute({ children }) {

  /* TEMP AUTH */

  const isAuthenticated = false;

  return !isAuthenticated
    ? children
    : <Navigate to="/dashboard" />;
}

export default AuthRoute;
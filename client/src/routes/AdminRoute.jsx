import { Navigate } from 'react-router-dom';

function AdminRoute({ children }) {

  /* TEMP ADMIN */

  const isAdmin = true;

  return isAdmin
    ? children
    : <Navigate to="/unauthorized" />;
}

export default AdminRoute;
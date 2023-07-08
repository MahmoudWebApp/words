import { Navigate } from 'react-router-dom';


export const ProtectedAdminRoute = ({ children }: any) => {
  if (isAdmin()) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
};



// eslint-disable-next-line react-refresh/only-export-components
export const isAdmin = (): boolean => {
  if (localStorage.getItem("token") || sessionStorage.getItem("token"))
    return true;
  return false;
}

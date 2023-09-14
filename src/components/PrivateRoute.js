import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ children, ...routp }) => {
  const p = false;
  if (!p) {
    return <Redirect to="/signin" />;
  }

  return <Route {...routp}>{children}</Route>;
};

// export default PrivateRoute;

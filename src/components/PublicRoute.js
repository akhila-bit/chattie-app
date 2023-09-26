import { Navigate, Redirect, Route } from 'react-router-dom';
import { useProfile } from '../context/profile.context';
import { Container, Loader } from 'rsuite';
import Signin from '../pages/Signin';
// import { Outlet } from 'react-router-dom';

export const PublicRoute = ({ children, ...routp }) => {
  const { profile, isLoding } = useProfile();

  if (isLoding && profile) {
    return (
      <Container>
        <Loader center vertical size="md" content="Loding" speed="slow" />
      </Container>
    );
  }
  if (!isLoding && profile) {
    return <Redirect to="/" />;
  }
  return <Route {...routp}>{children}</Route>;
};

// export default PublicRoute;

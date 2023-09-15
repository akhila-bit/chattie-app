import { Redirect, Route } from 'react-router-dom';
import { useProfile } from '../context/profile.context';
import { Container, Loader } from 'rsuite';

export const PrivateRoute = ({ children, ...routp }) => {
  const { profile, isLoding } = useProfile();
  if (!profile && isLoding) {
    return (
      <Container>
        <Loader center vertical size="md" content="Loding" speed="slow" />
      </Container>
    );
  }

  if (!profile && !isLoding) {
    return <Redirect to="/signin" />;
  }

  return <Route {...routp}>{children}</Route>;
};

// export default PrivateRoute;

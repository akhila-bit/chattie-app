import { Switch } from 'react-router-dom';

import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';

import {PrivateRoute} from './components/PrivateRoute';
import {PublicRoute} from './components/PublicRoute';
import Signin from './pages/Signin';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { ProfileProvider } from './context/profile.context';

function App() {
  return (
    <ProfileProvider >
      <Switch>
        <PublicRoute path="/signin">
          <Signin />
        </PublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
      </ProfileProvider>    
  );
}

export default App;

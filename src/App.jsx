import { Switch } from 'react-router-dom';

import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';

import {PrivateRoute} from './components/PrivateRoute';
import {PublicRoute} from './components/PublicRoute';
import Signin from './pages/Signin';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <Switch>
        <PublicRoute path="/signin">
          <Signin />
        </PublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
  );
}

export default App;

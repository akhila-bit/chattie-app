// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<BrowserRouter><App /></BrowserRouter>);
//  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root'));
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
         <App />
    </BrowserRouter>

);

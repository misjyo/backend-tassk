import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './components/ContextProvider/Context';
import { BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Addemployee from './components/employee/Addemployee';
import { Viewemployee } from './components/employee/Viewemployee';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <BrowserRouter>
      <App />
      {/* <Addemployee/> */}
      {/* <Viewemployee/> */}
      
      
    </BrowserRouter>
  </Context>

);


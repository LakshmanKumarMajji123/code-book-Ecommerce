import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';


import { FilterProvider } from './context';
import { ScrollToTop } from './components';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <ScrollToTop />
        <ToastContainer closeButton={false} autoClose={3000} position={"bottom-right"} />  {/**we pass properties to change the positions also... */}
        <App />
      </FilterProvider>
    </Router>
  </React.StrictMode>
);



import React from 'react';
import Routes from './routes/index';
import { AuthProvider } from './contexts/auth';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

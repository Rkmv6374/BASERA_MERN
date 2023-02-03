import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContext, AuthContextProvider } from './pages/context/AuthContex';
import { SearchContextProvider } from './pages/context/SearchContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthContextProvider>
  <SearchContextProvider>
    <App />
  </SearchContextProvider>
  </AuthContextProvider>
  </React.StrictMode>
);

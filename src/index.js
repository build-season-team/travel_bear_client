import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './store/authContext/AuthProvider';
import ShortletProvider from './store/shortletContext/ShortletProvider';
import AdminProvider from './store/adminContext/AdminProvider';
import TransactionProvider from './store/transactionContext/TransactionProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ShortletProvider>
        <TransactionProvider >
          <AdminProvider>
            <App />
          </AdminProvider>
        </TransactionProvider>
      </ShortletProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

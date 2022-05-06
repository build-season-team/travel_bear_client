import { useContext, useEffect } from 'react';
import './App.css';
import { AuthContext } from './store/authContext/AuthProvider';
import { LOGIN_SUCCESS } from './constants/actionTypes';
import AppRouter from './router/AppRouter';


function App() {

  const { authDispatch, authState: { isLoggedIn } } = useContext(AuthContext);
  const token = localStorage.getItem('token');
  const getUser = () => {
    if(!isLoggedIn && token) {
      if(token !== 'undefined') {
        const user = JSON.parse(localStorage.getItem("user"));
        authDispatch({
          type: LOGIN_SUCCESS,
          payload: user
        })
      }
    }
  }

  useEffect(() => {
    getUser();
  },[isLoggedIn])

  
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}



export default App;

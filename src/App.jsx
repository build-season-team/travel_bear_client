import { useContext } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import SignUp from './pages/authentication/sign-up';
import Login from './pages/authentication/login';
import LandingPage from './pages/landingPage';
import ErrorPage from './components/UI/404page'
import { AuthContext } from './store/authContext/AuthProvider';





function App() {

  const {authState: {isloggedIn}} = useContext(AuthContext);
  
  return (
    <div className="App">
      
      <Router >
        <Routes>
          <Route path='/' element={<LandingPage />} />
          { <Route path='/signup' element={<SignUp />} />}
          <Route path='/login' element={<Login />} />
           <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

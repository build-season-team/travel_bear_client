import { useContext } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';

import SignUp from './pages/authentication/sign-up';
import Login from './pages/authentication/login';
import LandingPage from './pages/landingPage/Index';
import ErrorPage from './components/UI/404page';
import UploadShortlet from './pages/UploadShortlet/UploadShortlet'
import { AuthContext } from './store/authContext/AuthProvider';
import SearchPage from './pages/SearchPage/search';

import Dashboard from './pages/Dashboard';


function App() {


  
  return (
    <div className="App">

      
      <Router >
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<SearchPage />} />
          <Route path='/upload' element={<ProtectedRoutes ><UploadShortlet /></ProtectedRoutes>} />
          <Route path='/dashboard/:route' element={<Dashboard />} />
          <Route path='/dashboard/:route/:sub' element={<Dashboard />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

const ProtectedRoutes = ({children}) => {
  const { authState: { isLoggedIn } } = useContext(AuthContext);
  console.log(isLoggedIn)

  if(!isLoggedIn) {

    return (
      <Navigate to="/login" />
    )
  }
  return children;

}

export default App;

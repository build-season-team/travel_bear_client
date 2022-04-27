import { useContext } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';

import SignUp from './pages/authentication/sign-up';
import Login from './pages/authentication/login';
import LandingPage from './pages/landingPage/Index';
import ErrorPage from './components/UI/404page';
import UploadShortlet from './pages/UploadShortlet/UploadShortlet'
import { AuthContext } from './store/authContext/AuthProvider';

import Dashboard from './pages/Dashboard';
import ConfirmPost from './pages/ConfirmPost/ConfirmPost'
import Terms from './pages/T&C/Terms';
import Home from './pages/Dashboard/screens/Home/Home';
import Wallet from './pages/Dashboard/screens/Wallet/Wallet';
import Shortlets from './pages/Dashboard/screens/Shortlets/Shortlets';


function App() {


  
  return (
    <div className="App">

      
      <Router >
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/login' element={<Login />} />
          <Route path='/upload' element={<UploadShortlet />} />

              {/* Dashboard Routing */}
          <Route path="/dashboard" element={<Dashboard />} >
            <Route index path="/dashboard/" element={<Home />} />
            <Route index path="/dashboard/wallet" element={<Wallet />} />
            <Route index path="/dashboard/shortlets" element={<Shortlets />} />
          </Route>
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

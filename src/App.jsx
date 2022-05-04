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
import Terms from './pages/T&C/Terms';
import Home from './pages/Dashboard/screens/Home/Home';
import Wallet from './pages/Dashboard/screens/Wallet/Wallet';
import Shortlets from './pages/Dashboard/screens/Shortlets/Shortlets';
import Search from './pages/SearchPage/search';
import ReservationPage from './pages/ReservationPage/ReservationPage';
import Booking from './pages/BookingPage/Booking'

// admin Dashboard pages

import VerificationPage from './pages/Dashboard/screens/VerificationPage/VerificationPage'
import Withdrawal from './pages/Dashboard/screens/Withdrawal/Withdrawal';
import Modal from './components/UI/Modal/Modal';
import Button from './components/UI/Button';

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
          <Route path='/shortlets' element={<Search />} />

{/* modal test */}
          <Route path='/modal' element={ <Modal heading='gdhdj' description='Sjisddf' checkOut date='Wed, 13 Apr 2022' addBtn={ <Button primary authBtn name='Confirm' /> } locationSummary select selectLabel='Check-in' houseLocation='dfjdjdfjdjfkjkdfjkdjjjjd' duration durationLabel='Duration' /> } />


          <Route path='/reservation-page' element={<ReservationPage/>} />

            {/* Booking */}
          <Route path='/booking-page' element={ <Booking/> } />

              {/* Dashboard Routing */}
          <Route path="/dashboard" element={<Dashboard />} >
            <Route index path="/dashboard/" element={<Home />} />
            <Route  path="/dashboard/wallet" element={<Wallet />} />
            <Route  path="/dashboard/shortlets" element={<Shortlets />} />          
            <Route path="/dashboard/verification" element={ <VerificationPage />} />
            <Route path="/dashboard/withdrawal" element={<Withdrawal />} />
          </Route>

            {/* Nested route for the admin screens */}
          {/* <Route path='/dashboard/admin' element={<VerificationPage />} >           */}
          {/* </Route> */}

            

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

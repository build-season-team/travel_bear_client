import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import SignUp from '../pages/authentication/sign-up';
import Login from '../pages/authentication/login';
import LandingPage from '../pages/landingPage/Index';
import ErrorPage from '../components/UI/404page';
import UploadShortlet from '../pages/UploadShortlet/UploadShortlet'
import SearchPage from '../pages/SearchPage/search';
import Dashboard from '../pages/Dashboard';
import Terms from '../pages/T&C/Terms';
import Home from '../pages/Dashboard/screens/Home/Home';
import Wallet from '../pages/Dashboard/screens/Wallet/Wallet';
import Shortlets from '../pages/Dashboard/screens/Shortlets/Shortlets';
import Search from '../pages/SearchPage/search';
import ReservationPage from '../pages/ReservationPage/ReservationPage';
import Booking from '../pages/BookingPage/Booking'
import { AuthContext } from '../store/authContext/AuthProvider';
import VerificationPage from '../pages/Dashboard/screens/VerificationPage/VerificationPage'
import Withdrawal from '../pages/Dashboard/screens/Withdrawal/Withdrawal';
import Button from '../components/UI/Button';
import ModalReview from '../pages/Dashboard/components/ModalReview/ModalReview';
import DropDown from '../components/UI/DropDown/DropDown';

const AppRouter = () => {

    const { authDispatch, authState: { isLoggedIn, user } } = useContext(AuthContext);

  return (
    <>
        <Router >
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/drop' element={ <DropDown/> } />
                <Route path='/modal' element={<ModalReview ratingCard heading='Did you enjoy your stay?' description='fdfdf' addBtn={<Button primary authBtn name='Submit' />} />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/terms' element={<Terms />} />
                <Route path='/login' element={<Login />} />
                <Route path='/upload' element={<UploadShortlet />} />
                <Route path='/shortlets' element={<Search />} />

                <Route path='/reservation' element={<ReservationPage />} />

                {/* Booking */}
                <Route path='/booking/:houseID' element={<Booking />} />

                {/* Dashboard Routing */}
                  <Route path="/dashboard" element={<ProtectedRoutes ><Dashboard /></ProtectedRoutes>} >
                    <Route index path="/dashboard/" element={<Home user={user} />} />
                    <Route path="/dashboard/wallet" element={<Wallet user={user} />} />
                    <Route path="/dashboard/shortlets" element={<Shortlets />} />
                      <Route path="/dashboard/verification" element={<RestrictedRoutes ><VerificationPage /></RestrictedRoutes> } />
                      <Route path="/dashboard/withdrawal" element={<RestrictedRoutes><Withdrawal /></RestrictedRoutes> } />
                </Route>
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    </>
  )
}

const ProtectedRoutes = ({ children }) => {
    const { authState: { isLoggedIn } } = useContext(AuthContext);

    if (isLoggedIn) {

        return (
            <Navigate to="/login" />
        )
    }
    return children;

}

const LandlordRoutes = ({ children }) => {
    const { authState: { user } } = useContext(AuthContext);

    if (user.role !== 'user') {

        return (
            <Navigate to="/login" />
        )
    }
    return children;

}

const RestrictedRoutes = ({ children }) => {
    const { authState: { user } } = useContext(AuthContext);

    if (user.role !== 'admin') {

        return (
            <Navigate to="/" />
        )
    }
    return children;

}

export default AppRouter
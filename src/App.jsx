import { useContext } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/UI/Header/index';
import Footer from './components/UI/Footer';
import HeroSection from './components/UI/HeroSection/HeroSection';
import SearchBar from './components/UI/SearchBar/SearchBar';
import Update from './components/Update/update';
import Nav from './components/UI/Header/nav';
import SignUp from './pages/authentication/sign-up';
import Login from './pages/authentication/login';
import ShortletCard from './components/UI/ShortletCard';
import LandingPage from './pages/landingPage';
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;

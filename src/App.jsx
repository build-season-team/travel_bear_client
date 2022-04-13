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




function App() {
  return (
    <div className="App">
      
      <Router >
        <Routes>
          <Route path='/nav' element={<div>
            <Header />
            <HeroSection />
            <SearchBar />
            <ShortletCard />
             <Footer />
             <Update />
          </div> } />
          <Route path='/' element={<div>hello world</div>} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

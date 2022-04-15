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
import UploadShortlet from './pages/UploadShortlet/ConfirmUpload'
import FileUpload from './components/UI/FileUpload/FileUpload';
import ShortletCard from './components/UI/ShortletCard';
import { AuthContext } from './store/authContext/AuthProvider';
import ConfirmPost from './pages/ConfirmPost/ConfirmPost';
import SubHeader from './pages/Dashboard/components/Header/Header'
import SideBar from './pages/Dashboard/components/SideBar/SideBar'



function App() {

  const {authState: {isloggedIn}} = useContext(AuthContext);
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
          { <Route path='/signup' element={<SignUp />} />}
          <Route path='/login' element={<Login />} />
          <Route path='/upload' element={<UploadShortlet />} />
          <Route path='/file' element={<FileUpload/>} />
          <Route path='/confirm-post' element={<ConfirmPost/>} />
          <Route path='sub-header' element={<SubHeader/>} />
          <Route path='sidebar' element={<SideBar/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

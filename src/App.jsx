import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import SignUp from './pages/authentication/sign-up';
import Login from './pages/authentication/login';
import LandingPage from './pages/landingPage/Index';
import ErrorPage from './components/UI/404page';
import UploadShortlet from './pages/UploadShortlet/UploadShortlet'
import FileUpload from './components/UI/FileUpload/FileUpload';
import ShortletCard from './components/UI/ShortletCard';
import { AuthContext } from './store/authContext/AuthProvider';

import Dashboard from './pages/Dashboard';
import ConfirmPost from './pages/ConfirmPost/ConfirmPost'


function App() {

  
  return (
    <div className="App">

      
      <Router >
        <Routes>
          <Route path='/' element={<LandingPage />} />
          { <Route path='/signup' element={<SignUp />} />}
          <Route path='/login' element={<Login />} />
           <Route path='*' element={<ErrorPage />} />
          
          <Route path='/' element={<div>hello world</div>} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/upload' element={<UploadShortlet />} />
          <Route path='confirm' element={ <ConfirmPost/> } />

          {/* Dashboard Routing */}
          <Route path="/dashboard/:route" element={<Dashboard />} />
        <Route path="/dashboard/:route/:sub" element={<Dashboard />} />
        <Route path='/upload_input' element={<FileUpload />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

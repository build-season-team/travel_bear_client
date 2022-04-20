import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import SignUp from './pages/authentication/sign-up';
import Login from './pages/authentication/login';
import LandingPage from './pages/landingPage/Index';
import ErrorPage from './components/UI/404page';
<<<<<<< HEAD
import FormInput from './components/UI/FormInput/Index';
import Sidebar from './components/Sidebar/index'
=======
import UploadShortlet from './pages/UploadShortlet/UploadShortlet'
import FileUpload from './components/UI/FileUpload/FileUpload';
import ShortletCard from './components/UI/ShortletCard';
import { AuthContext } from './store/authContext/AuthProvider';

import Dashboard from './pages/Dashboard';
import ConfirmPost from './pages/ConfirmPost/ConfirmPost'

>>>>>>> 495c4e196970af4b7fa16b3538fe8fd9b1bf65b5

function App() {

  
  return (
    <div className="App">

      
      <Router >
        <Routes>
<<<<<<< HEAD
          <Route path='/components' element={<div>
            <Button name='primary' primary    />
            <br></br> <br></br>
            <Button name='secondary' secondary/>
             <br></br> <br></br>
            <Button name='danger' danger  />
             <br></br> <br></br>
            <Button name='dark' dark icon={DollarIcon} iconPosition='left' />
             <br></br> <br></br>
             <Toast emoji={'😱'} success />
             <Divider />
             <br></br> <br></br>
             <ShortletCard  />
            
            </div>}></Route>
            <Route path='/404' element={<ErrorPage />}></Route>
            <Route path='/Sidebar' element={<Sidebar/>}></Route>
=======
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
>>>>>>> 495c4e196970af4b7fa16b3538fe8fd9b1bf65b5
        </Routes>
      </Router>
    </div>
  );
}

export default App;

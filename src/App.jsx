import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Update from './components/Update/update';
import Login from './pages/authentication/login'
import SignUp from './pages/authentication/sign-up';




function App() {
  return (
    <div className="App">
      
      <Router >
        <Routes>
          <Route path='/' element={<div>hello world</div>} />
          <Route path='/update' element={<Update />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

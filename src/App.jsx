import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Update from './components/Update/update';
import SignUp from './pages/authentication/sign-up';
import Header from './components/UI/Header'



function App() {
  return (
    <div className="App">
      
      <Router >
        <Routes>
          <Route path='/' element={<div>hello world</div>} />
          <Route path='/update' element={<Update />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/nav' element={<Header/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

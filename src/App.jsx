import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/UI/Header/index';
import Update from './components/Update/update';
import LandingPage from './pages/landingPage/Index';



function App() {
  return (
    <div className="App">
      
      <Router >
        <Routes>
          <Route path='/landing' element={< LandingPage />} />
          <Route path='/' element={<div>hello world</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

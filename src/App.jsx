import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Button from './components/UI/Button';

import WhyUs from './components/WhyUs/WhyUs.jsx'

import FormInput from './components/UI/FormInput/Index';
import Select from './components/UI/Select/select'
import Update from './components/Update/update'
import Header from './components/UI/Header/index'


import DollarIcon from './assets/icons/dollar-circle.svg';
import Toast from './components/UI/Toast';
import Divider from './components/UI/Divider';
import ShortletCard from './components/UI/ShortletCard';


function App() {
  return (
    <div className="App">
      
      <Router >
        <Routes>
          <Route path='/' element={<div>hello world</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

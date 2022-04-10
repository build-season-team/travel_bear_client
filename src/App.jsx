import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Button from './components/UI/Button';
import SearchBar from './components/UI/SearchBar/SearchBar';

import WhyUs from './components/WhyUs/WhyUs.jsx'

import FormInput from './components/UI/FormInput/Index';
import Select from './components/UI/Select/select'
import Update from './components/Update/update'
import Header from './components/UI/Header/index'

import HeroSection from './components/UI/HeroSection/HeroSection'


import DollarIcon from './assets/images/dollar-circle.svg';
import Toast from './components/UI/Toast';
import Divider from './components/UI/Divider';
import ShortletCard from './components/UI/ShortletCard';
import FooterWrap from './components/UI/Footer';


function App() {
  return (
    <div className="App">
      
      

      {/* <Header /> */}
      <HeroSection />
      <SearchBar/>

      {/* <FooterWrap /> */}
      
    </div>
  );
}

export default App;

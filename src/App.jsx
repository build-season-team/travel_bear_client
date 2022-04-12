import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/UI/Header/index';
import Footer from './components/UI/Footer';
import HeroSection from './components/UI/HeroSection/HeroSection';
import SearchBar from './components/UI/SearchBar/SearchBar';
import Update from './components/Update/update';
import Nav from './components/UI/Header/nav';




function App() {
  return (
    <div className="App">
      
      <Router >
        <Routes>
          <Route path='/nav' element={<div>
            <Header />
            <HeroSection />
            <SearchBar />
             {/* <Footer /> */}
             <Update />
          </div> } />
          <Route path='/' element={<div>hello world</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Button from './components/UI/Button';
import FormInput from './components/UI/FormInput/Index';
import Header from './components/UI/Header/index'

import CheckMark from './assets/icons/check-mark.svg'
import HeroSection from './components/UI/HeroSection/HeroSection';

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path='/components' element={<div>
            <Button name='primary' primary link='/about'  />
            <br></br> <br></br>
            <Button name='secondary' secondary/>
             <br></br> <br></br>
            <Button name='danger' danger  />
             <br></br> <br></br>
            <Button name='dark' dark />
             <br></br> <br></br>
            
            </div>}></Route>
            <Route path='/input' element={ <div> 
      
              
              <FormInput type='text' placeholder={'Enter details'} /> 
              </div>  } > </Route> 

            <Route path='/header' element={ <Header/> } success ></Route>
            <Route path='/' element={ <HeroSection/> } success ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

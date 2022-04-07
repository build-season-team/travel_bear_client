import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Button from './components/UI/Button';

import WhyUs from './components/WhyUs/WhyUs.jsx'

import FormInput from './components/UI/FormInput/Index';


import DollarIcon from './assets/images/dollar-circle.svg';
import Toast from './components/UI/Toast';
import Divider from './components/UI/Divider';
import ShortletCard from './components/UI/ShortletCard';


function App() {
  return (
    <div className="App">
      
      <Router >
        <Routes>
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
<<<<<<< HEAD
            
            <Route path='/input' element={ <div> 
              <FormInput type='password' placeholder={'enter password'}  children />
              <br />
              <FormInput label={'Password'} type='text' disabled={true} placeholder={'enter password'}  />
              <br />
              <FormInput type='text' required={true} placeholder={'enter number'} text={'Ensure you enter correct details!!!'} />
              <FormInput type='date' placeholder={'enter password'}  />
            </div>  } > </Route>
            <Route path='/whyus' element={<WhyUs />}></Route>
=======
>>>>>>> 8d7a3805958052303f0f22fcdaf5ba7e5fa9443f
        </Routes>
      </Router>
    </div>
  );
}

export default App;

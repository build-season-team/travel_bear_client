import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Button from './components/UI/Button';
import FormInput from './components/UI/FormInput/Index';

import CheckMark from './assets/icons/check-mark.svg'

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
              <FormInput type='password' placeholder={'enter password'}  children />
              <br />
              <FormInput label={'Password'} type='text' disabled={true} placeholder={'enter password'}  />
              <br />
              <FormInput type='text' required={true} placeholder={'enter number'} text={'Ensure you enter correct details!!!'} />
              <FormInput type='date' placeholder={'enter password'}  />
            </div>  } > </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

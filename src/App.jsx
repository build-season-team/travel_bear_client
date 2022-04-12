import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Button from './components/UI/Button';
import DollarIcon from './assets/images/dollar-circle.svg';
import Toast from './components/UI/Toast';
import Divider from './components/UI/Divider';
import ShortletCard from './components/UI/ShortletCard';
import ErrorPage from './components/UI/404page';
import FormInput from './components/UI/FormInput/Index';

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
            <Route path='/404' element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Button from './components/UI/Button';
import SearchBar from './components/UI/SearchBar/SearchBar';

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
            <Route path='/search' element={ <SearchBar /> } ></Route>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;

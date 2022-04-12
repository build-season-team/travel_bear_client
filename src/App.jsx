import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Update from './components/Update/update';




function App() {
  return (
    <div className="App">
      
      <Router >
        <Routes>
          <Route path='/' element={<div>hello world</div>} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

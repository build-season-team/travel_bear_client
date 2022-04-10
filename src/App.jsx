import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';



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

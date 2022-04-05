import './App.css';
import ViewShortlet from './components/viewShortlet';
import { Avatar, Image } from '@chakra-ui/react'
import Footer from './components/UI/footer'
import ButtonComp from './components/UI/ButtonComp';
import SearchComponent from './components/searchComponent.jsx'

import Icon from './assets/icons/eye.svg'

function App() {
  return (
    <div className="App">
      {/* <ViewShortlet /> */}
        {/* <Footer />       */}
        <SearchComponent/>
    </div>
  );
}

export default App;

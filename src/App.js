import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Profile from './Components/Profile.js';
import Skills from './Components/Skills.js';
import Experience from './Components/Experience.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

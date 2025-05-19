import React from 'react';
import './App.css';
import FirstPart from './components/FirstPart.jsx';
import MainStructure from './components/MainStructure.jsx';
import SecondPart from './components/SecondPart.jsx';
import ThirdPart from './components/ThirdPart.jsx';
import FourthPart from './components/FourthPart.jsx';
import FifthPart from './components/FifthPart.jsx';
import SixthPart from './components/SixthPart.jsx';
import SeventhPart from './components/SeventhPart.jsx';
// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <div className="App">
      <MainStructure />
      <FirstPart />
      <SecondPart />
      <ThirdPart />
      <FourthPart />
      <FifthPart />
      <SixthPart />
      <SeventhPart />
    </div>
  );
}

export default App;

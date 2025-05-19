import React from 'react';
import './App.css';
import FirstPart from './components/FirstPart';
import MainStructure from './components/MainStructure';
import SecondPart from './components/SecondPart';
import ThirdPart from './components/ThirdPart';
import FourthPart from './components/FourthPart';
import FifthPart from './components/FifthPart';
import SixthPart from './components/SixthPart';
import SeventhPart from './components/SeventhPart';
// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

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

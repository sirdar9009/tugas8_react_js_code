import React from 'react';

import './App.css';
import './css/bootstrap.min.css';
import Atas from './komponen/Atas';
import Isi from './komponen/Isi';
import Bawah from './komponen/Bawah';



function App() {
  return (
    <div>
      <Atas/>
      <Isi/><br/>
      <Bawah/>
    </div>
  );
}

export default App;

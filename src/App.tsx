import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Naming from './components/naming/Naming';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/compounds/naming' element={<Naming />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

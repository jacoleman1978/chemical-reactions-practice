import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Naming from './components/naming/Naming';
import Formulas from './components/formulas/Formulas';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/compounds/naming' element={<Naming />}/>
          <Route path='/compounds/formulas' element={<Formulas />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

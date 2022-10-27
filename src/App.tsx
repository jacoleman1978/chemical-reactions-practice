import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import PracticeType from './components/common/PracticeType';
import BalancingEquations from './components/balancing-equations/BalancingEquations';
import ReactionTypes from './components/reaction-types/ReactionTypes';
import PredictingProducts from './components/predicting-products/PredictingProducts';
import NavMenu from './components/nav/NavMenu';
import Naming from './components/naming/Naming';
import IonicNames from './components/naming/IonicNames';
import AcidicNames from './components/naming/AcidicNames';
import MolecularNames from './components/naming/MolecularNames';
import MixedNames from './components/naming/MixedNames';
import IonicFormulas from './components/formulas/IonicFormulas';
import AcidicFormulas from './components/formulas/AcidicFormulas';
import MolecularFormulas from './components/formulas/MolecularFormulas';
import MixedFormulas from './components/formulas/MixedFormulas';

function App() {
  let { pathname } = useLocation();
  let pathParts: string[] = pathname.split("/");
  pathParts.shift();

  return (
    <div className="App">
      <NavMenu path={pathParts} />
        <Routes>
          <Route path='/' element={<PracticeType type="home" />} /> 
          <Route path='/compounds/naming/ionic' element={<IonicNames />} />
          <Route path='/compounds/naming/acids' element={<AcidicNames />} />
          <Route path='/compounds/naming/molecular' element={<MolecularNames />} />
          <Route path='/compounds/naming/mixed' element={<MixedNames />} />
          <Route path='/compounds/naming' element={<Naming />} />
          <Route path='/compounds/formulas/ionic' element={<IonicFormulas />} />
          <Route path='/compounds/formulas/acids' element={<AcidicFormulas />} />
          <Route path='/compounds/formulas/molecular' element={<MolecularFormulas />} />
          <Route path='/compounds/formulas/mixed' element={<MixedFormulas />} />
          <Route path='/balancing' element={<BalancingEquations />} />
          <Route path='/reactiontypes' element={<ReactionTypes />} />
          <Route path='/predictingproducts' element={<PredictingProducts />} />
        </Routes>

    </div>
  );
}

export default App;

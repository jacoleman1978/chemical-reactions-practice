import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import NavMenu from './components/nav/NavMenu';
import PracticeType from './components/common/PracticeType';
import CompoundDescriptions from './components/common/CompoundDescriptions';
import NamingPractice from './components/naming/NamingPractice';
import FormulasPractice from './components/formulas/FormulasPractice';
import BalancingEquations from './components/balancing-equations/BalancingEquations';
import ReactionTypes from './components/reaction-types/ReactionTypes';
import PredictingProducts from './components/predicting-products/PredictingProducts';

function App() {
  let { pathname } = useLocation();
  
  return (
    <div className="App flex-center-center flex-column">
      <NavMenu path={pathname.substring(1)} />
        <Routes>
          <Route path='/' element={<PracticeType />} /> 
          <Route path='/naming' element={<CompoundDescriptions />} />
          <Route path='/naming/ionic/main' element={<NamingPractice type={"ionic-main"} />} />
          <Route path='/naming/ionic/transition' element={<NamingPractice type={"ionic-transition"} />} />
          <Route path='/naming/ionic/polyatomic' element={<NamingPractice type={"ionic-polyatomic"} />} />
          <Route path='/naming/ionic/mixed' element={<NamingPractice type={"ionic-mixed"} />} />
          <Route path='/naming/acids' element={<NamingPractice type={"acids"} />} />
          <Route path='/naming/molecular' element={<NamingPractice type={"molecular"} />} />
          <Route path='/naming/mixed' element={<NamingPractice type={"mixed"} />} />
          <Route path='/formulas' element={<CompoundDescriptions />} />
          <Route path='/formulas/ionic/main' element={<FormulasPractice type={"ionic-main"} />} />
          <Route path='/formulas/ionic/transition' element={<FormulasPractice type={"ionic-transition"} />} />
          <Route path='/formulas/ionic/polyatomic' element={<FormulasPractice type={"ionic-polyatomic"} />} />
          <Route path='/formulas/ionic/mixed' element={<FormulasPractice type={"ionic-mixed"} />} />
          <Route path='/formulas/acids' element={<FormulasPractice type={"acids"} />} />
          <Route path='/formulas/molecular' element={<FormulasPractice type={"molecular"} />} />
          <Route path='/formulas/mixed' element={<FormulasPractice type={"mixed"} />} />
          <Route path='/balancing' element={<BalancingEquations />} />
          <Route path='/reaction-types' element={<ReactionTypes />} />
          <Route path='/predicting-products' element={<PredictingProducts />} />
        </Routes>

    </div>
  );
}

export default App;

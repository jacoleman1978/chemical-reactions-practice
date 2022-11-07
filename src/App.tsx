import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import NavMenus from './components/nav/NavMenus';
import PracticeTypes from './components/common/PracticeTypes';
import CompoundDescriptions from './components/compounds/CompoundDescriptions';
import CompoundsPractice from './components/compounds/CompoundsPractice';
import BalancingEquations from './components/balancing-equations/BalancingEquations';
import ReactionTypes from './components/reaction-types/ReactionTypes';
import PredictingProducts from './components/predicting-products/PredictingProducts';
import { Type, PracticeType } from './components/common/configurations/types';

function App() {
  let { pathname } = useLocation();
  const practiceType = pathname.split("/")[1] as PracticeType;

  return (
    <div className="App">
      <NavMenus practiceType={practiceType} />
      <div className="flex-left-center full-width">
        <Routes>
          <Route path='/' element={<PracticeTypes />} /> 
          <Route path='/naming' element={<CompoundDescriptions />} />
          <Route path='/naming/ionic/main' element={<CompoundsPractice type={"ionic-main" as Type} practiceType={practiceType} />} />
          <Route path='/naming/ionic/transition' element={<CompoundsPractice type={"ionic-transition" as Type} practiceType={practiceType} />} />
          <Route path='/naming/ionic/polyatomic' element={<CompoundsPractice type={"ionic-polyatomic" as Type} practiceType={practiceType} />} />
          <Route path='/naming/ionic/mixed' element={<CompoundsPractice type={"ionic-mixed" as Type} practiceType={practiceType} />} />
          <Route path='/naming/acids' element={<CompoundsPractice type={"acids"} practiceType={practiceType} />} />
          <Route path='/naming/molecular' element={<CompoundsPractice type={"molecular"} practiceType={practiceType} />} />
          <Route path='/naming/mixed' element={<CompoundsPractice type={"mixed"} practiceType={practiceType} />} />
          <Route path='/formulas' element={<CompoundDescriptions />} />
          <Route path='/formulas/ionic/main' element={<CompoundsPractice type={"ionic-main"} practiceType={practiceType} />} />
          <Route path='/formulas/ionic/transition' element={<CompoundsPractice type={"ionic-transition"} practiceType={practiceType} />} />
          <Route path='/formulas/ionic/polyatomic' element={<CompoundsPractice type={"ionic-polyatomic"} practiceType={practiceType} />} />
          <Route path='/formulas/ionic/mixed' element={<CompoundsPractice type={"ionic-mixed"} practiceType={practiceType} />} />
          <Route path='/formulas/acids' element={<CompoundsPractice type={"acids"} practiceType={practiceType} />} />
          <Route path='/formulas/molecular' element={<CompoundsPractice type={"molecular"} practiceType={practiceType} />} />
          <Route path='/formulas/mixed' element={<CompoundsPractice type={"mixed"} practiceType={practiceType} />} />
          <Route path='/balancing' element={<BalancingEquations />} />
          <Route path='/reaction-types' element={<ReactionTypes />} />
          <Route path='/predicting-products' element={<PredictingProducts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

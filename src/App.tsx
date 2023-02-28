import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import NavMenus from './components/nav/NavMenus';
import PracticeTypes from './components/common/PracticeTypes';
import CompoundDescriptions from './components/compounds/CompoundDescriptions';
import CompoundsPractice from './components/compounds/CompoundsPractice';
import BalancingPractice from './components/chemical-equations/BalancingPractice';
import ReactionTypesPractice from './components/chemical-equations/ReactionTypesPractice';
import PredictingProducts from './components/predicting-products/PredictingProducts';
import { PracticeType } from './components/common/configurations/commonTypes';
import { CompoundType } from './components/compounds/configurations/compoundTypes';

function App() {
  let { pathname } = useLocation();
  const practiceType = pathname.split("/")[1] as PracticeType;

  return (
    <>
      <header>
        <NavMenus practiceType={practiceType} />
      </header>
      
      <main className="flex-left-center full-width">
        <Routes>
          <Route path='/' element={<PracticeTypes />} /> 
          <Route path='/naming' element={<CompoundDescriptions />} />
          <Route path='/naming/ionic/main' element={<CompoundsPractice compoundType={"ionic-main" as CompoundType} practiceType={practiceType} />} />
          <Route path='/naming/ionic/transition' element={<CompoundsPractice compoundType={"ionic-transition" as CompoundType} practiceType={practiceType} />} />
          <Route path='/naming/ionic/polyatomic' element={<CompoundsPractice compoundType={"ionic-polyatomic" as CompoundType} practiceType={practiceType} />} />
          <Route path='/naming/ionic/mixed' element={<CompoundsPractice compoundType={"ionic-mixed" as CompoundType} practiceType={practiceType} />} />
          <Route path='/naming/acids' element={<CompoundsPractice compoundType={"acids"} practiceType={practiceType} />} />
          <Route path='/naming/molecular' element={<CompoundsPractice compoundType={"molecular"} practiceType={practiceType} />} />
          <Route path='/naming/mixed' element={<CompoundsPractice compoundType={"mixed"} practiceType={practiceType} />} />
          <Route path='/formulas' element={<CompoundDescriptions />} />
          <Route path='/formulas/ionic/main' element={<CompoundsPractice compoundType={"ionic-main"} practiceType={practiceType} />} />
          <Route path='/formulas/ionic/transition' element={<CompoundsPractice compoundType={"ionic-transition"} practiceType={practiceType} />} />
          <Route path='/formulas/ionic/polyatomic' element={<CompoundsPractice compoundType={"ionic-polyatomic"} practiceType={practiceType} />} />
          <Route path='/formulas/ionic/mixed' element={<CompoundsPractice compoundType={"ionic-mixed"} practiceType={practiceType} />} />
          <Route path='/formulas/acids' element={<CompoundsPractice compoundType={"acids"} practiceType={practiceType} />} />
          <Route path='/formulas/molecular' element={<CompoundsPractice compoundType={"molecular"} practiceType={practiceType} />} />
          <Route path='/formulas/mixed' element={<CompoundsPractice compoundType={"mixed"} practiceType={practiceType} />} />
          <Route path='/balancing' element={<BalancingPractice />} />
          <Route path='/reaction-types' element={<ReactionTypesPractice />} />
          <Route path='/predicting-products' element={<PredictingProducts />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

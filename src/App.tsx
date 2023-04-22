import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useLocation } from 'react-router-dom';
import NavMenus from './components/nav/NavMenus';
import PracticeTypes from './components/common/PracticeTypes';
import CompoundDescriptions from './components/compounds/CompoundDescriptions';
import CompoundsPractice from './components/compounds/CompoundsPractice';
import ChemicalEquationPractice from './components/chemical-equations/ChemicalEquationPractice';
import PredictingProducts from './components/predicting-products/PredictingProducts';
import QuizList from './components/quizzes/QuizList';
import { PracticeType } from './components/common/configurations/commonTypes';
import { CompoundType } from './components/compounds/configurations/compoundTypes';
import CompoundsQuiz from './components/quizzes/CompoundsQuiz';

function App() {
  let { pathname } = useLocation();
  const splitPath: string[] = pathname.split("/");
  const practiceType = splitPath[1] as PracticeType;

  let compoundType: CompoundType = "ionic-main";

  if (practiceType === "formulas" || practiceType === "naming") {
    compoundType = splitPath[2] as CompoundType;

  } else if (practiceType === "quiz") {
    compoundType = splitPath[3] as CompoundType;
  } 


  return (
    <>
      <header>
        <NavMenus practiceType={practiceType} />
      </header>
      
      <main className="flex-left-center full-width">
        <Routes>
          <Route path='/' element={<PracticeTypes />} /> 
          <Route path='/naming' element={<CompoundDescriptions />} />
          <Route path='/naming/:type' element={<CompoundsPractice compoundType={compoundType} practiceType={practiceType} />} />
          <Route path='/formulas' element={<CompoundDescriptions />} />
          <Route path='/formulas/:type' element={<CompoundsPractice compoundType={compoundType} practiceType={practiceType} />} />
          <Route path='/balancing' element={<ChemicalEquationPractice practiceType={practiceType} />} />
          <Route path='/reaction-types' element={<ChemicalEquationPractice practiceType={practiceType} />} />
          <Route path='/predicting-products' element={<PredictingProducts />} />
          <Route path='/quiz/list' element={<QuizList />} />
          <Route path='/quiz/naming/:type' element={<CompoundsQuiz practiceType={"naming"} compoundType={compoundType} />} />
          <Route path='/quiz/formulas/:type' element={<CompoundsQuiz practiceType={"formulas"} compoundType={compoundType} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

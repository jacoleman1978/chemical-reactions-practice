import Title from "../common/Title";

const QuizList = () => {
  return (
    <section className="full-width">
        <div className="flex-column flex-center-center">
            <Title title="Quizzes" />
            <div className="full-width">
                <h2 className="subtitle">Compound Formulas</h2>
                <ul>
                    <li><a href="/quiz/formulas/ionic-main">Ionic - Main Group, Binary</a></li>
                    <li><a href="/quiz/formulas/ionic-transition">Ionic - Transition Metals</a></li>
                    <li><a href="/quiz/formulas/ionic-polyatomic">Ionic - Polyatomic Ions</a></li>
                    <li><a href="/quiz/formulas/ionic-mixed">Ionic - Mixed</a></li>
                    <li><a href="/quiz/formulas/acids">Acids</a></li>
                    <li><a href="/quiz/formulas/molecular">Molecular</a></li>
                    <li><a href="/quiz/formulas/mixed">Mixed</a></li>
                </ul>

                <h2 className="subtitle">Compound Names</h2>
                <li><a href="/quiz/naming/ionic-main">Ionic - Main Group, Binary</a></li>
                    <li><a href="/quiz/naming/ionic-transition">Ionic - Transition Metals</a></li>
                    <li><a href="/quiz/naming/ionic-polyatomic">Ionic - Polyatomic Ions</a></li>
                    <li><a href="/quiz/naming/ionic-mixed">Ionic - Mixed</a></li>
                    <li><a href="/quiz/naming/acids">Acids</a></li>
                    <li><a href="/quiz/naming/molecular">Molecular</a></li>
                    <li><a href="/quiz/naming/mixed">Mixed</a></li>
                <h2 className="subtitle">Reaction Types</h2>
                <h2 className="subtitle">Balancing Equations</h2>
            </div>
        </div>
    </section>

  )
}
export default QuizList
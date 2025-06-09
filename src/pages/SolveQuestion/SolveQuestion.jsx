import styles from './SolveQuestion.module.css';

import Question from "./Question/Question";
import Solution from "./Solution/Solution";

function SolveQuestion() {
    return (
        <div className={`${styles.frame} page`}>
            <Question />
            <Solution />
        </div>
    );
}

export default SolveQuestion;
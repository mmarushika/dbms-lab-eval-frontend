import styles from './CodeInput.module.css';
import { useState } from 'react';
import Button from '../../../components/Button/Button';
import { apiSubmitSolution } from '../../../services/api';
function CodeInput() {
    const [solution, setSolution] = useState("");
    async function submit() {
        await apiSubmitSolution(solution);
    }
    async function run() {
        await apiSubmitSolution(solution);
    }
    function renderButtons() {
        return (
            <div className={styles.buttonPanel}>
                <Button name="Run" handler={submit} />
                <Button name="Submit" handler={run}></Button>
            </div>
        );
    }
    return (
        <div className={styles.frame}>
            {renderButtons()}
            <textarea name="solution" className={styles.code} 
                onChange={(e) => setSolution(e.target.value)} 
                placeholder='Enter your solution'></textarea>
        </div>
    )
}

export default CodeInput;
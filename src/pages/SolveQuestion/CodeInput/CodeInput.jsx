import styles from './CodeInput.module.css';
import { useState } from 'react';
import Button from '../../../components/Button/Button';
import { apiSubmitSolution } from '../../../services/api.mjs';
function CodeInput({submit}) {
    const [solution, setSolution] = useState("");
    
    function renderButtons() {
        return (
            <div className={styles.buttonPanel}>
                <Button name="Run" />
                <Button name="Submit" handler={() => {submit(solution)}}></Button>
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
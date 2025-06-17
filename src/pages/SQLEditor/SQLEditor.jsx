import styles from './SQLEditor.module.css';

import { useState } from 'react';
import CodeInput from './CodeInput/CodeInput';
import CodeOutput from './CodeOutput/CodeOutput';
import ButtonPanel from '../../components/ButtonPanel/ButtonPanel';

import { apiSubmitSolution } from '../../services/EvaluationApi';

function SQLEditor({questionId}) {
    const [solution, setSolution] = useState("");
    async function submit() {
        let data = {
            questionId : questionId,
            input : solution
        }
        await apiSubmitSolution(data);
    }
    function run() {
        console.log("Run")
    }
    return (
        <div className={`${styles.frame} page`}>
            <div className={styles.buttonPanel}>
                <ButtonPanel 
                    names={["Run", "Submit"]}
                    handlers={[run, submit ]}
                />
            </div>
            <div className="sub-heading">Input</div>
            <div className={styles.codeInput}>
                <CodeInput value={solution} setValue={setSolution}/>
            </div>
            <div className="sub-heading">Output</div>
            <div className={styles.codeOutput}>
                <CodeOutput />
            </div>
        </div>
    )
}

export default SQLEditor;
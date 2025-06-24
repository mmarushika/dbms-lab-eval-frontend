import styles from './SQLEditor.module.css';

import { useState, useContext } from 'react';
import CodeInput from './CodeInput/CodeInput';
import CodeOutput from './CodeOutput/CodeOutput';
import ButtonPanel from '../../components/ButtonPanel/ButtonPanel';
import { QuestionContext } from '../../context/QuestionContext';
import { useNavigate, useParams } from 'react-router';

import {
    apiSubmitSolution,
    apiEvaluateSolution
} from '../../services/StudentApi.mjs';

function SQLEditor({ solution, setSolution, setResult }) {
    const {
        task_id,
        question_id
    } = useParams();

    const {
        userId
    } = useContext(QuestionContext);

    const navigate = useNavigate();
    async function submit() {
        let data = {
            userId: userId,
            taskId: task_id,
            questionId: question_id,
            input: solution
        }
        apiSubmitSolution(data)
            .then(
            //navigate(`/dbms/${task_id}/${question_id}/submissions/`)
        );
        console.log("submitted");
    }
    async function run() {
        let data = {
            userId: userId,
            taskId: task_id,
            questionId: question_id,
            input: solution
        }
        let result = await apiEvaluateSolution(data)
        setResult(result);
        navigate(`/dbms/${task_id}/${question_id}/result/`);
        console.log("submitted");
    }
    return (
        <div className={`${styles.frame} page`}>
            <div className={styles.buttonPanel}>
                <ButtonPanel
                    names={["Run", "Submit"]}
                    handlers={[run, submit]}
                />
            </div>
            <div className={styles.codeInput}>
                <CodeInput value={solution} setValue={setSolution} />
            </div>
        </div>
    );
}

export default SQLEditor;

/*

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
    );

*/

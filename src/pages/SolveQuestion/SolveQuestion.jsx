import styles from './SolveQuestion.module.css';

import Question from "./Question/Question";
import Solution from "./Solution/Solution";

import { useState, useEffect } from 'react';
import { 
    apiFetchTestCases,
    apiFetchQuestion 
} from '../../services/api.mjs';

function SolveQuestion({questionId}) {
    questionId = '6847ada39879729fffc08dcd';
    const [question, setQuestion] = useState({})
    useEffect(() => {
        async function fetchQuestion() {
            let question = await apiFetchQuestion(questionId);
            console.log(question)
            //question["testCases"] = testCases;
            setQuestion(question);
        }
        fetchQuestion();
    }, [])
    /*let question = {
        _id: 1234,
        title: "Recyclable and Low Fat Products",
        description:`Write a solution to find the ids of products that are both low fat and recyclable.
    Return the result table in any order.
    The result format is in the following example.`,
        schemas: [{
            tableName: 'Employee', 
            rows: [
                {columnName: 'id', columnType: 'VARCHAR2'},
                {columnName: 'name', columnType: 'VARCHAR2'}
            ]
          }]
    }*/
    return (
        <div className={`${styles.frame} page`}>
            <Question question={question}/>
            <Solution questionId={questionId}/>
        </div>
    );
}

export default SolveQuestion;
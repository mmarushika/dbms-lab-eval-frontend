import styles from './SolveQuestion.module.css';

import { QuestionContext } from '../../context/QuestionContext';
import Question from "./Question/Question";
import Solution from "./Solution/Solution";

import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router';
import { 
    apiFetchSubmissions,
    apiFetchQuestion
} from '../../services/StudentApi.mjs';


function SolveQuestion() {
    const location = useLocation();
    
    const {
        userId,
        taskId,
        questionId 
    } = useContext(QuestionContext);

    const [question, setQuestion] = useState({});
    const [submissions, setSubmissions] = useState([]);
    const [submissionsById, setSubmissionsById] = useState({});

    useEffect(() => {
        async function fetchData() {
            let question = await  apiFetchQuestion(questionId)
            let submissions = await apiFetchSubmissions(userId, taskId, questionId);
            submissions.reverse();
            setQuestion(question);
            setSubmissions(submissions);
            setSubmissionsById(
                submissions.reduce((acc, submission) => {
                    acc[submission._id] = submission
                    return acc;
                }, {})
            );
        }
        fetchData();
    }, [location.pathname]);
    return (
        <div className={`${styles.frame} page`}>
            <Question question={question} submissions={submissions}/>
            <Solution submissionsById={submissionsById}/>
        </div>
    );
}

export default SolveQuestion;
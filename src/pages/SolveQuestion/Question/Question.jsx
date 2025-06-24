import styles from './Question.module.css';

import { useState } from 'react';
import { useLocation, useMatch, useNavigate, useParams } from 'react-router'
import SubmissionHistory from '../SubmissionHistory/SubmissionHistory';
import TestCases from '../TestCases/TestCases';
import Description from '../Description/Description';
import TabPanel from '../../../components/TabPanel/TabPanel';

function Question({question, submissions}) {
    const location = useLocation();
    const navigate = useNavigate();

    const {
        task_id,
        question_id,
    } = useParams();

    const descriptionMatch = useMatch("dbms/:task_id/:question_id/description");
    const submissionsMatch = useMatch("dbms/:task_id/:question_id/submissions");
    const submissionMatch = useMatch("dbms/:task_id/:question_id/submissions/:submission");
    const testcasesMatch = useMatch("dbms/:task_id/:question_id/testcases");

    const [defaultTab, setDefaultTab] = useState(getDefaultTab);

    function getTabHandlers() {
        let tabHandlers = {};
        tabHandlers["Description"] = () => {
            navigate(`/dbms/${task_id}/${question_id}/description`);
            setDefaultTab(getDefaultTab());
        }
        tabHandlers["Test Cases"] = () =>{
            navigate(`/dbms/${task_id}/${question_id}/testcases`);
            setDefaultTab(getDefaultTab());
        } 
        tabHandlers["Submissions"] = () => {
            navigate(`/dbms/${task_id}/${question_id}/submissions`);
            setDefaultTab(getDefaultTab());
        }
        return tabHandlers;
    }

    function getDefaultTab() {
        if(descriptionMatch) {
            return "Description";
        } else if(submissionsMatch || submissionMatch) {
            return "Submissions";
        } else if(testcasesMatch) {
            return "Test Cases";
        } else {
            return "Description";
        }
    }
    function getTabs() {
        return ["Description", "Test Cases", "Submissions"];
    }
    function getTabPanels() {
        let tabPanels = {}
        tabPanels["Description"] = <Description 
            title={question.title} 
            description={question.description} 
            schemas={question.schemas}
            testCases={question.testCases}/>
        tabPanels["Test Cases"] = <TestCases testCases={question.testCases}/> 
        tabPanels["Submissions"] = <SubmissionHistory submissions={submissions}/>
        return tabPanels;
    }
    return (
        <div className={styles.frame}>
            <TabPanel 
                tabPanels={getTabPanels()} 
                tabs={getTabs()} 
                defaultTab={getDefaultTab()}
                style={"select"}
                tabHandlers={getTabHandlers()}
            />
        </div>
    ); 
}

export default Question;
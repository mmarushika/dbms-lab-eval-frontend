import styles from "./Solution.module.css";

import { useState, useContext, useEffect } from "react";
import { useLocation, useParams, useMatch, useNavigate } from 'react-router';
import { QuestionContext } from "../../../context/QuestionContext";
import TabPanel from "../../../components/TabPanel/TabPanel";
import SQLEditor from "../../SQLEditor/SQLEditor";
import Submission from "../Submission/Submission";
import TestResult from "../TestResult/TestResult";
import { apiSubmitSolution } from "../../../services/FacultyApi.mjs";


function Solution({submissionsById, testCaseCount}) {
    const navigate = useNavigate();
    const location = useLocation();

    const {
        task_id,
        question_id, 
        submission_id
    } = useParams();

    const {
        questionId
    } = useContext(QuestionContext);

    const submissionMatch = useMatch("dbms/:task_id/:question_id/submissions/:submission");
    const resultMatch = useMatch("dbms/:task_id/:question_id/result");
    const codeMatch = useMatch("dbms/:task_id/:question_id/");

    const [defaultTab, setDefaultTab] = useState(getDefaultTab);

    const [solution, setSolution] = useState("");
    const [result, setResult] = useState(null)

    useEffect(() => {
        setDefaultTab(getDefaultTab);
    }, [location.pathname]);

    function getDefaultTab() {
        if(codeMatch) {
            return "Code";
        } else if(submissionMatch) {
            return "Submission";
        } else if(resultMatch) {
            return "Test Result";
        } else {
            return "Code";
        }
    }
    function getTabHandlers() {
        let tabHandlers = {};
        tabHandlers["Code"] = () => {
            navigate(`/dbms/${task_id}/${question_id}/`);
            setDefaultTab("Code");
        }
        tabHandlers["Test Result"] = () => {
            navigate(`/dbms/${task_id}/${question_id}/result`);
            setDefaultTab("Test Result");
        }
        if(submissionMatch) {
            tabHandlers["Submission"] = () => {
                navigate(`/dbms/${task_id}/${question_id}/result`);
                setDefaultTab("Submission");
            }
        }
        return tabHandlers;
    }
    function getTabPanels() {
        let tabPanels = {}
        tabPanels["Code"] = <SQLEditor 
            solution={solution}
            setSolution={setSolution} 
            setResult={setResult}
        />
        if(submissionMatch) {
            tabPanels["Submission"] = <Submission 
                submission={submissionsById[submission_id]}
                setSolution={setSolution}
            />
        }
        tabPanels["Test Result"] = <TestResult result={result} />
        return tabPanels;
    }
     function getTabs() {
        let tabs = ["Code", "Test Result"];
        if(submissionMatch) {
            tabs.push("Submission");
        }
        return tabs;
    }
    return (
        <div className={styles.frame}>
            <TabPanel
                tabPanels={getTabPanels()} 
                tabs={getTabs()}
                defaultTab={defaultTab}  
                style="select"   
                tabHandlers={getTabHandlers()}
            />
        </div>
    );
}

export default Solution;
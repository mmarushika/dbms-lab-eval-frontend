import styles from './Question.module.css';

import { useState } from 'react';
import SubmissionHistory from '../SubmissionHistory/SubmissionHistory';
import TestCases from '../TestCases/TestCases';
import Description from '../Description/Description';
import TabPanel from '../../../components/TabPanel/TabPanel';

function Question({question}) {
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
            console.log(question.testCases);
        tabPanels["Test Cases"] = <TestCases testCases={question.testCases}/> 
        tabPanels["Submissions"] = <SubmissionHistory />
        return tabPanels;
    }
    return (
        <div className={styles.frame}>
            <TabPanel 
                tabPanels={getTabPanels()} 
                tabs={getTabs()} 
                defaultTab="Description"   
                style={"select"}  
            />
        </div>
    ); 
}

export default Question;
import styles from './TestCaseResult.module.css';

import { useState, useEffect } from 'react';

import TabButton from '../../../components/TabButton/TabButton';
import Table from '../../../components/Table/Table';
import CodeOutput from '../../SQLEditor/CodeOutput/CodeOutput';

function TestCaseResult({ testCases }) {
    const [activeTab, setActiveTab] = useState("Case 1");
    const [tabPanels, setTabPanels] = useState(getTabPanels);
    console.log(testCases[0]);
    function getTabPanels() {
        let tabPanels = {};
        for(let i = 0; i <=testCases.length; i++) {
            tabPanels[`Case ${i + 1}`] = <CodeOutput 
                output={testCases[i]?.output} 
                errorMsg={testCases[i]?.errorMsg} 
            />
        }
        return tabPanels;
    }
    function changePanel(e) {
        setActiveTab(e.target.id);
    }

    return (
        <div className={styles.frame}>
            <div className={styles.bar}>
                {testCases?.map((testCase, i) =>
                    <TabButton
                        key={i}
                        handler={changePanel}
                        name={`Case ${i + 1}`}
                        isActive={`Case ${i + 1}` == activeTab}
                        style={testCase.passed ? "passed" : "failed"}
                    />)
                }
            </div>
            <div className={"bold blue"}>Output</div>
            <div className={styles.panel}>
                {tabPanels[activeTab]}
            </div>
        </div>
    );
}

export default TestCaseResult;
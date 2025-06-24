import styles from './TestCases.module.css';;

import TabPanel from '../../../components/TabPanel/TabPanel';
import TestCase from '../TestCase/TestCase';

import { useEffect, useState } from 'react';

function TestCases({ testCases }) {
    const [testCaseTabs, setTestCaseTabs] = useState([])
    function getTestCaseTabs() {
        let tabs = [];
        let tabPanels = {}
        let defaultTab = "Case 1";
        for(let i = 0; i < testCases?.length; i++) {
            tabs.push(`Case ${i + 1}`);
            tabPanels[`Case ${i + 1}`] = <TestCase testCase={testCases[i]} />
        }
        return (
            <TabPanel 
                tabPanels={tabPanels} 
                tabs={tabs} 
                defaultTab={defaultTab} 
                style="underline"
                tabHandlers={null}
            />
        );
    }
    
    return ( 
        <div className={styles.frame}>
            { getTestCaseTabs() }
        </div>
    );
}

export default TestCases;
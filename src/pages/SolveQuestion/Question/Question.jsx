import styles from './Question.module.css';

import { useState } from 'react';
import SubmissionHistory from '../SubmissionHistory/SubmissionHistory';
import Description from '../Description/Description';
import TabPanel from '../../../components/TabPanel/TabPanel';

function Question() {
    const [tabPanels, setTabPanels] = useState(getTabPanels) // funciton called only once
    function getTabPanels() {
        let tabPanels = {}
        tabPanels["Description"] = <Description />
        tabPanels["Submissions"] = <SubmissionHistory />
        console.log()
        return tabPanels;
    }
    return (
        <div className={styles.frame}>
            <TabPanel tabPanels ={tabPanels}></TabPanel>
        </div>
    ); 
}

export default Question;
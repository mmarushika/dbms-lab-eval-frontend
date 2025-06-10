import styles from "./Solution.module.css";

import { useState } from "react";
import TabPanel from "../../../components/TabPanel/TabPanel";
import CodeInput from "../CodeInput/CodeInput";
import Submission from "../Submission/Submission";

function Solution() {
    const [tabPanels, setTabPanels] = useState(getTabPanels) // function called only once
    function getTabPanels() {
        let tabPanels = {}
        tabPanels["Code"] = <CodeInput />
        tabPanels["Submission"] = <Submission />
        return tabPanels;
    }
    return (
        <div className={styles.frame}>
            <TabPanel tabPanels ={tabPanels} defaultTab="Code"></TabPanel>
        </div>
    );
}

export default Solution;
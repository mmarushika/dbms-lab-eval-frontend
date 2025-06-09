import styles from './TabPanel.module.css';

import { useState } from 'react';

import TabButton from './TabButton/TabButton';

function TabPanel({ tabPanels }) {
    const [activeTab, setActiveTab] = useState("Description");

    function changePanel(e) {
        setActiveTab(e.target.id);
    }
    return (
        <div className={styles.frame}>
            <div className={styles.bar}>
                {Object.keys(tabPanels).map(tabName =>
                    <TabButton key={tabName} handler={changePanel} name={tabName} activeStatus={tabName==activeTab}></TabButton>)
                }
            </div>
            <div className={styles.panel}>
                {tabPanels[activeTab]}
            </div>
        </div>
    );
}

export default TabPanel;
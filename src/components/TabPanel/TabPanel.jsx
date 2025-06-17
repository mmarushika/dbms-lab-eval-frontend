import styles from './TabPanel.module.css';

import { useState } from 'react';

import TabButton from '../TabButton/TabButton';

function TabPanel({ tabPanels, tabs, defaultTab, style }) {
    const [activeTab, setActiveTab] = useState(defaultTab);
    function changePanel(e) {
        setActiveTab(e.target.id);
    }
    function getTabBarStyle() {
        let tabBarStyle = ``;
        switch (style) {
            case "select":
                tabBarStyle = `${styles.bar_select}`;
                break;
            case "underline":
                tabBarStyle = `${styles.bar_underline}`;
                break;
        }
        return tabBarStyle;
    }
    return (
        <div className={styles.frame}>
            <div className={getTabBarStyle()}>
                {tabs?.map(tabName =>
                    <TabButton
                        key={tabName}
                        handler={changePanel}
                        name={tabName}
                        isActive={tabName == activeTab}
                        style={style}
                    />)
                }
            </div>
            <div className={styles.panel}>
                {tabPanels[activeTab]}
            </div>
        </div>
    );
}

export default TabPanel;
import styles from './TabButton.module.css';

function TabButton({ name, handler, isActive, style }) {
    function getTabStyle() {
        let tabStyle = ``;
        switch (style) {
            case "select":
                //tabStyle = `${styles.tab_select}`;
                if (isActive) {
                    tabStyle = `${styles.active_select}`;
                } else {
                    tabStyle = `${styles.tab_select}`;
                }
                break;
            case "underline":
                if (isActive) {
                    tabStyle = `${styles.active_underline}`;
                } else {
                    tabStyle = `${styles.tab_underline}`;
                }
                break;
        }
        return tabStyle;
    }
    return (
        <button
            id={name}
            className={getTabStyle()}
            onClick={handler}>{name}
        </button>
    )
}

export default TabButton;
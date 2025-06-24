import styles from './TabButton.module.css';

function TabButton({ name, handler, isActive, style }) {
    function getTabStyle() {
        console.log(style);
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
            case "failed":
                if (isActive) {
                    tabStyle = `${styles.active_failed}`;
                } else {
                    tabStyle = `${styles.tab_failed}`;
                }
                break;
            case "passed":
                if (isActive) {
                    tabStyle = `${styles.active_passed}`;
                } else {
                    tabStyle = `${styles.tab_passed}`;
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
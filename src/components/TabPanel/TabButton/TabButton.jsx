import styles from './TabButton.module.css';

function TabButton({name, handler, activeStatus}) {
    function getTabStyle() {
        return activeStatus ? styles.active : styles.tab;
    }
    return (
       <button id={name} className={getTabStyle()}
                        onClick={handler}>{name}</button>
    )
}

export default TabButton;
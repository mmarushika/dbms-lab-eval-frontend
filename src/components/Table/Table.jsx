import styles from './Table.module.css';
import { useState, useEffect } from 'react';
import Button from '../Button/Button';

function Table({ tableName, headers, rows, isCollapsable }) {
    const [collapseState, setCollapseState] = useState(isCollapsable ?? false);

    function renderHeaders() {
        return (
            <tr>
                {headers?.map(i => <th className="gray" key={i}>{i}</th>)}
            </tr>
        );
    }
    function renderRows() {
        let key = 0;
        return rows?.map(row => (
            <tr key={key++}>
                {Object.keys(rows[0]).map(col => (
                    <td key={col}>{row[col]}</td>
                ))}
            </tr>
        ));
    }

    return (
        <div>
            <div className={styles.collapse}>
                <div className={`${styles.table_name} dark-gray`}>{tableName}</div>
                {
                    tableName != "" && isCollapsable ? 
                        <Button 
                            name={collapseState ? "View" : "Collapse"}
                            handler={() => setCollapseState(!collapseState)}
                        /> : <></>
                }
        </div >
            <div className={styles.table}>
                {
                    collapseState && isCollapsable ? <></> :
                        <table>
                            <thead>
                                {renderHeaders()}
                            </thead>
                            <tbody>
                                {renderRows()}
                            </tbody>
                        </table>
                }
            </div>
        </div>
    )
}

export default Table;
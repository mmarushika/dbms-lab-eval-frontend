import styles from './Table.module.css';
import { useState, useEffect } from 'react';
function Table({ tableName, headers, rows}) {
    function renderHeaders() {
        return (
            <tr>
                {headers?.map(i => <th key={i}>{i}</th>)}
            </tr>
        );
    }
    function renderColumns() {
        let key = 0;
        return rows?.map(row => (
            <tr key={key++}>
                {headers.map(col => (
                    <td key={col}>{row[col]}</td>
                ))}
            </tr>
        ));
    }

    return (
        <div>
            <div className={styles.table_name}>{tableName}</div>
            <table>
                <thead>
                    {renderHeaders()}
                </thead>
                <tbody>
                    {renderColumns()}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
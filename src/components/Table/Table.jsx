import styles from './Table.module.css';

function Table({tableName, rows}) {

    function renderHeaders() {
        return (
            <tr>
                {Object.keys(rows[0]).map(i => <th key={i}>{i}</th>)}
            </tr>
        );
    }
    function renderColumns() {
        let key = 0;
        return rows.map(row => {
            return(
                <tr key={key++}>
                    {Object.keys(row).map(col =>
                        <td key={col}>{row[col]}</td>
                    )}
                </tr>
            );
        });

    }
    return(
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
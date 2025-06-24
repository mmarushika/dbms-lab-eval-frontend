import styles from './TestCase.module.css';;

import Table from '../../../components/Table/Table';

function TestCase({ testCase }) {

    return (
        <div className={styles.frame}>
            <h3 className={styles.heading}>Input</h3>
            {
                testCase.input.map(i => 
                    <Table
                        key={i.tableName} 
                        tableName={i.tableName}
                        headers={Object.keys(i.rows[0])}
                        rows={i.rows}
                        isCollapsable={true}
                    />
                )
            }    
            <h3 className={styles.heading}>Output</h3>
            <Table 
                tableName="" 
                headers={Object.keys(testCase.output[0])} 
                rows={testCase.output}
                isCollapsable={false}
            />
        </div>
    );
}

export default TestCase;